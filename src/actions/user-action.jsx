import * as Type from './action-types';

/**
 * 保存用户信息
 * @param {*} preload
 */
export const HandleSaveUserInfo = (preload) => ({
  type: Type.SAVE_USER_INFO,
  data: preload
})