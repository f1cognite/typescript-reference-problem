## Problems:
  1. [dist/index.d.ts](./dist/index.d.ts) has invalid references to `Components.Schemas.Asset` (question: why is this resolved from `Asset` to `Components.Schemas.Asset`)?
  2. [dist/cdpTypes.d.ts](./dist/cdpTypes.d.ts) referes to `src/types/cdp/index.d.ts` which is an invalid path

[src/types/cdp/index.d.ts](/src/types/cdp/index.d.ts) is auto-generated and therefore I need to include it this way.

## To reproduce

```
$ yarn
$ yarn build
```