# QueryParamHandling

##  queryParamsHandling: 'preserve'

- Hành vi:

Giữ nguyên toàn bộ query parameters hiện tại của URL, không thêm/xóa/sửa bất kỳ tham số nào.
Nếu bạn chuyển hướng đến một route mới, các query parameters hiện tại sẽ được giữ nguyên.

- Ví dụ:

URL hiện tại: /products?page=1&sort=asc
Navigation đến: /details với queryParamsHandling: 'preserve'
-> Kết quả URL: /details?page=1&sort=asc

Use Case:
Khi bạn muốn giữ nguyên các tham số như page, filter,... khi chuyển hướng giữa các trang (ví dụ: từ danh sách sang trang chi tiết).

## queryParamsHandling: 'merge'

- Hành vi:

Kết hợp query parameters hiện tại với các query parameters mới được truyền vào trong navigation.
Nếu có tham số trùng tên, giá trị mới sẽ ghi đè lên giá trị cũ.

- Ví dụ:

URL hiện tại: /products?page=1&sort=asc
Navigation đến: /details với queryParamsHandling: 'merge' và queryParams: { sort: 'desc' }
-> Kết quả URL: /details?page=1&sort=desc

Use Case:
Khi bạn muốn cập nhật một số tham số nhưng vẫn giữ nguyên các tham số khác (ví dụ: thay đổi cách sắp xếp nhưng giữ nguyên phân trang).

## Bảng So Sánh

Feature	                    preserve	        merge
Giữ nguyên params hiện tại	✅	               ✅ (chỉ những param không trùng tên)
Thêm params mới	            ❌	               ✅
Ghi đè params trùng tên 	❌	               ✅
Xóa params cũ	            ❌	               ❌ (chỉ xóa nếu không được merge)

## Default query params handling strategy

You can now set a default query parameter handling strategy for all routes directly in the provideRouter() configuration.

```ts
export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withRouterConfig({defaultQueryParamsHandling: 'preserve'}))
  ]
};
```

While Angular’s default is the replace strategy, you can choose preserve or merge. Before this, the strategy could only be set individually for each navigation, either through RouterLink or router.navigate options.

https://angular.love/angular-19-whats-new#RouterLink%20accepting%20UrlTree