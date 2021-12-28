// 实现Object.assign
// mdn解析： 将所有可枚举属性的值从一个或多个对象分配都目标对象，他将返回目标

// Object.prototype.hasOwnProperty('pro')  对象本身是否有某个属性
// Object.prototype.propertyIsEnumerable('pro') 指定的属性是否可枚举
// 可枚举属性: 对象本身的属性

function assign(a, ...args) {

}
assign({a: 1}, {b: 2}, {c: 3})