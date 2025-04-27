# Updates to the effect() function

Trong phiên bản mới nhất của Angular, phiên bản 19, hàm `effect` đã nhận được các bản cập nhật then chốt dựa trên phản hồi của cộng đồng.

Một thay đổi đáng kể là việc loại bỏ `allowSignalWrites` flag. Ban đầu, lá cờ này được dự định giới hạn khi các signal có thể được đặt trong effect(), đẩy các nhà phát triển sang sử dụng tcomputed() cho một số kịch bản nhất định. 

Tuy nhiên, rõ ràng rằng hạn chế này thường là một sự cản trở hơn là một sự giúp đỡ, ngăn chặn việc sử dụng hiệu quả  effect() nơi nó có ý nghĩa. Đáp lại, Angular 19 sẽ cho phép các signal được đặt theo mặc định trong Effect(), loại bỏ độ phức tạp không cần thiết và tập trung vào các cách tốt hơn để hỗ trợ thực hành mã hóa tốt (xem LinkedSignal, API tài nguyên).

```ts
effect(
   () => {
       console.log(this.users());
   },
   //This flag is removed in the new version
   { allowSignalWrites: true }
);
```

Ngoài ra, có một sự thay đổi lớn về thời gian khi các hiệu ứng được thực hiện. Di chuyển ra khỏi cách tiếp cận trước đó để xếp hàng chúng dưới dạng microtasks, các hiệu ứng giờ đây sẽ được thực hiện như một phần của chu kỳ phát hiện thay đổi trong hệ thống phân cấp thành phần. Điều chỉnh này nhằm mục đích khắc phục các vấn đề với các hiệu ứng chạy quá sớm hoặc quá muộn và đảm bảo thứ tự thực hiện hợp lý hơn được liên kết với cây thành phần.

Những cải tiến này được thiết kế để tăng cường cả chức năng và khả năng sử dụng của hàm hiệu ứng (), làm cho nó phù hợp hơn với nhu cầu của các nhà phát triển. Mặc dù Effect () sẽ tiếp tục trong giai đoạn xem trước nhà phát triển trong phiên bản 19, điều này cho phép các tinh chỉnh hơn nữa dựa trên trải nghiệm của nhà phát triển với các tính năng mới này.

https://angular.love/angular-19-whats-new#Updates%20to%20the%20effect()%20function

https://blog.angular.dev/meet-angular-v19-7b29dfd05b84

https://medium.com/@rajat29gupta/highlight-key-new-features-in-angular-19-de77981756c7