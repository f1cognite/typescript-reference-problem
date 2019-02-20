## To reproduce

```
$ yarn
$ yarn build
```

Problems:
  1. `dist/index.d.ts` has invalid references to `Components.Schemas.Asset` (question: why is this resolved from `Asset` to `Components.Schemas.Asset`)?
  2. `dist/cdpTypes.d.ts` referes to `src/types/cdp/index.d.ts` which is an invalid path
