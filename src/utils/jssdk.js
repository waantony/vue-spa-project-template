// import { getJsSdk } from '@/api/index'
import wx from 'wx'

// export const handleWxConfig = apis => {
//   getJsSdk({
//     apis,
//     url: encodeURIComponent(location.href.split('#')[0]),
//   }).then(res => {
//     const config = JSON.parse(res.data)
//     wx.config(config)
//   })
// }

export const handleWxReady = () => new Promise(resolve => {
  // config信息验证后会执行ready方法，所有接口调用都必须在config接口获得结果之后，
  // config是一个客户端的异步操作，所以如果需要在页面加载时就调用相关接口，
  // 则须把相关接口放在ready函数中调用来确保正确执行。对于用户触发时才调用的接口，则可以直接调用，不需要放在ready函数中。
  wx.ready(resolve)
})

/**
 * 获取定位信息
 * @returns { { latitude: number; longitude: number; speed: number, accuracy: number } }
 */
export const handleGetLocation = () => new Promise((resolve, reject) => {
  wx.getLocation({
    type: 'gcj02', // 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
    success (res) {
      resolve(res)
      // var latitude = res.latitude; // 纬度，浮点数，范围为90 ~ -90
      // var longitude = res.longitude; // 经度，浮点数，范围为180 ~ -180。
      // var speed = res.speed; // 速度，以米/每秒计
      // var accuracy = res.accuracy; // 位置精度
    },
  })
})

/**
 * 添加微信卡券，触发时跳到微信卡券领取页面
 * @param { Array<{ cardId: string, cardExt: string }> } cardList 卡券对象组成的数组
 * @example
 * handleWxAddCard([{ cardId: '', cardExt: '' }])
 */
export const handleWxAddCard = cardList => new Promise((resolve, reject) => {
  wx.addCard({
    cardList, // 需要添加的卡券列表
    success (res) {
      resolve(res)
    },
  })
})

/**
 * 查看微信卡券，触发时跳到微信卡券页面
 * @param { Array<{ cardId: string, code: string }> } cardList 卡券对象组成的数组
 * @example
 * handleWxOpenCard([{ cardId: '', code: '' }])
 */
export const handleWxOpenCard = cardList => new Promise((resolve, reject) => {
  wx.openCard({
    cardList, // 需要查看的卡券列表
  })
  resolve()
})
