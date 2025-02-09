# JEST FRAMEWORK

## 1. Lợi ích của Unit test

- **Cải thiện design**: Bắt tay vào code mà không để ý quá nhiều đến design là một lỗi phổ biến của các developer, việc viết unit test sẽ bắt buộc bạn phải suy nghĩ, thậm chí nghĩ đi nghĩ lại về design
- **Dễ dàng refactor**: bởi vì bạn đã có các case test đảm bảo code của bạn chạy đúng như mong đợi, bạn có thể dễ dàng refactor code mà không lo sẽ tạo ra những bug mới
- **Thêm tính năng mới mà không làm ảnh hưởng đến các tính năng cũ**: thêm code mới mà chạy test thấy đỏ là biết sai rồi nhé :v
- **Test là một tài liệu về spec**: nếu viết test chuẩn và đủ case, thì chỉ cần đọc test, ta cũng có thể hiểu rõ spec còn nhanh hơn cả đọc code
- **Việc viết test giúp developer tự tin hơn**

## 2. JEST là gì?

**Jest** is a JavaScript Testing Framework with a focus on simplicity.
It works with projects using: Babel, TypeScript, Node, React, Angular, Vue and more

**Karma**: là một Javascript tool được sử dụng để load ứng dụng và thực thi test của bạn. Karma sẽ được thực thi bằng dòng lệnh và sẽ hiển thị kết quả cho bạn.

## 3. Tại sao lại dùng JEST

- **ZERO CONFIG**
  Jest aims to work out of the box, config free on most JavaScript projects.

- **SNAPSHOTS**
  Make tests which keep track of large objects with ease. Snapshots live either alongside your tests, or embedded inline.

- **GREATE API**
  From it to expect - Jest has the entire _(toàn bộ)_ toolkit in one place. Well documented, well maintained, well good.

- **FAST AND SAFE**
  By ensuring your tests have unique _(duy nhất)_ global state, Jest can reliably run tests in parallel. To make things quick, Jest runs previously failed tests first and re-organizes runs based on how long test files take.

- **CODE COVERAGE**
  Generate code coverage by adding the flag --coverage. No additional setup needed. Jest can collect code coverage information from entire projects, including untested files.

- **EASY MOCKING**
  Jest uses a custom resolver for imports in your tests, making it simple to mock any object outside of your test’s scope. You can use mocked imports with the rich Mock Functions API to spy on function calls with readable test syntax.

  Jest is a JavaScript testing framework designed to ensure correctness of any JavaScript codebase. It allows you to write tests with an approachable, familiar and feature-rich API that gives you results quickly.

  Jest is well-documented, requires little configuration and can be extended to match your requirements.

## 4. Cài đặt JEST

- B1: Loại bỏ jasmine và karma: `npm uninstall @types/jasmine jasmine-core karma karma-chrome-launcher karma-coverage karma-jasmine karma-jasmine-hterage karma-jasmine karma-jasmine-html-reporter`

- B2: Remote `test` property trong angular.json

- B3: Delete file `karma.conf.js` và `src/test.ts`

- B4: Install jest: `npm i jest @types/jest jest-preset-angular`

- B5: Tạo file `src/setup.jest.ts` và thêm `import 'jest-preset-angular/setup-jest';`

- B6: Sửa tsconfig.spec.json:

  - `"types": ["jasmine"]` to `"types": ["jest", "node"]`
  - `"files": "src/test.ts"` to `"files": "src/setup.jest.ts"`

- B7: Thêm vào file package.json

```json
"scripts": {
  "test": "jest",
  "test:watch": "jest --watch",
  "test:coverage": "jest --coverage"
}
"jest": {
  "preset": "jest-preset-angular",
  "setupFilesAfterEnv": [
    "<rootDir>/src/setup.jest.ts"
  ],
  "testPathIgnorePatterns": [
    "<rootDir>/node_modules/",
    "<rootDir>/dist"
  ],
  "globals": {
    "ts-jest": {
      "tsconfig": "<rootDir>/tsconfig.spec.json",
      "stringifyContentPathRegex": "\\.html$",
      "diagnostics": {
          "ignoreCodes": [
            "TS151001"
          ]
        }
    }
  }
}
```

## Matchers

### Common matchers

- `.toBe` uses Object.is to test exact equality: sử dụng cho kiểu tham trị
- `.toEqual`: sử dụng cho kiểu tham chiếu (object, array,...)

### Truthiness

- `.not`: dùng cho việc phủ định
- `.toBeNull` matches only null
- `.toBeUndefined` matches only undefined
- `.toBeTruthy` matches anything that an if statement treats as true
- `.toBeFalsy` matches anything that an if statement treats as false

### Numbers

`.toBeGreaterThan`: lớn hơn
`.toBeGreaterThanOrEqual`: lớn hơn bằng
`.toBeLessThan`: nhỏ hơn
`.toBeLessThanOrEqual`: nhỏ hơn bằng

### Strings

- `.toMatch`: check strings against regular expressions

### Arrays and iterables

- `.toContain`: check if an array or iterable contains a particular item

### Exceptions

- `.toThrow`: test whether a particular function throws an error when it's called

## Testing Asynchronous Code

### Promises

```js
test("the data is peanut butter", () => {
  return fetchData().then((data) => {
    expect(data).toBe("peanut butter");
  });
});
```

### Async/Await

```js
test("the data is peanut butter", async () => {
  const data = await fetchData();
  expect(data).toBe("peanut butter");
});

test("the fetch fails with an error", async () => {
  expect.assertions(1);
  try {
    await fetchData();
  } catch (e) {
    expect(e).toMatch("error");
  }
});

test("the data is peanut butter", async () => {
  await expect(fetchData()).resolves.toBe("peanut butter");
});

test("the fetch fails with an error", async () => {
  await expect(fetchData()).rejects.toMatch("error");
});
```

### Callbacks

```js
test("the data is peanut butter", (done) => {
  function callback(error, data) {
    if (error) {
      done(error);
      return;
    }
    try {
      expect(data).toBe("peanut butter");
      done();
    } catch (error) {
      done(error);
    }
  }

  fetchData(callback);
});
```

<https://codecraft.tv/courses/angular/unit-testing/dependency-injection/>
