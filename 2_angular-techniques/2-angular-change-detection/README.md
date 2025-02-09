# Change detection

> Change detection là một cơ chế theo dõi sự thay đổi, cho phép nội dung ở phần giao diện luôn được đồng bộ với sự thay đổi trong model tương ứng

- Sự thay đổi này có thể được phát sinh bởi những trường hợp sau:
  - DOM events (click, hover, …)
  - AJAX requests
  - Timers (setTimers(), setInterval())

- Mặc định `Default` Angular sẽ `change detection` cho tất cả các component (có thể sẽ làm cho ứng dụng trở nên chậm chạp). Nên chúng ta sử dụng OnPush() làm cho component chỉ render khi chúng ta cần (điều này làm cho ứng dụng trở nên mượt hơn). Cụ thể khi @Input thay đổi hoặc xảy ra DOM events thì change detection trong Angular mới hoạt động

> Điều đó có nghĩa là chúng ta phải manual notify cho Angular biết là sẽ có sự thay đổi => chạy change detect thử đi

## markForCheck

Hàm markForCheck cho phép kiểm tra trên tất cả components cha lên tới root component.

## detectChanges

Hàm này thực hiện theo dõi thay đổi một lần trên component hiện tại và tất cả thành phần con của nó, bất kể trạng thái của component là gì.
