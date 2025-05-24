# Ngừng Sử Dụng Services! Tầm Quan Trọng Của Việc Định Nghĩa Trách Nhiệm Đối Tượng Một Cách Chính Xác

Services là một phần không thể thiếu trong các ứng dụng Angular, nhưng liệu chúng có nên như vậy không? Tại sao chúng ta gọi một đối tượng là service, và hậu quả của việc làm như vậy là gì? `Trong bài viết này, tôi muốn khám phá chủ đề về việc đặt tên đối tượng, thảo luận về những rủi ro khi không định nghĩa trách nhiệm của chúng một cách chính xác, và cách tránh điều này.`

> Ngay sau khi tôi nảy ra ý tưởng cho bài viết này, một RFC liên quan đến hướng dẫn phong cách Angular đã được công bố. Trong số các đề xuất của nó là ngừng sử dụng hậu tố "service" trong tên lớp và tên tệp. Như tác giả giải thích: "Thuật ngữ 'service' (...) không thêm bất kỳ thông tin có ý nghĩa nào để giải thích một lớp làm gì."

Sau cuộc thảo luận sôi nổi, người ta quyết định để vấn đề này cho các nhà phát triển và không đưa các quy tắc liên quan đến hậu tố vào hướng dẫn phong cách. Tuy nhiên, tài liệu chính thức và các ví dụ sẽ không còn sử dụng các hậu tố như vậy nữa. [Link]()

Nhưng đừng vội vàng, hãy bắt đầu bằng việc xem xét các quy ước hiện tại về việc đặt tên đối tượng trong Angular.

## Các Loại Lớp và Đối Tượng Nào Tồn Tại Trong Một Ứng Dụng Angular Điển Hình?

Khi thiết kế một ứng dụng Angular, chúng ta dựa vào một số loại đối tượng cơ bản, như directives (bao gồm components), pipes, guards, resolvers và interceptors. Những đối tượng này có vai trò được định nghĩa rõ ràng hơn hoặc ít hơn. Nói một cách đơn giản: pipes biến đổi dữ liệu trong templates, guards đảm bảo một số đường dẫn routing chỉ có thể truy cập trong các điều kiện cụ thể, resolvers cung cấp dữ liệu cho views trước khi chúng được hiển thị, và interceptors sửa đổi các request đi và đến.

Components, mặt khác, là các khối xây dựng nền tảng của mọi ứng dụng, định nghĩa cả view và logic của nó. Vì định nghĩa của một component khá rộng, chúng ta thường phân loại components là "smart" hoặc "dumb" để làm rõ hơn về trách nhiệm của chúng.

### Còn Services Thì Sao?

> Việc định nghĩa vai trò của service không đơn giản như vậy. Services chủ yếu được liên kết với giao tiếp API, triển khai logic nghiệp vụ, hoặc quản lý trạng thái — về cơ bản, ủy thác các tác vụ từ components và chia sẻ dữ liệu và logic giữa chúng.

Trong thực tế, chúng ta thường gọi bất kỳ đối tượng hoặc lớp nào được bọc trong decorator `@Injectable` và mang hậu tố "Service" là một service. Decorator `@Injectable` làm cho lớp có sẵn để cung cấp và dependency injection. Vì vậy, bằng cách đặt tên một đối tượng là service, chúng ta chỉ đang nói rằng nó là một dependency.

Tuy nhiên, bạn có thể đã gặp các lớp có sẵn để cung cấp mà chúng ta không gọi là services — ví dụ, interceptors, guards, hoặc resolvers. Do đó, chúng ta gắn nhãn là services những dependencies mà chúng ta chưa đặt tên cụ thể.

Những sự thật này có thể dẫn chúng ta đến suy nghĩ rằng thuật ngữ "service" là một cách viết tắt tiện lợi mà các nhà phát triển Angular sử dụng để tránh định nghĩa rõ ràng trách nhiệm và tên của một đối tượng.

### Lưu ý: Cách Tiếp Cận Hàm

Đáng chú ý là các phiên bản Angular mới hơn giới thiệu cách tiếp cận hàm để định nghĩa guards và resolvers. Tuy nhiên, tôi vẫn tiếp tục gọi chúng là classes và objects trong ngữ cảnh này. Cách tiếp cận hàm không ảnh hưởng đến việc xem xét trách nhiệm đối tượng, vì vậy tôi sẽ giữ thuật ngữ hướng đối tượng.

### Ủy Thác Trách Nhiệm

Như đã đề cập trước đó, chúng ta ủy thác trách nhiệm từ components sang services. Việc ủy thác là rất quan trọng để cải thiện chất lượng mã. Tuy nhiên, điều quan trọng là phải xem xét cẩn thận người mà chúng ta ủy thác những trách nhiệm đó. Nếu không có mục đích rõ ràng cho đối tượng mà chúng ta đang ủy thác, mã có thể nhanh chóng trở nên khó quản lý. Do đó, chúng ta nên ủy thác các tác vụ cho các lớp và đối tượng có vai trò được định nghĩa chính xác. Một tên được chọn tốt giúp làm rõ vai trò của một đối tượng và cách các đối tượng khác nên tương tác với nó.

Hãy xem xét cách các nguyên tắc lập trình hướng đối tượng có thể giúp chúng ta chọn tên tốt hơn.

## Tìm Tên Phù Hợp Ở Đâu? Hãy Hướng Đến OOP!

Lập trình hướng đối tượng (OOP) không chỉ dừng lại ở việc định nghĩa `classes` và `objects` là gì hoặc `polymorphism` và `encapsulation` có nghĩa là gì. **Nó còn cung cấp các phương pháp hay nhất để làm việc với các khái niệm này (ví dụ: nguyên tắc SOLID) và các design patterns, cung cấp giải pháp cho các vấn đề phổ biến.**

Design patterns, đặc biệt, có thể giúp chúng ta định nghĩa tên và trách nhiệm của một đối tượng. Hãy xem xét kỹ hơn về chúng.

### Design Patterns Là Gì?

Đơn giản mà nói, chúng là các phương pháp giải quyết các vấn đề thường gặp trong các hệ thống phần mềm. Bởi "vấn đề", tôi không có nghĩa là lỗi mà là những thách thức mà phần mềm nhằm giải quyết. Ví dụ, trong phát triển frontend, việc trừu tượng hóa các thao tác lặp đi lặp lại như thêm headers vào requests là một vấn đề. Giải pháp là sử dụng một đối tượng có mục đích và triển khai cụ thể — một interceptor. Mỗi loại đối tượng được đề cập trước đó cũng có thể được mô tả như một design pattern.

Để sử dụng design patterns một cách có ý thức hơn, hãy để tôi tóm tắt ngắn gọn lịch sử và định nghĩa chính thức của chúng.

### Lịch Sử Design Patterns

Khái niệm design patterns trong khoa học máy tính được đề xuất bởi "Gang of Four" trong cuốn sách mang tính biểu tượng của họ Design Patterns: Elements of Reusable Object-Oriented Software. Các patterns này là giải pháp phổ quát cho các vấn đề thiết kế phổ biến và đã truyền cảm hứng cho các nhà phát triển trong nhiều thập kỷ để viết mã linh hoạt, dễ bảo trì.

### Định Nghĩa Một Pattern

Để mô tả một pattern một cách rõ ràng, chúng ta nên bao gồm:

- Một tên
- Mô tả về vấn đề mà nó giải quyết
- Giải pháp (những classes, objects, interfaces và dependencies nào liên quan, thường với tên chính xác)
- Hậu quả của việc áp dụng nó

Quay lại với Angular, làm thế nào chúng ta có thể áp dụng các patterns này một cách hiệu quả?

## Domain-Specific Patterns

Bên cạnh các design patterns chung, các framework như Angular giới thiệu các khái niệm riêng của chúng, như components, pipes, hoặc directives, để hướng dẫn phát triển ứng dụng. Bằng cách tuân thủ các patterns của Angular và các design patterns phổ biến, chúng ta đã đi được nửa đường đến thành công.

Nửa còn lại liên quan đến việc xác định các thách thức lặp đi lặp lại cụ thể cho ứng dụng của chúng ta và định nghĩa các patterns để giải quyết chúng. Mặc dù Angular là một framework có quan điểm rõ ràng, việc xây dựng một ứng dụng được suy nghĩ kỹ lưỡng vẫn sẽ liên quan đến việc giải quyết các vấn đề domain-specific một cách có hệ thống.

Hãy khám phá một số thách thức thực tế như vậy xứng đáng với cách tiếp cận có hệ thống.

### Ví Dụ Về Các Vấn Đề Yêu Cầu Cách Tiếp Cận Có Phương Pháp

#### Giao Tiếp API

Đây là một tác vụ điển hình mà chúng ta ủy thác cho services để trừu tượng hóa chi tiết triển khai request và cho phép chia sẻ. Bằng cách giới hạn trách nhiệm của một đối tượng chỉ trong việc này (loại trừ lưu trữ dữ liệu, xử lý lỗi, hoặc các tác dụng phụ khác), chúng ta tạo ra một đối tượng có trách nhiệm đơn lẻ, rõ ràng mà tôi thích gọi là API Facade. Ví dụ, một lớp phục vụ như một facade cho các tương tác API sản phẩm có thể được gọi là ProductsApiFacade

```bash
ProductsApiFacade
```

#### Quản Lý Trạng Thái

Tôi là người hâm mộ các thư viện quản lý trạng thái, đặc biệt là NgRx Signal Store gần đây. Trong tài liệu của nó, tệp định nghĩa nó không được gọi là "service" mà là "store". Tương tự, khi sử dụng các stores dựa trên Redux truyền thống, mỗi loại đối tượng có tên riêng — reducer, selector, action, hoặc effect — và các tệp được đặt tên tương ứng. Vậy tại sao, khi triển khai quản lý trạng thái tùy chỉnh (ví dụ: một service với Subject), chúng ta đôi khi vẫn gọi nó là "service" thay vì "store"?

Bất kể triển khai như thế nào, chúng ta nên đặt tên lớp (và tệp) với "store", ví dụ: ProductsStore. Sau đó, đảm bảo nghiêm ngặt rằng trách nhiệm của đối tượng store bị giới hạn trong việc là một store.

```bash
ProductsStore
```

#### Trích Xuất Logic Component: Presenter như một Anti-Pattern

Các components phình to khó bảo trì, vì vậy các nhà phát triển thường ủy thác một số logic của chúng cho các đối tượng hỗ trợ — dẫn một số người áp dụng mẫu presenter từ MVP. Một trong những nguồn phổ biến nhất cho cách tiếp cận này là loạt bài của Lars Nielsen về MVP trong Angular.

Tôi thấy hai vấn đề đáng kể với cách tiếp cận này:

1. Angular dựa trên component, không dựa trên MVP. Mặc dù presenter trong bài viết của Nielsen được định nghĩa là một đối tượng xử lý logic trình bày phức tạp, điều này không phù hợp với định nghĩa MVP ban đầu. Việc sử dụng sai một thuật ngữ phổ biến trong một ngữ cảnh mới có thể gây nhầm lẫn.
2. Thuật ngữ "presenter" không định nghĩa chính xác trách nhiệm của đối tượng, làm cho nó có thể so sánh với một service, mặc dù được liên kết chặt chẽ với component trình bày.

Thay vì ủy thác tất cả "logic phức tạp" cho một "presenter", hãy ủy thác các tác vụ cụ thể (ví dụ: xử lý form) cho các đối tượng được thiết kế cho những tác vụ đó.

## Làm Thế Nào Để Triển Khai Các Tiêu Chuẩn?

Một khi chúng ta xác định các vấn đề và đề xuất giải pháp, chúng ta cần đảm bảo toàn bộ nhóm áp dụng chúng.

- **Tài liệu**: Duy trì tài liệu pattern dự án là rất quan trọng. Mặc dù có thể tẻ nhạt, nó tổ chức các khái niệm, tạo điều kiện cho việc onboarding và hỗ trợ code reviews.
- **Giao tiếp**: Các cuộc họp nhóm thường xuyên để thảo luận về cách tiếp cận dự án, các điểm đau và đề xuất cải tiến là vô giá.
- **Nhất quán**: Đảm bảo tuân thủ các tiêu chuẩn thông qua code reviews. Nếu các thành viên nhóm gặp khó khăn, hãy xem lại các định nghĩa để đảm bảo rõ ràng và dễ tiếp cận.

## Kết Luận

Trong bài viết này, tôi đã lập luận cho việc thay thế services bằng các đối tượng có mục đích được định nghĩa rõ ràng và tên chính xác. Tôi đã nhấn mạnh rằng tên đối tượng mơ hồ có thể dẫn đến trách nhiệm được định nghĩa lỏng lẻo và đề xuất tận dụng các design patterns phổ biến và tạo các patterns cụ thể cho dự án để giải quyết các thách thức domain. Việc triển khai các patterns này một cách hiệu quả đòi hỏi tài liệu, giao tiếp và thực thi nhất quán các tiêu chuẩn đã thống nhất.

[Name of Service]<https://angular.love/stop-using-services-the-importance-of-defining-object-responsibilities-precisely>

[Presenter]<https://dev.to/this-is-angular/presenters-with-angular-2l7l>

[Audio Version](Name-in-Angular.wav)

