# "Ports and Adapters" vs "Hexagonal Architecture" – Có phải là cùng một mẫu kiến trúc?

## Tổng quan

"Hexagonal Architecture" nhấn mạnh ý tưởng về một lõi được bao quanh bởi nhiều mặt (giống như hình lục giác, nhưng số lượng mặt không quan trọng) đại diện cho các hệ thống bên ngoài khác nhau (adapters), với các ports là giao diện của chúng.

![alt text](https://wp.angular.love/wp-content/uploads/2025/02/image1-2-768x603.png)

"Ports and Adapters" diễn đạt cùng một mô hình đơn giản hóa theo cách trực tiếp hơn và mô tả trực tiếp các thành phần liên quan: Ports (giao diện) và Adapters (triển khai). Nó được sử dụng phổ biến hơn khi không cần đến phép ẩn dụ trực quan về hình lục giác.

![alt text](https://wp.angular.love/wp-content/uploads/2025/02/image2-2-768x407.png)

> Cả Hexagonal Architecture và Ports and Adapters đều nhằm mục đích tách biệt logic nghiệp vụ khỏi các hệ thống bên ngoài bằng cách sử dụng các giao diện (ports) và các triển khai (adapters). Về bản chất, chúng là một, thường được sử dụng thay thế cho nhau để mô tả cùng một mẫu kiến trúc.

## Ports and Adapters là gì?

Mẫu kiến trúc Ports and Adapters được giới thiệu bởi Alistair Cockburn (được biết đến nhiều nhất với việc đồng sáng tạo và ký kết Manifesto for Agile Software Development vào năm 2001). Ý tưởng trung tâm là cô lập logic nghiệp vụ cốt lõi của ứng dụng (trái tim của ứng dụng) khỏi các phụ thuộc bên ngoài, như cơ sở dữ liệu, giao diện người dùng và các dịch vụ bên ngoài.

### Cấu trúc chính

- **Core Business Logic (Logic nghiệp vụ cốt lõi)**: Nằm ở trung tâm của kiến trúc. Tất cả các quy tắc nghiệp vụ thiết yếu, mô hình miền và dịch vụ ứng dụng đều được đặt ở đây. Core độc lập với bất kỳ hệ thống bên ngoài nào, đảm bảo logic nghiệp vụ có thể hoạt động mà không phụ thuộc trực tiếp vào các chi tiết cơ sở hạ tầng như API trình duyệt, lớp HTTP hoặc các tính năng đặc thù của framework.

- **Ports (Cổng)**: Là các giao diện trừu tượng định nghĩa cách core tương tác với thế giới bên ngoài. Ví dụ có thể bao gồm các dịch vụ định nghĩa các use case của ứng dụng, như "createTodoItem" hoặc "changeItemStatus".

- **Adapters (Bộ chuyển đổi)**: Là các triển khai cụ thể của ports. Chúng đóng vai trò là cầu nối giữa logic nghiệp vụ cốt lõi và các hệ thống bên ngoài. Adapters chuyển đổi các định dạng dữ liệu, giao thức hoặc yêu cầu bên ngoài thành dạng mà logic cốt lõi có thể hiểu và làm việc được.

## Khi nào và tại sao nên sử dụng Ports and Adapters?

Mẫu thiết kế này nhằm mục đích làm cho các ứng dụng phần mềm trở nên mô-đun hóa, dễ bảo trì và thích ứng với thay đổi hơn.

### Lợi ích chính

1. **Tách biệt các mối quan tâm (Separation of Concerns)**: 
  - Core business logic được đặt ở trung tâm và hoàn toàn độc lập
  - Không phụ thuộc vào bất kỳ framework hay công nghệ bên ngoài nào
  - Có thể thay đổi công nghệ mà không cần thay đổi logic nghiệp vụ

2. **Khả năng thay thế các thành phần bên ngoài**
  - Có thể dễ dàng thay đổi database (từ MySQL sang MongoDB)
  - Có thể thay đổi giao diện người dùng (từ Web sang Mobile)
  - Có thể thay đổi các dịch vụ bên ngoài (từ REST API sang GraphQL)

3. **Tính mô-đun (Modularity)**:
   - Khuyến khích phát triển các mô-đun dễ thay thế hoặc nâng cấp
   - Có thể thay đổi adapter cơ sở dữ liệu mà không cần thay đổi logic nghiệp vụ cốt lõi

4. **Khả năng kiểm thử (Testability)**:
   - Logic nghiệp vụ cốt lõi có thể được kiểm thử độc lập
   - Dễ dàng sử dụng các triển khai giả của ports
   - Dẫn đến các bài kiểm thử đơn vị đáng tin cậy hơn

5. **Tính linh hoạt (Flexibility)**:
   - Hỗ trợ nhiều giao diện để tương tác với ứng dụng
   - Cùng một logic cốt lõi có thể được truy cập qua nhiều cách khác nhau

### Lợi ích thực tế 

1.  **Bảo trì dễ dàng hơn**
  - Khi cần thay đổi công nghệ, chỉ cần thay đổi adapter
  - Business logic không bị ảnh hưởng bởi thay đổi bên ngoài

2. **Phát triển song song**
  - Team có thể làm việc trên các adapter khác nhau
  - Có thể phát triển và test business logic độc lập

3. **Tái sử dụng code**
  - Có thể tái sử dụng business logic cho nhiều platform khác nhau
  - Dễ dàng tạo các adapter mới cho các công nghệ mới

4. **Kiểm thử hiệu quả**
  - Có thể viết unit test cho business logic mà không cần setup database
  - Dễ dàng mock các dependency bên ngoài

## Triển khai Ports and Adapters trong Angular

Việc triển khai Ports and Adapters trong Angular rất đơn giản, nhờ vào TypeScript và Dependency Injection có sẵn trong Angular.

### Ví dụ triển khai

```typescript
// 1. Định nghĩa Port (Interface) - Đây là contract của business logic
export interface UserRepository {
  findById(id: string): Observable<User>;
  save(user: User): Observable<void>;
  delete(id: string): Observable<void>;
}

// 2. Triển khai Adapter - Đây là implementation cụ thể
@Injectable()
export class HttpUserRepository implements UserRepository {
  constructor(private http: HttpClient) {}

  findById(id: string): Observable<User> {
    return this.http.get<User>(`/api/users/${id}`);
  }

  save(user: User): Observable<void> {
    return this.http.post<void>('/api/users', user);
  }

  delete(id: string): Observable<void> {
    return this.http.delete<void>(`/api/users/${id}`);
  }
}

// 3. Sử dụng trong Component
@Component({
  providers: [
    {
      provide: UserRepository,
      useClass: HttpUserRepository
    }
  ]
})
export class UserComponent {
  constructor(private userRepo: UserRepository) {}

  loadUser(id: string) {
    this.userRepo.findById(id).subscribe(user => {
      // Xử lý logic nghiệp vụ
    });
  }
}
```

Trong ví dụ trên:
  - UserRepository là port (interface) định nghĩa các operation cần thiết
  - HttpUserRepository là adapter triển khai cụ thể sử dụng HTTP
  - Nếu muốn thay đổi từ HTTP sang WebSocket, chỉ cần tạo adapter mới:

```ts
@Injectable()
export class WebSocketUserRepository implements UserRepository {
  constructor(private ws: WebSocket) {}

  findById(id: string): Observable<User> {
    return this.ws.send(`getUser:${id}`);
  }
  // ... các method khác
}
```

### Sử dụng Abstract Class

Chúng ta có thể đơn giản hóa triển khai trên bằng cách sử dụng abstract class:

```typescript
// Port (Abstract Class)
export abstract class FruitService {
  abstract getAllFruits(): Observable<Fruit[]>;
  abstract getFruitById(id: string): Observable<Fruit>;
}

// Adapter
@Injectable()
export class FruitServiceAdapter implements FruitService {
  // Triển khai tương tự như trên
}

// Sử dụng trong Component
@Component({
  providers: [
    {
      provide: FruitService,
      useClass: FruitServiceAdapter,
    },
  ],
})
export class App {
  fruitService = inject(FruitService);
}
```

## Kết luận

Việc triển khai kiến trúc Ports and Adapters (Hexagonal) trong Angular giúp tổ chức ứng dụng của bạn và cung cấp một khuôn khổ vững chắc để duy trì và mở rộng dự án theo thời gian. Bằng cách tách biệt logic nghiệp vụ cốt lõi khỏi các chi tiết của cơ sở hạ tầng bên ngoài, bạn đạt được tính linh hoạt và khả năng kiểm thử cao hơn. Sự hỗ trợ mạnh mẽ của TypeScript và cơ chế Dependency Injection trong Angular giúp việc triển khai kiến trúc này trở nên dễ dàng, cho phép bạn định nghĩa các hợp đồng rõ ràng (ports) và các triển khai cụ thể (adapters) một cách liền mạch.

Khi ứng dụng của bạn phát triển, lợi ích của mẫu này ngày càng trở nên rõ ràng, làm cho codebase của bạn trở nên mô-đun hóa, dễ thích ứng và kiên cường hơn trước sự thay đổi. Nếu bạn đang hướng đến một ứng dụng Angular có cấu trúc tốt và dễ bảo trì, việc áp dụng kiến trúc Ports and Adapters là một lựa chọn chiến lược có thể giúp dự án của bạn thành công trong dài hạn.


## Reference

<https://angular.love/ports-and-adapters-vs-hexagonal-architecture-is-it-the-same-pattern>

Stackblitz: <https://stackblitz.com/edit/stackblitz-starters-xwxwca?file=src%2Ffruit-service%2Ffruit-service.port.ts>