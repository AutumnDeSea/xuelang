// 实现Object.assign
// mdn解析： 将所有可枚举属性的值从一个或多个对象分配都目标对象，他将返回目标
// 是一个浅拷贝

// Object.prototype.hasOwnProperty('pro')  对象本身是否有某个属性
// Object.prototype.propertyIsEnumerable('pro') 指定的属性是否可枚举
// getOwnPropertyDescriptor
// 可枚举属性: 对象本身的属性


function assgin(...target) {
  if(target == null) {
    throw new TypeError('Cannot convert undefined or null to object')
  }
  for(let i = 1; i <target.length ; i++) {
    let nextSource = target[i]
    for(let nextKey in nextSource) {
      if(nextSource.hasOwnProperty(nextKey)) {
        target[nextKey] = nextSource[nextKey]
      }
    }
  }
}
assgin({a: 1}, {b: 2}, {c: 3}, {})