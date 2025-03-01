# Better stack traces

Thông qua sự hợp tác với các nhà phát triển Google Chrome, Angular đã tinh chỉnh cách trình bày các dấu vết ngăn xếp, tạo ra các đầu ra hợp lý và nhiều thông tin hơn.

We partnered with Chrome DevTools to fix this! Let’s look at a sample stack trace that you may get working on an Angular app:

```json
ERROR Error: Uncaught (in promise): Error
Error
    at app.component.ts:18:11
    at Generator.next (<anonymous>)
    at asyncGeneratorStep (asyncToGenerator.js:3:1)
    at _next (asyncToGenerator.js:25:1)
    at _ZoneDelegate.invoke (zone.js:372:26)
    at Object.onInvoke (core.mjs:26378:33)
    at _ZoneDelegate.invoke (zone.js:371:52)
    at Zone.run (zone.js:134:43)
    at zone.js:1275:36
    at _ZoneDelegate.invokeTask (zone.js:406:31)
    at resolvePromise (zone.js:1211:31)
    at zone.js:1118:17
    at zone.js:1134:33
```

These two changes dramatically improve the stack traces developers see in Chrome DevTools:

```json
ERROR Error: Uncaught (in promise): Error
Error
    at app.component.ts:18:11
    at fetch (async)  
    at (anonymous) (app.component.ts:4)
    at request (app.component.ts:4)
    at (anonymous) (app.component.ts:17)
    at submit (app.component.ts:15)
    at AppComponent_click_3_listener (app.component.html:4)
```

> Bằng cách cung cấp dấu vết ngăn xếp sạch hơn và tập trung hơn, việc gỡ lỗi trở nên hiệu quả hơn và ít tốn thời gian hơn. Các nhà phát triển có thể nhanh chóng xác định nguồn lỗi hoặc ngoại lệ và hiểu rõ hơn về luồng ứng dụng của họ. Các tính năng của Angular 15 cải thiện đáng kể trải nghiệm gỡ lỗi cho các ứng dụng Angular bằng cách cung cấp ngữ cảnh rõ ràng hơn và giảm thiểu thông tin không liên quan.