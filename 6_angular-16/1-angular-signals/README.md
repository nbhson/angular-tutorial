# Signals

Signal có API dễ hiểu để báo cáo thay đổi dữ liệu cho khung, cho phép khung để tối ưu hóa việc phát hiện và kết xuất lại thay đổi theo cách mà cho đến nay vẫn không thể.

> With Signals, Angular will be able to determine exactly what parts of the page need to be updated and update only those and nothing more.

Điều này trái ngược với những gì hiện đang xảy ra với việc phát hiện thay đổi mặc định, trong đó Angular phải kiểm tra tất cả các thành phần trên trang, ngay cả khi dữ liệu mà chúng tiêu thụ không thay đổi.

Bởi vì chúng tôi không có gì đảm bảo về những gì có thể hoặc không thể thay đổi, chúng tôi cần quét toàn bộ cây thành phần và tất cả các biểu thức trên mọi thành phần

> With default change detection, there is no way for Angular to know exactly what has changed on the page, so that is why we cannot make any assumptions about what happened, and we need to check everything!

Signals are all about increasing the runtime performance of your application, by getting rid of Zone.js.

Even without the runtime performance benefits, signals are just a great way to build applications in reactive style in general.

**Signals are a game changer, and they take reactivity in Angular to a whole new level!**

## What are Signals?

Nói một cách đơn giản, `Signal` hiệu là một nguyên thủy phản ứng đại diện cho một giá trị và cho phép chúng ta thay đổi cùng giá trị đó theo cách được kiểm soát và theo dõi các thay đổi của nó theo thời gian.

Without Signal - Default Change detection

```ts
@Component(
  selector: "app",
  template: `
  <h1>Current value of the counter {{counter}}</h1>
  <button (click)="increment()">Increment</button>
`)
export class AppComponent {
  counter: number = 0;
  increment() {  
    this.counter++;
  }
}
```

Signal

```ts
@Component(
    selector: "app",
    template: `
  <h1>Current value of the counter {{counter()}}</h1>
  <button (click)="increment()">Increment</button>
`)
export class AppComponent {

  counter = signal(0);
  constructor() {
    console.log(`counter value: ${this.counter()}`)
  }

  increment() {
    console.log(`Updating counter...`)
    this.counter.set(this.counter() + 1);
  }
}
```

## How to read the value of a signal?

The signal wraps the value that it represents, but we can get that value at any time just by calling the signal as a function, without passing it any arguments.

```ts
 constructor() {
    console.log(`counter value: ${this.counter()}`)
  }
```

## How to modify the value of a signal?

There are a couple of different ways to change the value of a signal.

1. We are using the set() API in our implementation of the counter increment function:

```ts
increment() {
  this.counter.set(this.counter() + 1);
}
```

Chúng ta có thể sử dụng API SET () để đặt bất kỳ giá trị nào chúng ta cần trong Signal, miễn là giá trị có cùng loại với giá trị ban đầu của Signal.

2. Besides the set() API, we also have available the update() API.
   
```ts
increment() {
  this.counter.update(counter => counter + 1);
}
```

## What is the main advantage of using signals instead of primitive values?

- Ưu điểm chính là chúng ta có thể được thông báo khi giá trị Signal thay đổi, và sau đó làm điều gì đó để đáp ứng với giá trị Signal mới.
- Với một giá trị đơn giản, không có cách nào để chúng tôi được thông báo khi một giá trị thay đổi. Nhưng với Signal? Dễ!

## The computed() Signal API

Signal có thể được tạo và bắt nguồn từ các Signal khác. `Khi một Signal cập nhật, tất cả các Signal phụ thuộc của nó sau đó sẽ được cập nhật tự động.`

```ts
@Component(
    selector: "app",
    template: `
  <h3>Counter value {{counter()}}</h3>
  <h3>10x counter: {{derivedCounter()}}</h3>
  <button (click)="increment()">Increment</button>
    `)
export class AppComponent {
    counter = signal(0);
    derivedCounter = computed(() => {
      console.log('trigger computed');
      return this.counter() * 10;
    })

    increment() {
      console.log(`Updating counter...`)
      this.counter.set(this.counter() + 1);
    }
}
```

- API được tính toán hoạt động bằng cách lấy một hoặc nhiều Signal nguồn và tạo Signal mới.
- Khi Signal nguồn thay đổi (trong trường hợp của chúng tôi, Signal bộ đếm), Signal được tính toán cũng được cập nhật ngay lập tức.

## How do we subscribe to a signal?

Lưu ý rằng `derivedCounter` không đăng ký theo bất kỳ cách rõ ràng nào đến Signal bộ đếm nguồn

Điều duy nhất mà nó đã làm là gọi source signal bằng counter() bên trong hàm được tính toán của nó.

Nhưng đó là tất cả những gì chúng tôi cần làm để liên kết hai Signal với nhau!

> Bây giờ bất cứ khi nào source signal truy cập có giá trị mới, Signal dẫn xuất (derived signal) cũng được cập nhật tự động.

It all sounds kind of magical, so let's break down what is going on:

- Whenever we are creating a computed signal, the function passed to computed() is going to get called at least once, to determine the initial value of the derived signal
- Angular đang theo dõi khi hàm tính toán đang được gọi và lưu ý khi các Signal khác mà nó biết đang được sử dụng
- Angular will notice that when the value of derivedCounter is being calculated, the signal getter function counter() is called.

> Vì vậy, Angular bây giờ biết rằng có một sự phụ thuộc giữa hai Signal, vì vậy bất cứ khi nào Signal bộ đếm được đặt với một giá trị mới, dẫn xuất dẫn xuất cũng sẽ được cập nhật
> Angular knows the whole signal dependency tree and knows how changing the value of one signal will affect all the other signals of the application.

## Can we read the value of a signal from a computed signal without creating a dependency?

Có thể có một số kịch bản nâng cao nhất định trong đó chúng tôi muốn đọc giá trị của Signal từ một Signal được tính toán khác, nhưng không tạo ra bất kỳ sự phụ thuộc nào giữa cả hai Signal.

Điều này hiếm khi cần thiết, nhưng nếu bạn gặp phải một tình huống mà bạn cần phải làm điều này, đây là cách bạn làm điều đó:

```ts
@Component(
    selector: "app",
    template: `
  <h3>Counter value {{counter()}}</h3>
  <h3>10x counter: {{derivedCounter()}}</h3>
    `)
export class AppComponent {
    counter = signal(0);
    derivedCounter = computed(() => {
      return untracked(this.counter) * 10;
    })
}
```

By using the `untracked` API, we can access the value of the counter signal without creating a dependency between the counter and the derivedCounter signal.

## Cạm bẫy chính cần chú ý khi tạo ra các Signal được tính toán là gì?

Hãy nhớ rằng, Angular sẽ chỉ xem xét rằng một Signal phụ thuộc vào một Signal khác nếu cần thông báo rằng Signal là cần thiết để tính giá trị của Signal khác.

Điều này có nghĩa là chúng ta cần cẩn thận với việc giới thiệu logic có điều kiện bên trong hàm được tính toán.

Here is an example of how things could easily go wrong:

```ts
@Component(
    selector: "app",
    template: `
<h3>Counter value {{counter()}}</h3>
<h3>Derived counter: {{derivedCounter()}}</h3>
<button (click)="increment()">Increment</button>
<button (click)="multiplier = 10">
    Set multiplier to 10
  </button>

`)
export class AppComponent {
  counter = signal(0);
  multiplier: number = 0;
  derivedCounter = computed(() => {    
    if (this.multiplier < 10) {        
      return 0
    }    
    else {        
      return this.counter() * this.multiplier;    
    }
  })

  increment() {
    console.log(`Updating counter...`)
    this.counter.set(this.counter() + 1);
  }
}

```

Nếu Signal dẫn xuất phụ thuộc vào Signal nguồn, chúng ta cần đảm bảo rằng chúng ta gọi Signal nguồn mỗi khi hàm tính toán được gọi. Nếu không, sự phụ thuộc giữa hai Signal sẽ bị phá vỡ.

For example, the following code would work correctly:

```ts
@Component(
    selector: "app",
    template: `

  <h3>Counter value {{counter()}}</h3>

  <h3>Derived counter: {{derivedCounter()}}</h3>

  <button (click)="increment()">Increment</button>

  <button (click)="multiplier = 10">
    Set multiplier to 10
  </button>

`)
export class AppComponent {
  counter = signal(0);
  multiplier: number = 0;

  derivedCounter = computed(() => {
      if (this.counter() == 0) {
        return 0
      }
      else {
        return this.counter() * this.multiplier;
      }
  })

  increment() {
    console.log(`Updating counter...`)
    this.counter.set(this.counter() + 1);
  }
}
```

Angular bây giờ có thể xác định sự phụ thuộc giữa hai Signal và mã hoạt động như mong đợi.

## Các phụ thuộc Signal có được xác định chỉ dựa trên cuộc gọi ban đầu đến hàm được tính toán không?

Không, thay vào đó, các phụ thuộc của Signal dẫn xuất được xác định động dựa trên giá trị được tính toán cuối cùng của nó.

So with every new call of the computed function, the source signals of the computed signal are identified again.

Điều này có nghĩa là các phụ thuộc của Signal là động, chúng không được cố định trong suốt vòng đời của Signal.

> Một lần nữa, điều này có nghĩa là chúng ta cần cẩn thận với bất kỳ logic có điều kiện nào mà chúng ta tạo ra khi xác định Signal dẫn xuất.

## Signals with array and object values

But what would happen if we define a signal whose value is an array or an object?

For example, let's take the case of a signal whose value is an array, and another signal whose value is an object:

```ts
@Component(
    selector: "app",
    template: `
  <h3>List value: {{list()}}</h3>
  <h3>Object title: {{object().title}}</h3>
`)
export class AppComponent {
    list = signal([
      "Hello",
      "World"
    ]);
    object = signal({
      id: 1,
      title: "Angular For Beginners"
    });

    constructor() {
      this.list().push("Again");
      this.object().title = "overwriting title";
    }
}
```

There is nothing special about these signals, in the sense that we can access their values as usual just by calling the signal as a function.

Nhưng điều quan trọng cần chú ý là không giống như một giá trị nguyên thủy, không có gì ngăn chúng ta đột biến nội dung của mảng trực tiếp bằng cách gọi đẩy nó hoặc đột biến một thuộc tính đối tượng.

So in this example, the output generated to the screen would be:

- "Hello", "World", "Again" in the case of the list
- "overwriting title" in the case of the object title

**This is of course not how Signals are meant to be used!**

Thay vào đó, chúng tôi muốn cập nhật giá trị của Signal bằng cách luôn luôn sử dụng API `set()` và `update()`

> Chúng ta nên tránh trực tiếp các giá trị Signal đột biến và thay vào đó luôn sử dụng API Signal.

```ts
export class AppComponent {
 
  list = signal([
    "Hello",
    "World"
  ]);
  object = signal({
    id: 1,
    title: "Angular For Beginners"
  });

  ngOnInit(): void {
    this.list.mutate((v) => v.push('12'));
    // update cần phải đủ đúng các key/value ban đầu
    this.object.update((v) => {
      return {
        id: 2,
        title: 'Angular signal'
      }
    })

    // mute có thể update 1 phần của object thay vì update
    this.object.mutate((v) => v.id = 3);
  }
}
```

## Overriding the signal equality check

Một điều đáng nói khác về Signal mảng hoặc đối tượng là kiểm tra bình đẳng mặc định là "===".

Kiểm tra bình đẳng này rất quan trọng vì Signal sẽ chỉ phát ra một giá trị mới nếu giá trị mới mà chúng ta đang cố gắng phát ra là khác nhau thì giá trị trước đó.

> Nếu giá trị mà chúng ta đang cố gắng phát ra được coi là giống như giá trị trước đó, thì Angular sẽ không phát ra giá trị Signal mới.

Đây là một tối ưu hóa hiệu suất có khả năng ngăn chặn việc hiển thị lại không cần thiết của trang, trong trường hợp chúng tôi đang phát ra một cách có hệ thống cùng một giá trị.

Để hiểu điều này, hãy bắt đầu với một ví dụ đơn giản trong đó chúng ta vẫn đang sử dụng kiểm tra bình đẳng mặc định cho một đối tượng Signal.

```ts
@Component(
    selector: "app",
    template: `

  <h3>Object title: {{title()}}</h3>

  <button (click)="updateObject()">Update</button>

`)
export class AppComponent {

    object = signal({
      id: 1,
      title: "Angular For Beginners"
    });

    title = computed(() => {
      console.log(`Calling computed() function...`)
      const course = this.object();
      return course.title;
    })

    updateObject() {
      // We are setting the signal with the exact same 
      // object to see if the derived title signal will 
      // be recalculated or not
      this.object.set({
        id: 1,
        title: "Angular For Beginners"
      });
    }
}
```

In this example, if we click on the Update button multiple times, we are going to get multiple logging lines in the console:

Calling computed() function...
Calling computed() function...
Calling computed() function...
Calling computed() function...
etc.

This is because the default "===" cannot detect that we are passing to the object signal a value that is functionally equivalent to the current value.

Do đó, Signal sẽ xem xét rằng hai giá trị là khác nhau, và do đó, bất kỳ Signal được tính toán nào phụ thuộc vào Signal đối tượng cũng sẽ được tính toán.

If we want to avoid this, we need to pass our equality function to the signal:

```ts
object = signal(
  {
    id: 1,
    title: "Angular For Beginners",
  },
  {
    equal: (a, b) => {
      return a.id === b.id && a.title == b.title;
    },
  }
);
```

Với chức năng bình đẳng này, chúng tôi hiện đang so sánh sâu về đối tượng dựa trên các giá trị của các thuộc tính của nó. 


With this new equality function, the derived signal is only computed once no matter how many times we click on the Update button:

Calling computed() function...

## Detecting signal changes with the effect() API

Việc sử dụng computed API cho chúng ta thấy rằng một trong những thuộc tính thú vị nhất của Signal là chúng ta có thể phát hiện bằng cách nào đó khi chúng thay đổi.

After all, that is exactly what the computed() API is doing, right?

Nó phát hiện rằng Signal nguồn đã thay đổi và phản hồi, nó tính toán giá trị của Signal dẫn xuất.

Nhưng điều gì sẽ xảy ra nếu thay vì tính toán giá trị mới của Signal phụ thuộc, chúng ta chỉ muốn phát hiện ra rằng một giá trị đã thay đổi vì một số lý do khác?

Hãy tưởng tượng rằng bạn đang ở trong một tình huống mà bạn cần phát hiện giá trị của Signal (hoặc một bộ Signal) đã thay đổi để thực hiện một số tác dụng phụ, điều đó không sửa đổi các Signal khác.


This could be for example:

- logging the value of a number of signals using a logging library
- exporting the value of a signal to localStorage or a cookie
- saving the value of a signal transparently to the database in the background
etc.

All of these scenarios can be implemented using the effect() API:

```ts
  counter = signal(0);
  derivedCounter = computed(() => {
    console.log('trigger computed');
    return this.counter() * 10;
  })
  effect = effect(() => {
    const currentCount = this.counter();
    const derivedCounter = this.derivedCounter();
    console.log(`current values: ${currentCount} ${derivedCounter}`);
  });

  constructor() {}

  increment() {
    console.log(`Updating counter...`)
    this.counter.set(this.counter());
  }
```

> Hiệu ứng này sẽ in ra một câu lệnh đăng nhập vào bảng điều khiển bất cứ lúc nào mà Signal bộ đếm hoặc dẫn xuất phát ra một giá trị mới.
>
> Working same computed, run after cumputed, computed không run thì effect không run

- Lưu ý rằng chức năng hiệu ứng này sẽ chạy ít nhất một lần khi hiệu ứng được khai báo.

- Giống như trong trường hợp API được tính toán (), các phụ thuộc Signal của hiệu ứng được xác định động dựa trên lệnh gọi cuối cùng đến hàm hiệu ứng.

## What is the relation between Signals and change detection?

Signal cho phép chúng tôi dễ dàng theo dõi các thay đổi đối với dữ liệu ứng dụng.

Bây giờ hãy tưởng tượng những điều sau đây: Giả sử chúng tôi đặt tất cả dữ liệu ứng dụng của chúng tôi trong Signal!

- Điểm đầu tiên cần đề cập là mã của ứng dụng sẽ không trở nên phức tạp hơn nhiều vì điều đó.
- Với các Signal, chúng tôi có thể dễ dàng phát hiện khi bất kỳ phần nào của dữ liệu ứng dụng thay đổi và tự động cập nhật bất kỳ phụ thuộc nào.

> This would enable Angular to know exactly what data has changed in the application, and what components and expressions need to be updated in response to a new signal value.
> 
> There would no longer be the need to check the whole component tree, like in the case of default change detection!
>
> Angular would know how to update the page with the latest data in the most optimal way possible.

Và đó là lợi ích hiệu suất chính của việc sử dụng Signal!

## The default effect clean-up mechanism

Và giống như bất kỳ chức năng nào, nó có thể tạo ra các tham chiếu đến các biến khác trong ứng dụng, thông qua việc đóng.

Điều này có nghĩa là giống như bất kỳ chức năng nào, chúng ta cần chú ý đến khả năng tạo rò rỉ bộ nhớ tình cờ khi sử dụng hiệu ứng.

### How to clean up effects manually

an effect() can be manually destroyed by calling destroy on the EffectRef instance that it returns when first created.

```ts
@Component({...})
export class CounterComponent {

  count = signal(0);

  constructor() {

    const effectRef = effect(() => {
        console.log(`current value: ${this.count()}`);
      },
      {
        manualCleanup: true
      }
    );

    // we can manually destroy the effect at any time
    effectRef.destroy();
  }
}
```

### Performing cleanup operations when an effect is destroyed

Trong một số trường hợp, chúng tôi có thể muốn thực hiện một số hoạt động dọn dẹp như đóng kết nối mạng hoặc phát hành một số tài nguyên khi một hiệu ứng bị phá hủy.

To support these use cases, we can pass to an effect a onCleanup callback function:

```ts
@Component({...})
export class CounterComponent {

  count = signal(0);

  constructor() {

    effect((onCleanup) => {
    
      console.log(`current value: ${this.count()}`);

      onCleanup(() => {
        console.log("Perform cleanup action here");
      });
    });
  }
}
```

Inside the onCleanup function, we can do any cleanup we want, such for example:

- unsubscribing from an observable
- closing a network or database connection
- clearing setTimeout or setInterval
etc.

## Read-only signals

Chúng tôi đã sử dụng Signal chỉ đọc, ngay cả khi không nhận thấy.

Đây là những Signal có giá trị không thể bị đột biến. Đây giống như tương đương với const trong ngôn ngữ JavaScript.

> Readonly signals can be accessed to read their value but can't be changed using the set or update methods. Read-only signals do not have any built-in mechanism that would prevent deep mutation of their value. - Angular repo

Read-only signals can be created from:

- `computed()`
- `signal.asReadonly()`

Let's try to change the value of a derived signal, just to see what happens:

```ts
@Component(
    selector: "app",
    template: `
  <h3>Counter value {{counter()}}</h3>
  <h3>Derived counter: {{derivedCounter()}}</h3>
`)
export class AppComponent {
    counter = signal(0);
    derivedCounter = computed(() => this.counter() * 10)

    constructor() {
      // this works as expected
      this.counter.set(5);
      // this throws a compilation error
      this.derivedCounter.set(50);
    }
}
```

- As we can see, we can set new values for the counter signal, which is a normal writeable signal.

- But we can't set values on the derivedCounter signal, as both the set() and
update() APIs are unavailable.

This means that derivedCounter is a read-only signal.

If you need to, you can easily derive a read-only signal from a writeable signal:

```ts
@Component(
  selector: "app",
  template: ` <h3>Counter value {{counter()}}</h3>`
)
export class AppComponent {
    counter = signal(0);

    constructor() {
      const readOnlyCounter = this.counter.asReadonly();
      // can update on couter
      this.couter.set(1)
      // but this throws a compilation error
      readOnlyCounter.set(5);
    }
}
```

## Using a signal in multiple components

```ts
// main.ts
import { signal } from "@angular/core";

export const count = signal(0);
```

As you can see, our signal is in a separate file, so we can import it in any component that needs it.

```ts
// app.component.ts
import { Component } from "@angular/core";
import { count } from "./main";

@Component({
  selector: "app",
  template: `
    <div>
      <p>Counter: {{ count() }}</p>
      <button (click)="increment()">Increment from HundredIncrComponent</button>
    </div>
  `,
})
export class HundredIncrComponent {
  count = count;

  increment() {
    this.count.update((value) => value + 100);
  }
}
```

## How to create signal-based reactive data services

Mẫu đơn giản nhất để chia sẻ Signal có thể ghi trên nhiều thành phần là quấn Signal trong dịch vụ dữ liệu, như vậy:

```ts
@Injectable({
  providedIn: "root",
})
export class CounterService {

  // this is the private writeable signal
  private counterSignal = signal(0);

  // this is the public read-only signal
  readonly counter = this.counterSignal.asReadonly();

  constructor() {
    // inject any dependencies you need here
  }

  // anyone needing to modify the signal 
  // needs to do so in a controlled way
  incrementCounter() {
    this.counterSignal.update((val) => val + 1);
  }
}
```

Mẫu này rất giống với việc sử dụng các dịch vụ dữ liệu có thể quan sát được với RXJS và một hành vi ([xem hướng dẫn này trên đó](https://blog.angular-university.io/how-to-build-angular2-apps-using-rxjs-observable-data-services-pitfalls-to-avoid/)), nếu bạn quen thuộc với mẫu đó.

Sự khác biệt là dịch vụ này đơn giản hơn nhiều để hiểu, và có những khái niệm ít nâng cao hơn khi chơi ở đây.

## Signals and OnPush components

Các thành phần `OnPush` là các thành phần chỉ được cập nhật khi các thuộc tính `@Input()` của chúng thay đổi hoặc khi các vật quan sát được đăng ký với async ống phát ra các giá trị mới.

Chúng không được cập nhật khi các thuộc tính đầu vào của chúng bị đột biến.

Bây giờ các thành phần onpush cũng được tích hợp với các Signal.

> When signals are used on a component, Angular marks that component as a dependency of the signal. When the signal changes, the component is re-rendered.

```ts
@Component({
  selector: "counter",
  template: `
    <h1>Counter</h1>
    <p>Count: {{ count() }}</p>
    <button (click)="increment()">Increment</button>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CounterComponent {
  count = signal(0);

  increment() {
    this.count.update((value) => value + 1);
  }
}
```

Trong ví dụ này, nếu chúng tôi nhấp vào nút Tăng, thành phần sẽ được kết xuất lại, có nghĩa là các Signal được tích hợp trực tiếp với ONPUSH.

> This means that we no longer need to inject `ChangeDetectorRef` and invoke`markForCheck`, to update an OnPush component in this scenario.

```ts
@Component({
  selector: "app",
  standalone: true,
  template: ` Number: {{ num }} `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
class ExampleComponent {
  num = 1;

  private cdr = inject(ChangeDetectorRef);

  ngOnInit() {
    setInterval(() => {
      this.num = this.num + 1;
      this.cdr.markForCheck();
    }, 1000);
  }
}
```

## Can I create signals outside of components/stores/services?

Absolutely! You can create signals anywhere you want. No constraint says that a signal needs to be inside a component, store, or service.

## How do Signals compare to RxJs?

Signals are not a direct replacement for RxJs, but they provide an easier-to-use alternative in certain situations where we would commonly need RxJs.

## Reference

<https://blog.angular-university.io/angular-signals/>
