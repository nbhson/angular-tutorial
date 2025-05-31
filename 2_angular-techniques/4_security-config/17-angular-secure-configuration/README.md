- 'ts-node' is not recognized as an internal or external command,
  operable program or batch file.

```bash
npm install -g ts-node
```

- Property 'INIT_CWD' comes from an index signature, so it must be accessed with ['INIT_CWD']

```json
// tsconfig.json

"compilerOptions": {
// ...
 "noPropertyAccessFromIndexSignature": false,
// ...
}
```

- import \* as CryptoJS from 'crypto-js';
  ^^^^^^
  SyntaxError: Cannot use import statement outside a module

```json
// tsconfig.json

"compilerOptions": {
// ...
  "module": "commonjs",
// ...
}
```
<https://medium.com/nontechcompany/secure-angular-configuration-credentials-in-containerized-environment-as-of-2021-a7f36ed676ed>