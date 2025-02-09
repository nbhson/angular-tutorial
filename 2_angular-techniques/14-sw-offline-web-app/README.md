# Service worker

Service worker là một công nghệ của trình duyệt web cho phép xử lý các yêu cầu từ trang web mà không cần phải thông qua máy chủ. Nó hoạt động như một proxy server nằm giữa trình duyệt và máy chủ, giúp tăng tốc độ tải trang web và cải thiện trải nghiệm người dùng.

## Các ứng dụng của Service worker

- Progressive Web Apps (PWA), nó cho phép trang web có thể hoạt động như một ứng dụng di động trên các thiết bị di động.

- Offline Web Apps: Service worker giúp cho ứng dụng web có khả năng hoạt động ngoại tuyến một cách hiệu quả, khi người dùng không có kết nối Internet.

- Background Sync: Service worker cho phép ứng dụng web thực hiện các tác vụ nền mà không cần đến sự tương tác của người dùng. Ví dụ như tự động cập nhật dữ liệu hay thông báo mới từ máy chủ.

- Push Notifications: Service worker cung cấp khả năng thông báo đẩy cho ứng dụng web, giúp người dùng không bỏ lỡ các cập nhật, thông báo quan trọng từ máy chủ.

- Caching: Service worker cho phép ứng dụng web lưu trữ các tài nguyên như hình ảnh, font chữ, và các trang web khác vào bộ nhớ cache của trình duyệt, giúp tăng tốc độ tải trang web.

- Background Fetch: Service worker cho phép ứng dụng web tải dữ liệu nền mà không cần mở trình duyệt, giúp tiết kiệm băng thông và tăng tính tiện lợi cho người dùng.

## Guide

### Setup

ng add @angular/pwa

ng add @angular/service-worker

npm install http-server -g

ng add angular-cli-ghpages

ng deploy --repo=https://github.com/nbhson/test-ngsw.git

http-server -p 8080 -c-1 dist/14-sw-offline-web-app
or
cd dist/14-sw-office-web-app
live server

### Guide

<https://angular.io/guide/service-worker-getting-started>

<https://blog.angular-university.io/angular-service-worker/>
