# Signals

`ng generate environments`: tạo các file environments

`ng generate @angular/core:standalone`: migrate project to standalone

## Signals là gì?

> `Signals` là lớp bao bọc xung quanh một giá trị có thể thông báo cho người dùng quan tâm khi giá trị đó thay đổi

### Writable signals

```ts
const count = signal(0);
console.log('The count is: ' + count()); // Signals are getter functions - calling them reads their value.
```

- To change the value of a writable signal, you can either `.set()` it directly:

```ts
this.count.set(3); // new value (phải tuân thủ theo type ban đầu - ví dụ {name: string, age: number})
```

- or use the `.update()` operation to compute a new value from the previous one:

```ts
this.count.update(value => value + 1); // new value (dựa trên value cũ/previous)

this.object.update(pre => {
    return { name: 'Son', age: 18 }
});
```

- or use the `.mutate()` linh động, có thể update tùy thích không cần dựa vào object/type ban đầu

```ts
 this.signalObject.mutate(v => v.age = 18); // chỉ muốn change age
```

## Computed signals

- Nếu gắn `computed` cho một variable, điều này sẽ làm biến đó phụ thuộc vào `signal` được khai báo trong `computed` 
- Bất kỳ khi nào `signal change` thì variable có `computed` phụ thuộc vào `signal` cũng sẽ change theo

```ts
const count: WritableSignal<number> = signal(0);
const doubleCount: Signal<number> = computed(() => count() * 2);
```
## Effects

- Effect dùng để theo dõi `signal`, bất cứ khi nào signal change, effect sẽ được kích hoạt

```ts
// theo dõi đồng thời 
effect(() => {
    console.log(Date.now(), this.signalInput(), this.signalCount());
})

// hoặc theo dõi riêng lẽ

effect(() => {
  console.log(Date.now(), this.signalInput());
})
effect(() => {
  console.log(Date.now(), this.signalCount());
})
```

## Advanced topics

- Nếu dử dụng ` changeDetection: ChangeDetectionStrategy.OnPush` thì khi sử dụng signal nó sẽ tự động change detect 1 lần. Nếu không phải sử dụng `ChangeDetectorRef` để kích hoạt sự thay đổi

```ts

// Ví dụ cho call api

@Component({
  selector: 'app-simple-signals',
  changeDetection: ChangeDetectionStrategy.OnPush 
  ...
})

signalBoolean = true;

updateBoolean() {
    setTimeout(() => {
      this.signalBoolean = !this.signalBoolean;
    }, 500); // sau 500ms thì UI sẽ ko render ra đúng
}

// bắt buộc phải manual notify

constructor(private cdf: ChangeDetectorRef) { }
updateBoolean() {
    setTimeout(() => {
      this.signalBoolean = !this.signalBoolean;
      this.cdf.markForCheck(); // phải dùng markForCheck
    }, 500); 
}
```

- Nhưng nếu sử dụng signal nó sẽ tự động giải quyết vấn đề này (không cần detectChange/markForCheck.. khi dùng OnPush):

```ts
@Component({
  selector: 'app-simple-signals',
  changeDetection: ChangeDetectionStrategy.OnPush
  ...
})

signalBoolean = signal<boolean>(false);

updateBoolean() {
  this.signalBoolean.update(previousValue => !previousValue); // tự động markForCheck
}
```

![image](https://github.com/user-attachments/assets/40f55f5a-1fde-43af-ae2e-fd0faffc025e)
