# Angular Micro Frontends

## Monolithic Architecture là gì?

- Trong *Monolithic Architecture* toàn bộ ứng dụng web được xây dựng và triển khai như một đơn vị duy nhất. Nó bao gồm cả giao diện người dùng, xử lý nghiệp vụ và quản lý dữ liệu, tất cả đều được kết hợp vào một ứng dụng duy nhất và triển khai trên một máy chủ hoặc một nhóm máy chủ.
- *Monolithic Architecture* có thể được coi là một hệ thống đơn giản và dễ hiểu. Nó được phát triển từ những năm đầu của phát triển ứng dụng web và phù hợp cho các ứng dụng web nhỏ và đơn giản.
- Tuy nhiên, khi ứng dụng lớn hơn và phức tạp hơn, *Monolithic Architecture* có thể gặp phải một số hạn chế và khó khăn, bao gồm khả năng mở rộng, bảo trì, sử dụng lại và sự phụ thuộc giữa các thành phần của ứng dụng.

> Do đó, các kiến trúc phát triển web hiện đại, như Microservices và Micro Frontends, được phát triển để giải quyết các hạn chế của Monolithic Architecture.

## Micro Frontends là gì? 

- Các ứng dụng *Single Page Apps* (SPAs) cực kỳ phổ biến, chúng có nhiều tính năng và cũng rất phức tạp và thường được kết hợp với kiến trúc Microservices ở tầng backend
- Sau một thời gian phát triển, các ứng dụng SPAs sẽ trở nên cồng kềnh, và khó hơn cho việc maintain và chúng được gọi là *Frontend Monolith*.

> Ý tưởng của Micro Frontends đó là sẽ phân tách các ứng dụng này thành các phần kết hợp của các tính năng, mỗi tính năng có thể được phát triển bới một team độc lập.

### Phương pháp để áp dụng Micro Frontends

- `Iframe`: Phương pháp này dễ để áp dụng nhưng có chứa nhiều giới hạn như việc navigation, thực thi các đoạn JavaScript từ Host App, ...

- `Proxy like nginx`: Phương pháp này yêu cầu việc phát triển các ứng dụng phải độc lập, ví dụ <host>/mailbox, <host>/calendar là các app Frontend khác nhau. Phương pháp này có một vấn đề là khi navigate từ app này sang app khác thì bạn sẽ bị reload giống như ứng dụng client-server thông thường.

- `Web Components`: Đây là một công nghệ không quá mới trong thời gian trở lại đây. Các framework áp dụng hoặc tạo ra Custom Elements khá nhiều. Ví dụ Angular Elements, Stencil. Chúng có ưu điểm là bạn có thể tạo ra được các element và có thể sử dụng như là một thẻ html thông thường ở bất cứ framework nào (Framework Agnostic)

- `Orchestrator Frameworks`: Webpack 5 and Module Federation

## Hướng dẫn

Ví dụ đang sử dụng: Webpack 5 and Module Federation

<https://github.com/angular-vietnam/100-days-of-angular/blob/master/Day039-micro-frontends.md>

### Tóm tắt

- Đây là một repository về một ứng dụng Web sử dụng Angular framework, trong đó ứng dụng được chia thành nhiều phần `(micro-frontends)` và được tích hợp với nhau thông qua kỹ thuật `Module Federation` của `Webpack`.

- Cụ thể, trong thư mục apps, có 2 ứng dụng con (*shell và customer*) và 2 ứng dụng micro-frontend (*calendar và mailbox*), mỗi ứng dụng micro-frontend đều được đóng gói như một package npm. Ứng dụng shell chứa các file HTML, CSS, TypeScript, và file cấu hình của ứng dụng chính. Ứng dụng customer cũng có các file HTML, CSS, TypeScript, và file cấu hình của riêng nó.

- Để chia sẻ các module giữa các ứng dụng, repository này sử dụng kỹ thuật Module Federation của Webpack. Các cấu hình liên quan đến Module Federation được đặt trong các file **webpack.config.js** trong từng ứng dụng, với mỗi ứng dụng đóng gói các module của nó thành một file JavaScript độc lập có thể được tải từ xa thông qua cơ chế **Dynamic Import** của JavaScript.

> Tóm lại, repository này cung cấp một ví dụ về cách xây dựng một ứng dụng Web sử dụng Angular framework, chia thành nhiều phần (micro-frontends) và tích hợp với nhau thông qua kỹ thuật Module Federation của Webpack.
