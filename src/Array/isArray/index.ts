const objToString = {}.toString;
const newIsArray = (obj: any) => objToString.call(obj) === '[object Array]'

export default Array.isArray || newIsArray;