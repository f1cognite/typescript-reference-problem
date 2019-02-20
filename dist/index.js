function doSomething(asset) {
    return asset.id;
}
function somethingWithGenerics() {
    return function (item) {
        return item;
    };
}
function testWithGenerics() {
    return {
        myFunction: somethingWithGenerics(),
    };
}

export { doSomething, testWithGenerics };
