# Applying a MVVM-like pattern in Angular

Trong bài viết này, tôi sẽ cố gắng đề cập đến một cách tiếp cận thành công mà tôi đã làm, trong một ứng dụng Angular quy mô lớn, áp dụng một mẫu giống MVVM. 
Chúng ta sẽ đi qua nó trong 2 phần:
- Trong phần đầu tiên, chúng tôi sẽ xem xét thiết lập cơ bản
- Trong phần thứ hai, chúng tôi sẽ áp dụng nó trong các tình huống nâng cao hơn.

## What are our goals?
- Tạo được sự tách biệt hoàn toàn giữa component và business logic bằng cách áp dụng MVVM
- Làm cho lớp nghiệp vụ (business layer) 
  + Có thể dễ dàng mở rộng
  + Có thể hoán đổi cho nhau một cách dễ dàng
  + Có thể dễ dàng kiểm thử
- Giữ riêng nội dung giao diện người dùng trong component
- Làm cho pattern (mẫu) này có thể áp dụng cho bất kỳ component nào

> https://github.com/Zet89/hero-mvvm