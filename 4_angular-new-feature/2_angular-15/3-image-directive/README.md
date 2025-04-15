# Image Directive

## Basic HTML5 Image Terminology

If you’re using pure HTML5, there are a few img attributes for the image tag besides the src used to display it.

### SEO

- `width` / `height`: Chiều rộng và chiều cao được hiển thị cơ bản của hình ảnh. Điều này cực kỳ quan trọng đối với SEO và giúp các trình duyệt câm hiển thị hình ảnh chính xác
- `alt`: Nội dung "alternative fallback" sẽ được hiển thị nếu hình ảnh không được tải. Điều này cũng được hiển thị khi bạn di chuột qua một hình ảnh. Google sử dụng điều này để lập chỉ mục.

### Fetching

- `preconnect` / `preload`: Đây là các giá trị rel của thẻ liên kết cho phép trang của bạn tải trước hoặc kết nối trước với các nguồn bên ngoài. Tải trước thường được sử dụng cho phương tiện truyền thông.
+ `Preconnect`: Đây là một kỹ thuật được sử dụng để giảm độ trễ trong việc thiết lập kết nối với máy chủ từ xa bằng cách tiền kết nối đến máy chủ, bao gồm cả việc giải quyết DNS và thiết lập TCP handshake trước khi thực sự yêu cầu tài nguyên từ máy chủ đó. Khi bạn sử dụng thẻ <link rel="preconnect" href="https://some-cdn.com">, trình duyệt sẽ tiến hành kết nối đến https://some-cdn.com ngay lập tức, giảm bớt thời gian chờ khi trang web cần tải tài nguyên từ URL này.
+ `Preload`: Đây là một kỹ thuật giúp tăng tốc độ tải trang web bằng cách bắt đầu tải các tài nguyên cần thiết ngay cả trước khi trình duyệt phân tích xong mã HTML. Khi bạn sử dụng thẻ <link rel="preload" href="https://some-cdn.com/somefile.js">, trình duyệt sẽ bắt đầu tải file somefile.js từ https://some-cdn.com ngay lập tức, giúp tăng tốc độ tải trang khi trang web cần sử dụng file này2.

```html
<link rel="preconnect" href="https://some-cdn.com">
```

- `fetchPriority`: Possible options being `low`, `high` or `auto` which tell the browser how to prioritize fetching the image
- `loading`: Các tùy chọn có thể là `eager` hoặc `lazy`, cho trình duyệt biết cách tải hình ảnh. Tải từng phần sẽ không xảy ra cho đến khi hình ảnh được xem.

```html
<img src="hermes.jpg" fetchpriority="high" loading="eager" alt="Adorable kitty">
```

### Sizing

- `srcset`: Đây là danh sách nguồn hình ảnh dành cho các hình ảnh có kích thước khác nhau với chiều rộng cho trình duyệt biết cách chọn hình ảnh dựa trên các kích thước màn hình khác nhau.
- `sizes`: Bạn cũng cần phải tính đến độ phân giải. Điều này chỉ định hình ảnh nào sẽ sử dụng dựa trên chế độ xem của người dùng.

```html
<img
  srcset="elva-fairy-480w.jpg 480w, elva-fairy-800w.jpg 800w"
  sizes="(max-width: 600px) 480px,
         800px"
  src="elva-fairy-800w.jpg"
  alt="Elva dressed as a fairy" />
```

### Optional Sources

- `picture` / `source`:  Thẻ hình ảnh và `source` cho phép trình duyệt của bạn chọn nguồn tốt nhất cho hình ảnh nếu trình duyệt của bạn hỗ trợ các công nghệ như WebP, AVIF hoặc SVG. Bạn có thể sử dụng thuộc tính `type` để đặt loại hình ảnh và thuộc tính media cho hình ảnh phản hồi theo cách này.

```html
<picture>
  <source type="image/webp" srcset="flower.webp">
  <source type="image/jpeg" media="(max-width: 799px)" srcset="flower-480w.jpg">
  <source type="image/jpeg" media="(min-width: 800px)" srcset="flower-800w.jpg">
  <img src="flower.jpg" alt="Flowers of sunshine">
</picture>
```

![Before and after of a demo application](https://miro.medium.com/v2/resize:fit:720/0*Vyptsr-BPVMu43Nf)

## How NgOptimizedImage Helps

The v15 release also includes a few new features for the image directive:

> Bằng cách tích hợp chỉ thị NgOptimizedImage vào thành phần Angular hoặc NgModule, bạn có thể giảm đáng kể thời gian tải xuống hình ảnh trong ứng dụng của mình. Chỉ thị này đơn giản hóa việc triển khai các kỹ thuật tối ưu hóa hiệu suất để tải hình ảnh.

- `Automatic srcset generation`: lệnh này đảm bảo rằng hình ảnh có kích thước phù hợp được yêu cầu bằng cách tạo thuộc tính srcset cho bạn. Điều này có thể làm giảm thời gian tải xuống hình ảnh của bạn.
- `Fill mode [experimental]`: chế độ này làm cho hình ảnh lấp đầy vùng chứa chính của nó, loại bỏ yêu cầu khai báo chiều rộng và chiều cao của hình ảnh. Đây là một công cụ hữu ích nếu bạn không biết kích thước hình ảnh của mình hoặc nếu bạn muốn di chuyển hình nền CSS để sử dụng lệnh.

### Resource Contention

Theo mặc định, tất cả các hình ảnh đều được yêu cầu cùng lúc “đánh cắp băng thông” của nhau. Đây là cách bạn khắc phục điều đó.

Sử dụng chỉ thị hình ảnh. Bây giờ theo mặc định, tất cả hình ảnh đều được tải từng phần. Tuy nhiên, như bạn có thể thấy từ cảnh báo ở trên, những hình ảnh được hiển thị ngay lập tức (không cần phải cuộn) phải được đặt ở mức độ ưu tiên. Về cơ bản, điều này đặt mức tải thành háo hức và đặt mức độ ưu tiên tìm nạp lên cao cho hình ảnh LCP. Điều này một mình sẽ đánh bật giây.

```HTML
<img ngSrc="someimage.jpg" priority>

<!-- Under the hood -->
<img src="someimage.jpg" loading="eager" fetchpriority="high" alt="some image">
```

### Resource Load Delay
- Để ngăn trình duyệt phải tra cứu DNS cho các hình ảnh được lưu trữ bên ngoài, hãy nhận kết nối ban đầu đó bằng một cái bắt tay và thương lượng an toàn với máy chủ, bạn có thể kết nối trước với các miền mà bạn biết trang web cuối cùng sẽ kết nối. Điều này ngăn ngừa bất kỳ sự chậm trễ nào trong việc kết nối với hình ảnh.

- Tất cả các hình ảnh không được ưu tiên cần phải được tải từng phần và tất cả các nguồn bên ngoài cần sử dụng kết nối trước. Bên cạnh việc tải mọi thứ cùng một lúc, nó còn tải trước những gì cần thiết và kết nối trước với máy chủ. Điều này hoạt động tốt với tranh chấp tài nguyên.

### Resource Time Delay
- Đây là thời gian thực sự cần thiết để tải xuống hình ảnh, bất cứ khi nào bạn quyết định tải xuống. Không phải lúc nào bạn cũng muốn có phiên bản lớn nhất của hình ảnh vì một hình ảnh lớn có thể mất 2 giây. Tất cả những gì bạn phải làm là xác định thuộc tính kích thước và NgOptimizedImage sẽ tự động tạo srcset cho bạn!

## Stable NgOptimizedImage Directive

NgOptimizedImage trong Angular 15 thay đổi bao gồm một loạt các phương pháp hay nhất về hình ảnh vượt ra ngoài tối ưu hóa LCP. Sau đây là một số phương pháp này:

- Responsive Image Handling: Chỉ thị tự động tạo các thuộc tính src set đáp ứng dựa trên khả năng của thiết bị. Điều này đảm bảo rằng phiên bản hình ảnh phù hợp được tải theo kích thước và độ phân giải màn hình, nâng cao trải nghiệm của người dùng trên nhiều thiết bị khác nhau.
- WebP Format Support: NgOptimizedImage cung cấp hỗ trợ dự phòng liền mạch cho định dạng hình ảnh WebP. WebP cung cấp khả năng nén và hiệu suất vượt trội cho các trình duyệt hỗ trợ, giúp tải hình ảnh nhanh hơn và cải thiện hiệu quả.
- Lazy Loading: Chỉ thị này triển khai tải chậm cho các hình ảnh không hiển thị ngay trong chế độ xem. Bằng cách trì hoãn việc tải các hình ảnh này cho đến khi cần, thời gian tải trang ban đầu được cải thiện, dẫn đến trải nghiệm người dùng nhanh hơn và mượt mà hơn. Cách tiếp cận này cũng giúp tiết kiệm băng thông, đặc biệt là đối với người dùng có gói dữ liệu hạn chế.
- Image Compression: NgOptimizedImage kết hợp các kỹ thuật nén hình ảnh để giảm kích thước tệp mà không làm giảm đáng kể chất lượng hình ảnh. Bằng cách tối ưu hóa hình ảnh, thời gian tải xuống được giảm, dẫn đến tải trang nhanh hơn và cải thiện hiệu suất tổng thể.

## All of properties

### Enable the directive

To activate the NgOptimizedImage directive, replace your image's src attribute with `ngSrc`.

```html
<img ngSrc="cat.jpg">
```

### Mark images as priority

Luôn đánh dấu hình ảnh LCP trên trang của bạn là ưu tiên để ưu tiên tải hình ảnh đó.
```html
<img ngSrc="cat.jpg" width="400" height="200" priority>
```

Marking an image as priority applies the following optimizations:

#### `fetchpriority` <https://web.dev/articles/fetch-priority>
- fetchpriority="`high`":
  - Cho trình duyệt biết đây là tài nguyên quan trọng cần tải sớm
  - Thường dùng cho các tài nguyên thiết yếu như hero image, CSS/JS quan trọng
  - Trình duyệt sẽ cấp phát nhiều tài nguyên hơn để tải nhanh hơn
- fetchpriority="`low`":
  - Báo hiệu đây là tài nguyên ít quan trọng, có thể tải sau
  - Dùng cho các tài nguyên không thiết yếu như ảnh ở cuối trang
  - Trình duyệt sẽ tải với độ ưu tiên thấp hơn
  
#### `loading` <https://web.dev/articles/browser-level-image-lazy-loading>
- loading="`eager`":
  - Tải hình ảnh ngay lập tức, không quan tâm vị trí của nó có nằm trong viewport hay không
  - Đây là hành vi mặc định của trình duyệt
  - Phù hợp cho các hình ảnh quan trọng cần hiển thị ngay (như hero image)
  - Có thể tiêu tốn băng thông không cần thiết nếu sử dụng cho tất cả hình ảnh
- loading="`lazy`":
  - Trì hoãn việc tải hình ảnh cho đến khi nó gần xuất hiện trong viewport
  - Giúp tối ưu hiệu suất trang web bằng cách chỉ tải khi cần thiết
  - Phù hợp cho các hình ảnh ở phía dưới trang
  - Tiết kiệm băng thông và bộ nhớ

> Nên kết hợp với fetchpriority để tối ưu hóa
> Lazy loading có thể gây ra layout shift (hay Cumulative Layout Shift - CLS) nếu không xử lý đúng cách. Nên luôn chỉ định kích thước hình ảnh

#### Include Width and Height:
- In order to prevent image-related layout shifts, NgOptimizedImage requires that you specify a height and width for your image, as follows:
```html
<img ngSrc="cat.jpg" width="400" height="200">
```
- For responsive images it's also important to set a value for sizes.

#### Using fill mode
- In cases where you want to have an image fill a containing element, you can use the fill attribute. This is often useful when you want to achieve a "background image" behavior. It can also be helpful when you don't know the exact width and height of your image, but you do have a parent container with a known size that you'd like to fit your image into (see "object-fit" below).
- When you add the fill attribute to your image, you do not need and should not include a width and height, as in this example:

```html
<img ngSrc="cat.jpg" fill>
```

> `IMPORTANT`: For the "fill" image to render properly, its parent element must be styled with position: "relative", position: "fixed", or position: "absolute".


#### Using placeholders

- NgOptimizedImage can display an automatic low-resolution placeholder for your image if you're using a CDN or image host that provides automatic image resizing. Take advantage of this feature by adding the placeholder attribute to your image:

```html
<img ngSrc="cat.jpg" width="400" height="200" placeholder>
```

- The default size for generated placeholders is 30px wide. You can change this size by specifying a pixel value in the IMAGE_CONFIG provider, as seen below:

```angular
providers: [
  {
    provide: IMAGE_CONFIG,
    useValue: {
      placeholderResolution: 40
    }
  },
],
```

- You can also specify a placeholder using a base64 data URL without an image loader
```html
<img 
  ngSrc="cat.jpg" 
  width="400" 
  height="200" 
  placeholder="data:image/png;base64,iVBORw0K..."
/>
```

## Roadmap

- There is a developer preview for fill, which is available now. This allows you to eliminate width/height and add styles for auto sizing.
- Picture tag support
- Auto-generate preconnect link tags

<https://angular.dev/guide/image-optimization>