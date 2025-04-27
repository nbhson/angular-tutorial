# New (experimental) API: resource

Angular đang giới thiệu một API thử nghiệm gọi là Resource (), được thiết kế để quản lý các hoạt động không đồng bộ. 

Nó có các cơ chế tích hợp để ngăn chặn các race conditions, theo dõi trạng thái tải, xử lý lỗi, cập nhật giá trị theo cách thủ công và kích hoạt dữ liệu tìm nạp thủ công khi cần thiết.

Dưới đây là một ví dụ về việc sử dụng tài nguyên:

```ts
fruitId = signal<string>('apple-id-1');

  fruitDetails = resource({
    request: this.fruitId,
    loader: async (params) => {
      const fruitId = params.request;
      const response = await fetch(`https://api.example.com/fruit/${fruitId}`, {signal: params.abortSignal});
      return await response.json() as Fruit;
    }
  });

  protected isFruitLoading = this.fruitDetails.isLoading;
  protected fruit = this.fruitDetails.value;
  protected error = this.fruitDetails.error;


  protected updateFruit(name: string): void {
    this.fruitDetails.update((fruit) => (fruit ? {
      ...fruit,
      name,
    } : undefined))
  }

  protected reloadFruit(): void {
    this.fruitDetails.reload();
  }

  protected onFruitIdChange(fruitId: string): void {
    this.fruitId.set(fruitId);
  }
```

Hãy bắt đầu với việc khai báo resource. Tham số yêu cầu tùy chọn chấp nhận tín hiệu đầu vào mà resource không đồng bộ được liên kết (trong ví dụ của chúng tôi, nó là trái cây, nhưng nó cũng có thể là một tín hiệu được tính toán bao gồm nhiều giá trị). Chúng tôi cũng xác định chức năng Trình tải, trong đó chúng tôi không đồng bộ hóa dữ liệu (chức năng sẽ trả về lời hứa). resource được tạo có tên là FruitDetails cho phép chúng ta, trong số những thứ khác:

- Truy cập tín hiệu giá trị hiện tại (cũng trả về không xác định khi tài nguyên không có sẵn vào lúc này),
- Truy cập tín hiệu trạng thái (một trong: nhàn rỗi, lỗi, tải, tải lại, giải quyết, cục bộ),
- Truy cập các tín hiệu bổ sung như ‘isloading, hoặc‘ lỗi,
- Trình kích hoạt ‘Trình tải chức năng một lần nữa (sử dụng phương thức tải lại),
- Cập nhật trạng thái cục bộ của tài nguyên (sử dụng phương thức ‘Cập nhật))

Tài nguyên sẽ được tự động tải lại nếu tín hiệu 'yêu cầu (trong trường hợp của chúng tôi Fruitid) thay đổi. Trình tải cũng được kích hoạt khi tài nguyên được tạo lần đầu tiên.

Còn Rxjs Interop thì sao? Angular cũng cung cấp một đối tác RXJS của phương thức tài nguyên được gọi là RxResource. Trong trường hợp này, phương thức bộ tải trả về có thể quan sát được, nhưng tất cả các thuộc tính khác vẫn là tín hiệu.

```ts
fruitDetails = rxResource({
    request: this.fruitId,
    loader: (params) => this.httpClient.get<Fruit>(`https://api.example.com/fruit/${params.request}`)
  })
```
## Reference

https://angular.love/angular-19-whats-new

https://blog.angular.dev/meet-angular-v19-7b29dfd05b84

https://medium.com/@rajat29gupta/highlight-key-new-features-in-angular-19-de77981756c7