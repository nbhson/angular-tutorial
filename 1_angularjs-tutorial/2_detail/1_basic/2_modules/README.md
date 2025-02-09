# Modules

> Mô-đun AngularJS xác định chức năng của ứng dụng được áp dụng trên toàn bộ trang HTML. Nó giúp liên kết nhiều thành phần. Vì vậy, nó chỉ là một nhóm các thành phần liên quan. Nó là một vùng chứa bao gồm các phần khác nhau như bộ controllers, services, directives.

## ng-controller directive

- ng-controller directive trong AngularJS được sử dụng để thêm controller vào ứng dụng. 
- Nó có thể được sử dụng để thêm các phương thức, hàm và biến có thể được gọi trong một số sự kiện như nhấp chuột, v.v. để thực hiện một số hành động nhất định.

## Module and controllers in file

- Mặc dù chúng ta có thể tạo module và controllers trong cùng một tệp cùng với tệp HTML yêu cầu nó, tuy nhiên chúng tôi có thể muốn sử dụng module này trong một số tệp khác. 
> Do đó, điều này sẽ dẫn đến dư thừa, vì vậy chúng tôi sẽ thích tạo module, controller và tệp HTML riêng biệt. 
- Module và controller phải được lưu trữ bằng cách sử dụng tệp .js và để sử dụng chúng trong tệp HHTML

## Directives in a module

- Được sử dụng như component child, có thể truyền dữ liệu từ parent to child.