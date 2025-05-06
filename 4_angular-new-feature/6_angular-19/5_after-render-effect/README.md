# New afterRenderEffect function

Hàm afterRenderEffect trong Angular là một API thử nghiệm được thiết kế để xử lý các tác dụng phụ chỉ xảy ra sau khi thành phần kết xuất xong. Hiệu ứng chạy sau mỗi chu kỳ kết xuất nếu các phụ thuộc của nó thay đổi, cho phép các nhà phát triển phản ứng với các thay đổi trạng thái chỉ sau khi DOM được cập nhật.

Trái ngược với 'afterRender' và 'afterNextRender', hiệu ứng này theo dõi các phần phụ thuộc được chỉ định và thực thi lại chúng sau mỗi chu kỳ kết xuất bất cứ khi nào chúng thay đổi, khiến nó trở nên lý tưởng cho các tác vụ sau kết xuất đang diễn ra liên quan đến dữ liệu phản ứng.

'afterRender' và 'afterNextRender' không theo dõi bất kỳ phần phụ thuộc nào và luôn lên lịch gọi lại chạy sau chu kỳ kết xuất.

```ts
 counter = signal(0);

  constructor() {
    afterRenderEffect(() => {
      console.log('after render effect', this.counter());
    })

    afterRender(() => {
      console.log('after render', this.counter())
    })
  }
```

Trong ví dụ đã cho, lệnh gọi lại afterRender sẽ được thực thi sau mỗi chu kỳ kết xuất. Mặt khác, lệnh gọi lại afterRenderEffect sẽ chỉ được thực thi sau các chu kỳ kết xuất nếu giá trị của bộ đếm tín hiệu đã thay đổi.

## afterRender()

- Mục đích: Là một lifecycle hook của Angular, được gọi một lần sau mỗi lần component render xong (bao gồm cả lần render đầu tiên).

- Đặc điểm:
  - Không tự động theo dõi các dependency (ví dụ: signals). Nó chạy mỗi khi component render, bất kể giá trị của signal có thay đổi hay không.
  - Phù hợp cho các tác vụ cần truy cập DOM sau khi view được cập nhật.

Ví dụ:

```ts
  number = 0;

  constructor() {
    afterRender(() => {
      console.log('after render', this.counter())
    })
  }

  updateNumber() {
    this.number++;
    console.log('update number', this.number);
  }
```

Sẽ log giá trị counter mỗi khi component render lại, ngay cả khi counter không thay đổi


## afterRenderEffect() (Giả định)

- Giả thuyết: Nếu afterRenderEffect là một hàm tùy chỉnh kết hợp effect() và afterRender(), nó sẽ:
- Tạo một reactive effect (sử dụng effect()) được kích hoạt sau mỗi lần render.
- Tự động theo dõi các signals được sử dụng bên trong nó và chỉ chạy lại khi các signals này thay đổi.

Ví dụ:

```typescript
afterRenderEffect(() => {
  console.log('after render effect', this.counter());
});
```

Sẽ log giá trị counter chỉ khi counter thay đổi, nhưng sau khi component đã render xong.

Tóm tắt sự khác biệt
Feature	            afterRender()       	afterRenderEffect() (Giả định)
Kích hoạt	        Sau mỗi lần render	    Sau mỗi lần render, nhưng chỉ khi dependency thay đổi
Theo dõi signals	❌ Không	               ✅ Có
Use Case	        DOM operations, side effects không phụ thuộc giá trị	Side effects phụ thuộc vào giá trị signals