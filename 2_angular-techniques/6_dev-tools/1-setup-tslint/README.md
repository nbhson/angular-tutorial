# ESlint

## Setup

- Step 1: chạy lệnh `npm install eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-plugin-import eslint-plugin-jsdoc eslint-plugin-prefer-arrow --save-dev`

- Step 2: thêm .eslintrc.json vào thư mục gốc

```json
{
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": 2021,
    "sourceType": "module"
  },
  "extends": [
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript"
  ],
  "rules": {
    "semi": ["error", "always"],
    "indent": ["error", 2],
    "quotes": ["error", "single"]
  }
}

```

- Step 3: thêm script vào package.json

```json
"scripts": {
  "lint": "eslint . --ext .ts --fix"
}
```


## Ý nghĩa


Cụ thể, đoạn này có các phần sau:

- `"parser": "@typescript-eslint/parser"`: sử dụng trình phân tích cú pháp TypeScript của @typescript-eslint/parser để phân tích cú pháp mã nguồn.

- `"parserOptions"`: cấu hình tùy chọn cho trình phân tích cú pháp, trong đó ecmaVersion là phiên bản ECMAScript được sử dụng và sourceType là loại module được sử dụng trong mã nguồn (ví dụ: "module").

- `"extends"`: liệt kê các tập luật mở rộng (plugin) được sử dụng trong quá trình kiểm tra. Trong ví dụ này, đoạn mã sử dụng ba tập luật mở rộng để kiểm tra các lỗi và cảnh báo về các lỗi nhập và loại TypeScript.

- `"rules"`: các tùy chọn cấu hình cho các quy tắc được áp dụng khi kiểm tra mã nguồn. Trong ví dụ này, đoạn mã định nghĩa ba quy tắc:

- `"semi": ["error", "always"]`: yêu cầu luôn phải sử dụng dấu chấm phẩy.

- `"indent": ["error", 2]`: yêu cầu sử dụng khoảng trắng để thụt đầu dòng và thụt lề bằng 2 ký tự.

- `"quotes": ["error", "single"]`: yêu cầu sử dụng dấu nháy đơn thay vì dấu nháy kép.
