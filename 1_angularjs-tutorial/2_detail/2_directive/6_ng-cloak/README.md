# Directive

## ng-cloak 

-Nhiều lần, các ứng dụng AngularJS sẽ hiển thị sự nhấp nháy của tài liệu HTML khi ứng dụng chính được khởi động.
> Điều này sẽ hiển thị mã AngularJS trong một khoảng thời gian.
- Việc sử dụng chỉ thị ng-cloak là để giữ cho các phần tử trong AngularJS không được trình duyệt web trình bày ngay trong trạng thái chưa hoàn thành, chưa hoàn chỉnh, chưa được biên dịch & ở dạng thô, trong khi chương trình cơ bản vẫn đang được tải.
- Điều này về cơ bản là để ngăn chặn tác động nhấp nháy không mong muốn được hiển thị nhiều lần ngay từ đầu khi chương trình được tải. Phần dữ liệu chưa hoàn thành sau đó chỉ cần giữ và chờ dữ liệu đến.