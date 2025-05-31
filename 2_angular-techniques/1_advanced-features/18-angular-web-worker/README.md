# Angular Web Worker

## Single-threaded của JS và hạn chế của nó

JS là một ngôn ngữ single-threaded. Trên web browser, mỗi cửa sổ hoặc mỗi tab chỉ có 1 luồng xử lý duy nhất. Trở ngại của single-thread trên browser đó là khi code đang được thực thi, bạn sẽ ko thể làm gì khác, UI của bạn sẽ bị khoá cứng.


Có những giải pháp quen thuộc để giải quyết vấn đề này đó Event Loop, asynchronous event. cụ thể, các bạn thực hiện một GET request lên server, các bạn bind một callback function xử lý dữ liệu cho event khi có response trả về, nói nôm na theo ngôn ngữ của con người là "ê, khi nào dữ liệu về thì xử lý như thế này nhé".

Chúng ta rung đùi làm việc khác, kệ cho response về lúc nào thì về. Nếu dữ liệu nhỏ, callback function của bạn được xử lý cái roẹt. Tuy nhiên nếu dữ liệu lớn, lúc này nhược điểm sẽ lộ ra, UI của bạn sẽ đơ cứng, đơ cho đến khi callback function của bạn chạy xong. Vấn đề do đâu, do callback function vẫn phải chạy trên luồng duy nhất của phiên làm việc.

## Web Worker là gì?

Phiên bản HTML5 cung cấp cho chúng ta một loạt APIs rất hữu ích và một trong số chúng giúp giải quyết vấn đề nêu trên, đó là Web Worker. Web Worker cho phép xử lý script ở một luồng dưới background tách biệt với luồng chính (chủ yếu là UI), giúp UI ko bị chậm lại hoặc khoá cứng khi phải xử lý dữ liệu nặng.

> Xin nhấn mạnh lại là JS vẫn đơn luồng mà thôi, còn Web Workers là một APIs được cung cấp bới trình duyệt giúp giải quyết nhược điểm đơn luồng của JS.

## Các loại Worker.

Chúng ta có 3 loại Worker chính:

- `Dedicated Worker`: Worker chỉ dùng được trong nội bộ main thread. Dedicated worker hiện đã được hỗ trỡ trên ~95% các trình duyệt.
- `Shared Worker`: Worker có thể được truy cập bởi nhiều process khác nhau như tab khác nhau, iframe khác nhau, miễn sao chúng cùng một origin domain. Nó cũng phức tạp hơn Dedicated Worker, chúng ta cần định nghĩa cổng cho các lần giao tiếp. Shared worker mới được hỗ trợ ở mức khá hạn chế, mới chỉ khoảng 43% các trình duyệt
- `Service Worker`: Hoạt động như một proxy server nằm giữa web app, trình duyệt, và network. Mục đích chính của service worker là tạo ra trải nghiệm sử dụng web app xuyên suốt ngay cả khi ko có internet (giống native app), service worker đánh chặn network, dựa vào tình trạng kết nối internet để quyết định việc sử dụng cached asset hay fetch dữ liệu tươi từ phía server giúp trải nghiệm người dùng ko bị gián đoạn. Service worker cũng cho phép thực hiện push notification và thực hiện đồng bộ APIs ngầm giúp người dùng ko thể nhận ra giai đoạn update app lên phiên bản mới. Service worker hiện được hỗ trợ ở mức ~75% các trình duyệt, chủ yếu được sử dụng nhiều nhất trên chrome và firefox.

## Làm được gì và không làm được gì bên trong Web Worker
Trong worker thread chúng ta có thể dùng được:

- navigator object
- location object (read-only)
- XMLHttpRequest
- setTimeout()/clearTimeout() and setInterval()/clearInterval()
- Application Cache
- import script bên ngoài importScripts()
- Tạo một web worker khác

Hạn chế là chúng ta sẽ không thể truy cập đến:
- DOM
- window object
- document object
- parent object

## Web Worker được ứng dụng trong những trường hợp nào

Tổng quan thì chúng ta nên sử dụng Web Worker cho các tác vụ tốn cpu. Cụ thể hơn:

- `Thực thi thuật toán mã hoá`. Đây là một tác vụ tốn cpu, và chỉ cần nhiều đến thao tác tính toán, ko cần đến các APIs khác như DOM manipulation, rất phù hợp để dùng trong worker.
- `Prefetching data`. Bạn có thể tính toán việc tải trước một lượng dữ liệu nhất định bằng worker và lưu lại cho các tác vụ trong tương lai.
- `Progressive Web App (PWA)`: Tạo ra trải nghiệm ko gián đoạn cho web app giống như native app
Các thao tác xử lý text thời gian thực như code highlight, spell checking

## Guide

Link: <https://angular.io/guide/web-worker>

> Code nội dung của project này là Dedicated Worker

Một Dedicated Worker là một loại Worker đặc biệt, nó chỉ hoạt động trong phạm vi của một trang web cụ thể và không thể được chia sẻ giữa các trang web khác nhau. Nó cũng không thể truy cập các tài nguyên của trang web như DOM hay các đối tượng của trang web.

Sử dụng Dedicated Worker có thể cải thiện hiệu suất của trang web bằng cách cho phép các tác vụ nặng được thực hiện song song với các tác vụ khác trên trang web, đồng thời giảm thiểu sự chậm trễ và tăng tốc độ tải trang web.

- Khi trình duyệt cần phải thực hiện các tác vụ nặng như xử lý dữ liệu hay tính toán phức tạp, nó thường phải đợi cho tất cả các tác vụ hoàn thành trước khi thực hiện các tác vụ khác. Điều này có thể làm giảm hiệu suất của trang web và làm cho trang web chậm hơn.
- Tuy nhiên, với Dedicated Worker, các tác vụ nặng có thể được thực hiện trong một tiến trình riêng biệt và độc lập với các tác vụ khác trên trang web. Do đó, các tác vụ khác trên trang web có thể tiếp tục được thực hiện mà không cần phải đợi các tác vụ nặng hoàn thành. Điều này giúp cải thiện hiệu suất của trang web và tăng tốc độ tải trang web.