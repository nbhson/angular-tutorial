# Service


# Đặt vấn đề

**Tại sao cần sử dụng các services?**

- Trong Angularjs để tối ưu hiệu năng cũng như bộ nhớ, Controller chỉ được khởi tạo khi cần và bị hủy đi khi không cần, nói cách khác mỗi lần thay đổi router hoặc reload thì controller mới được gọi.
- Chúng ta cần một method để lưu trữ dữ liệu trong suốt vòng đời của application và giao tiếp thông qua controller một cách nhất quán.

# Nội dung

## Service là gì?
- Service là một singleton object được khởi tạo 1 lần duy nhất cho mỗi ứng dụng(app).
- Service cung cấp các phương thức lưu trữ dữ liệu xuyên suốt vòng đời của ứng dụng và cung cấp phương thức truy xuất dữ liệu thông qua controller một cách nhất quán.

## Built-in service

AngularJs cung cấp khoảng 30 built-in services. Mỗi service lại đáp ứng một nhiệm vụ nhất định.

### $http service
> $http là một service phổ biến trong AngularJs dùng để tạo các ajax request lên server.

```js
var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope, $http) {
    $http.get("welcome.htm")
    .then(function(response) {
        $scope.myWelcome = response.data;
    }, function(error){
      console.log(error);
    };
});
```

### $location
> $location một service mà AngularJs cung cấp dùng để parse url trên address bar hoặc tạo một url mới cho application.

```js
var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope, $location) {
    // dùng $location để lấy thông tin của url
    var absUrl = $location.absUrl(); //=>"http://example.com/#/some/path?foo=bar&baz=xoxo"
    var url = $location.url() //=> '/some/path?foo=bar&baz=xoxo'
    var path = $location.path() //=> 'some/path'
    var search = $location.search() => '{foo: 'bar', baz: 'xoxo'}'
});
```
### $filter
- Filters là các thành phần phổ biến được sử dụng trên các view để format hoặc lọc dữ liệu trước khi display với các function như: currency, filter, orderBy, date, limitTo, …
- Nhưng đôi khi chúng ta cũng muốn sử dụng các filter này trong angular controller. Để thực hiện điều này chúng ta cần inject $filter service vào trong controller

```js
var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope, $filter) {
    var students = [
      {id: 1, name: 'bob', age: 20, gender: 'male'},
      {id: 2, name: 'Alice', age: 25, gender: 'female'},
      {id: 3, name: 'Emma', age: 18, gender: 'female'},
    $scope.studentsFilterdByGender = $filter.filter(students, {gender: 'female'});
    ];
});
```

## Cách tạo một service
- Sử dụng `service()` method
- Sử dụng `factory ()` method
- Sử dụng `provider()` method

## Sự khác nhau giữa service() method và factory() method: 

