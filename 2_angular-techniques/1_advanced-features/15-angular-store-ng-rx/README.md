# NgRx

## Giới Thiệu

NgRx là 1 framework được xây dựng để phát triển "Reactive Applications" trong 1 ứng dụng Angular.Về cơ bản NgRx cung cấp cho chúng ta các tác vụ như state management,isolation of side effects,entity collection management ...Với NgRx chúng ta có thể xây dựng 1 Angular app với khả năng duy trì và mở rộng rất cao.

## Ưu và Nhược Điểm

### Ưu điểm

single source of truth - tất cả các State của ứng dụng sẽ được lưu ở 1 "Object tree" duy nhất.Vì vậy việc chia sẻ State giữa các Component trở lên rất dễ dàng.
testability - hầu hết mọi thứ trong NgRx đều sử dụng Pure Function nên việc test cũng là rất dễ dàng .
scaleable với NgRx việc "scale" ứng dụng sẽ trở nên đơn giản hơn bởi vì cấu trúc trong Ngrx là rất rõ ràng.

### Nhược điểm

Thời gian phát triển lâu
Cần nắm vững kiển thức về RxJs - Observable

## Cách Hoạt Động

NgRx bao gồm 4 thành phần chính :

- **Store** - là model chứa dữ liệu

- **Action** - đại diện cho các sự kiện kích hoạt reducers để lưu hoặc thay đổi dữ liệu vào stores.

- **Reducer** - Reducer là pure function, được sử dụng để tạo new state khi thay đổi dữ liệu.

- **Selector** - Tìm và nạp các dữ liệu từ store vào các component

- **Effects** - Dùng để calls API. The effect gets executed based the action performed

!['NgRx'](./state-management-lifecycle.png)

Giả sử điểm bắt đầu là Components và kết thúc là Store và từ Component chúng ta muốn lấy ra State trong Store thì các bước hoạt động của nó sẽ như sau :

B1. Từ Component chúng ta tương tác với Reducer thông qua Action
B2. Từ Action, Reducer sẽ làm 1 công việc tương ứng với Action đó
B3. Từ Reducer, State sẽ được đẩy vào Store
B4. Từ Store, Component muốn lấy ra State thông qua Selector

> Tư tưởng chính của việc sử dụng NgRx sẽ là có 1 Store chứa dữ liệu và Store này là duy nhất.Tất cả Component,Service trong ứng dụng sẽ dùng chung dữ liệu đó !
