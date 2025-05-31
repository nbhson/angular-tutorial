# Angular CLI

## Angular CLI Là Gì?

Angular CLI là một công cụ được phát triển trên cửa sổ ứng dụng (command line interface) nhằm giúp đỡ việc tạo dự án, quản lí tập tin và nhiều tác vụ khác nhau như test, bundle và deploy dự án một cách nhanh chóng và hiệu quả (nó là một tool chạy các lệnh từ Terminal)

Angular CLI giúp dev tạo được một ứng dụng nhanh hơn, dễ dàng hơn qua những command đơn giản và quan trọng là giúp cho việc mantain/upgrade sau này

## Những lệnh trong Angular CLI?

- Tạo component: ng g component new-component	
- Tạo directive: ng g directive new-directive
- Tạo pipe: ng g pipe new-pipe
- Tạo service : ng g service new-service
- Tạo class : ng g class new-class
- Tạo guard : ng g guard new-guard
- Tạo interface: ng g interface new-interface
- Tạo enum : ng g enum new-enum 
- Tạo module: ng g module my-module

ng test	test 
ng build --configuration=production	thiết lập môi trường production
ng build --configuration=staging 	thiết lập môi trường staging
ng serve --port 3006 --open	khởi động dự án với cổng 3006
