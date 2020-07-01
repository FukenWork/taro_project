/**
 * 路由跳转封装
 * @param {*} url
 * @param {*} params
 */
export const TaroNavigate = (url, params) => {
  return Taro.navigateTo(`${url}?params=${params}`)
}