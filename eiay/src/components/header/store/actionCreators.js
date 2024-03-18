import * as contans from './contants'

export const getData = (data) => ({
  type: contans.SET_DATA,
  data
})