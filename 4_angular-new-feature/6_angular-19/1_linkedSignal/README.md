# Linked Signal

LinkedSignal là một tín hiệu có thể ghi phản ứng với các thay đổi trong tín hiệu nguồn và có thể tự đặt lại dựa trên giá trị được tính toán.

```ts
export declare function linkedSignal<S, D>(options: {
    source: () => S;
    computation: (source: NoInfer<S>, previous?: {
        source: NoInfer<S>;
        value: NoInfer<D>;
    }) => D;
    equal?: ValueEqualityFn<NoInfer<D>>;
}): WritableSignal<D>;
```
Giá trị tín hiệu ban đầu được tính toán bằng cách sử dụng chức năng `computation`, giá trị tín hiệu có thể được thay đổi thủ công bằng cách sử dụng phương thức SET, nhưng khi giá trị tín hiệu 'nguồn của nguồn thay đổi, giá trị tín hiệu được liên kết sẽ được tính toán lại bằng phương thức `computation`

Example:

```ts
protected readonly colorOptions = signal<Color[]>([{
    id: 1,
    name: 'Red',
  }, {
    id: 2,
    name: 'Green',
  }, {
    id: 3,
    name: 'Blue',
  }]);

  protected favoriteColorId = linkedSignal<Color[], number | null>({
    source: this.colorOptions,
    computation: (source, previous) => {
      if(previous?.value) {
        return source.some(color => color.id === previous.value) ? previous.value : null;
      }
      return null;
    }
  });

  protected onFavoriteColorChange(colorId: number): void {
    this.favoriteColorId.set(colorId);
  }

  protected changeColorOptions(): void {
    this.colorOptions.set([
      {
        id: 1,
        name: 'Red',
      },
      {
        id: 4,
        name: 'Yellow',
      },
      {
        id: 5,
        name: 'Orange',
      }
    ])
  }}
```

Chúng tôi có các bảng màu tín hiệu, lưu trữ một danh sách các màu có thể chọn người dùng (mỗi màu có ID và tên). Chúng tôi cũng có một tín hiệu được liên kết gọi là favoriteColorId, đại diện cho người dùng đã chọn màu từ danh sách.

Giá trị ban đầu của tín hiệu này là kết quả của hàm computation, sẽ là null (vì trạng thái trước của tín hiệu được liên kết không được xác định). Tín hiệu được liên kết, giống như bất kỳ tín hiệu có thể ghi nào khác, cung cấp một phương thức thiết lập để đặt ID của màu người dùng đã chọn (xem hàm onFavoriteColorChange).

Giả sử rằng sau khi chọn một màu vì một số lý do, danh sách các màu có sẵn để lựa chọn được thay đổi (xem Phương pháp ChangeColorOptions). Kết quả của việc thay đổi giá trị của tín hiệu màu, giá trị của tín hiệu được liên kết yêu thích được tính toán lại bằng phương pháp tính toán. 

Trong ví dụ trên, nếu màu được chọn cũng nằm trong danh sách mới các màu có sẵn, giá trị tín hiệu vẫn giữ nguyên. Mặt khác, nếu màu được chọn trước đó không có trong danh sách mới, giá trị được đặt thành NULL.

## Reference

https://angular.love/angular-19-whats-new

https://blog.angular.dev/meet-angular-v19-7b29dfd05b84

https://medium.com/@rajat29gupta/highlight-key-new-features-in-angular-19-de77981756c7