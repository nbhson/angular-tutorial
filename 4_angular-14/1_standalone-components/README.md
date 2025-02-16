# Angular14

## Standalone Component

> Standalone components là một dạng component được khai báo độc lập, không phụ thuộc việc khai báo trong NgModules như cách thông thường. `Standalone components` gồm components, directives hoặc pipes.

- `Standalone Component` sử dụng nhiều dependencies (components, directives, pipes, ... ), những đối tượng này không thuộc dạng standalone và phải import trực tiếp trong component hoặc cũng có thể import toàn bộ ngModule.

- Angular có thể chạy với `standalone component` như là component root của ứng dụng thay vì ngModules thông thường

```ts
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule], // [NgModule]
  providers: [
    {
      provide: INJECTOR_INITIALIZER,
      multi: true,
      useValue: () => inject(LoadingService).markLoaded()
    }
  ],
})
```
- Các trường hợp sử dụng:
    - Component không phụ thuộc, sử dụng độc lập vào NgModule.
    - Directives, Pipes ít sử dụng hoặc hạn chế sử dụng.
    - Dùng trong phát triển modules hoặc thư viện.

- Lợi ích:
    - Đơn giản hóa quá trình xây dựng ứng dụng: *Standalone components giúp đơn giản hóa việc xây dựng ứng dụng Angular bằng cách giảm bớt nhu cầu sử dụng NgModule1*.
    - Tính linh hoạt cao: *Các ứng dụng hiện tại có thể tùy chọn và dần dần áp dụng phong cách standalone mới mà không gây ra bất kỳ thay đổi phá vỡ nào*.
    - **Quản lý phụ thuộc trực tiếp**: *Standalone components cho phép chỉ định các phụ thuộc trực tiếp thay vì thông qua NgModule. Điều này giúp quản lý các phụ thuộc một cách rõ ràng và trực tiếp hơn.*
    - Khả năng tương thích ngược với NgModule: *Standalone components có thể được nhập vào trong các ngữ cảnh dựa trên NgModule hiện có. Điều này cho phép các ứng dụng hiện tại (đang sử dụng NgModule) có thể dần dần áp dụng phong cách component standalone mới.*
    - Khởi chạy ứng dụng mà không cần NgModule: *Một ứng dụng Angular có thể được khởi chạy mà không cần bất kỳ NgModule nào bằng cách sử dụng một standalone component làm component gốc của ứng dụng.*


https://github.com/angular/angular/discussions/45554