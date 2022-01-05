// 实现深拷贝
// 判断是基本数据类型
function isPrimitive(value) {
  let dataType = typeof value
  return (dataType === 'string' ||
    dataType === 'boolean' ||
    dataType === 'symbol' || 
    dataType === 'number'
  )
}
function isObject(value) {
  // call apply bind 都会为了改变函数内部的this
  // 因为array function等 都重写了toString方法，所以需要call 执行Object原型上的toString方法，返回正确的类型
  return Object.prototype.toString.call(value)
}
function cloneDeep() {
  let memo = {}
  function baseClone(value) {
    let res 
    if(isPrimitive(value)) {
      return value
    } else if(Array.isArray(value)) {
      res = [...value]
    } else if(isObject(value)) {
      res = {
        ...Object
      }
    }
    Reflect.ownKeys(res).forEach(key => {
      if(res[key] === 'object' && res[key] !== null) {
        if(memo[res[key]]) {
          res[key] = memo[res[key]]
        } else {
          memo[res[key]] = res[key]
          res[key] = baseClone(res[key])
        }
      }
    })
    return res
  }
}
// lodash的clonedeep兼容了多种类型的拷贝
// 这里使用memo记录已经拷贝过的值，用来解决循环引用的问题