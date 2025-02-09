# Scope

> Scope trong AngularJS là phần ràng buộc của HTML view và JavaScript controller. Khi bạn thêm thuộc tính vào đối tượng scope trong JavaScript controller, chỉ khi đó HTML view mới có quyền truy cập vào các thuộc tính đó. Có hai loại scope trong AngularJS.

## $scope

- HTML view
- Dữ liệu có sẵn cho view hiện tại được gọi là `model`
- Hàm JavaScript thực hiện / thay đổi / xóa / kiểm soát dữ liệu được gọi là `controller`.

## $rootScope

Nếu các biến của bạn có cùng tên trong cả phạm vi root và hiện tại thì bộ điều khiển hoặc ứng dụng sẽ sử dụng phạm vi hiện tại (ưu tiên $rootScope).