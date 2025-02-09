# Day 6: Introduction to Dependency Injection in Angular

## Dependency Injection
Dependency Injection (DI) là một pattern rất quan trọng trong lập trình

Hiện nay có rất nhiều Frontend Framework có support DI, Angular sử dụng rất nhiều và nó có riêng một DI framework được thiết kế để đáp ứng được yêu cầu về mặt như kiến trúc hệ thống của Angular.

## DI là gì?

Giả sử chúng ta đang làm ứng dụng giỏ hàng của một trang thương mại điện tử, thông thường chúng ta có thể tách những phần xử lý business ra thành một class để giảm responsibility của component, cũng như tăng tính reuseable của phần business logic đó.

Lúc này chúng ta có thể có các thành phần như sau:

```ts
class ProductModel {
  sku: string;
  name: string;
  price: number;
}

interface CartItem {
  product: ProductModel;
  quantity: number;
}

class CartService {
  selectedProducts: CartItem[] = [];
  calculateTotal(): number {
    return this.selectedProducts.reduce(
      (total, item) => item.product.price * item.quantity + total,
      0
    );
  }
  addToCart(): void {
    // logic here
  }
}

class ProductComponent {
  cartService: CartService;
}
```

Các bạn có thể thấy rằng, class `ProductComponent` của chúng ta bị phụ thuộc vào (depend on) class `CartService`. Khi `ProductComponent` cần call các method của `CartService` chúng ta cần khởi tạo hoặc yêu cầu để lấy về một instance của service đó.

### Khởi tạo bên trong `ProductComponent`

Để khởi tạo instance của một class bên trong một class khác, chúng ta có thể chỉ cần `new` là được.

```ts
class ProductComponent {
  cartService: CartService;
  constructor() {
    this.cartService = new CartService();
  }
}

// tương đương với

class ProductComponent {
  cartService: CartService = new CartService();
}
```

Nếu trong trường hợp như trên, rõ ràng chúng ta bị ràng buộc chặt chẽ giữa hai class (Tight Coupling), nếu bạn muốn thay đổi implementation khác của `CartService` thì bắt buộc phải sửa code của `ProductComponent`, và sẽ kéo theo phải test lại cả hai class.

### Injection (Request để lấy về instance)

Nếu bằng một cách nào đó, chúng ta gửi một request rồi từ một container nào đó sẽ cung cấp instance cho chúng ta thì sao.

```ts
class ProductComponent {
  cartService: CartService;
  constructor(cartService: CartService) {
    this.cartService = cartService;
  }
}

// tương đương cú pháp sau trong TypeScript
class ProductComponent {
  constructor(public cartService: CartService) {}
}
```

Và chúng ta sẽ có một container có thể biết cách khởi tạo và provide cho các request của các class như sau:

```ts
(function container() {
  const service = new CartService(); // và các dependencies của CartService nếu có
  const productComp = new ProductComponent(service);
  // other code logic
})();
```

Lúc này bạn có thể thấy class `ProductComponent` không hề biết gì về các khởi tạo CartService như thế nào. Nó gửi request cho Inversion of Control (đảo ngược sự điều khiển hay đảo ngược sự phụ thuộc, viết tắt là IoC) container, từ đó nó có thể lấy được instance mà nó mong muốn.

Trong trường hợp bạn muốn đổi implementation cũng rất dễ dàng và hoàn toàn không cần viết lại class `ProductComponent`.

Các bạn có thể đoán được mẫu thiết kế trên chính là Dependency Injection, chi tiết hơn đó là constructor injection.
