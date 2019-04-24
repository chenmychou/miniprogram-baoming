function formatNumber (n) {
  const str = n.toString()
  return str[1] ? str : `0${str}`
}

export function formatTime (date) {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()

  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  const t1 = [year, month, day].map(formatNumber).join('/')
  const t2 = [hour, minute, second].map(formatNumber).join(':')

  return `${t1} ${t2}`
}
/* eslint-disable */
export function IdentityCodeValid (code) {
  var regIdCard = /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/
  var idnumber = code
  var flag = true
  if (regIdCard.test(idnumber)) {
    if (idnumber.length == 18) {
      var idCardWi = new Array(7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2)
      var idCardY = new Array(1, 0, 10, 9, 8, 7, 6, 5, 4, 3, 2)
      var idCardWiSum = 0
      for (var i = 0; i < 17; i++) {
        idCardWiSum += idnumber.substring(i, i + 1) * idCardWi[i]
      }
      var idCardMod = idCardWiSum % 11
      var idCardlast = idnumber.substring(17)
      if (idCardMod == 2) {
        if (idCardlast != 'X' && idCardlast != 'x') {
          flag = false
        }
      } else {
        if (idCardlast != idCardY[idCardMod]) {
          flag = false
        }
      }
    }
  } else {
    flag = false
  }
  return flag
}
export function validate (params, mapData) {
  let obj = JSON.parse(params)
  let tempMapData = JSON.parse(mapData)
  var keys = []
  keys = Object.keys(obj)
  var values = []
  values = Object.values(obj)
  for (var i in keys) {
    if (!values[i]) {
      wx.showToast({
        title: `${tempMapData[keys[i]]}填写有误`,
        icon: 'none',
        duration: 2000
      })
      return false
    } else {
      continue
    }
  }
  // wx.showToast({
  //   title: '个人信息校验成功',
  //   icon: 'success',
  //   duration: 2000
  // })
  return true
}

export default {
  formatNumber,
  formatTime,
  IdentityCodeValid,
  validate
}
