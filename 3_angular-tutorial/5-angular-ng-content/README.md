# Day 5: Content Projection

## Làm thế nào để sử dụng ng-content?

- Chúng ta có thể sử dụng ngay content được truyền vào (project) ở giữa cặp thẻ mở/đóng.
- Đó là một `perfect use-case cho` **ng-content** có thể được sử dụng. Bạn chỉ cần đặt **ng-content** vào bất kỳ đâu trong template của component là được.

## Sử dụng multiple ng-content được không?

Bạn có thể nghĩ rằng nếu mình đặt ng-content hai lần ở trên template thì sẽ thế nào? liệu nó có hiển thị gấp đôi số phần tử hay không?

## ng-content và selector

- Các dạng của selector có thể bao gồm:

* Tag selector: <ng-content select="some-component-selector-or-html-tag"></ng-content>
* CSS Class selector: <ng-content select=".some-class"></ng-content>
* Attribute selector: <ng-content select="[some-attr]"></ng-content>
* Combine nhiều selectors: <ng-content select="some-component-selector-or-html-tag[some-attr]"></ng-content>

Mặc định nếu không có select thì mặc định nó sẽ lấy tất cả nội dung bên trong 2 cặp tag

## ng-content và ngProjectAs

- Giả sử Toggle component mong muốn nhận vào một component có selector là app-label, và chúng ta sẽ cung cấp một component app-label với nhiều tính năng rất xịn xò.
- Thường sử dụng cho ng-container vì ng-container không được render ra, nên không thể select được. Trong trường hợp đó chúng ta sẽ sử dụng ngProjectAs để gán một tên khác thay thế để có thể select được
