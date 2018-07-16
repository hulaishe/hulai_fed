const utils = {
  isArray(obj) {
    return toString.call(obj) === '[object Array]'
  },
  isObject(obj) {
    return toString.call(obj) === '[object Object]'
  },
  isNumber(num) {
    if (parseFloat(num).toString() === 'NaN') {
      return false
    } else {
      return true
    }
  },
  removeStaticSourceHTTPSchema(data) {
    if (typeof data === 'string') {
      if (/^http:/.test(data)) {
        return data.replace(/^http:/, 'https:')
      }
      if (data.substr(0, 2) === '//') {
        return 'https:' + data
      }
    } else if (this.isArray(data)) {
      data.forEach((item, i) => {
        data[i] = this.removeStaticSourceHTTPSchema(item)
      })
    } else if (this.isObject(data)) {
      for (var k in data) {
        data[k] = this.removeStaticSourceHTTPSchema(data[k])
      }
    }

    return data
  },
}

export default utils