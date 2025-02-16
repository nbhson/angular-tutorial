# 4ImprovementsEsbuild

![esBuild](https://miro.medium.com/v2/resize:fit:720/0*QnnRKdHVrJc_q_29)

In v14 we announced the experimental support for `esbuild` in `ng build` to enable faster build times and simplify our pipeline.

In v15 we now have experimental `Sass`, `SVG template`, `file replacement` , and `ng build --watchsupport` Please give esbuild a try by updating your builders angular.json from:

```json
"builder": "@angular-devkit/build-angular:browser"
```
to

```json
"builder": "@angular-devkit/build-angular:browser-esbuild"
```