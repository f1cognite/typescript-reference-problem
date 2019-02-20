import { Asset } from './cdpTypes';

export function doSomething(asset: Asset) {
  return asset.id;
}

function somethingWithGenerics<T>() {
  return (item: T) => {
    return item;
  };
}

export function testWithGenerics() {
  return {
    myFunction: somethingWithGenerics<Asset>(),
  };
}
