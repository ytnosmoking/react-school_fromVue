
import { postData, getData } from '@/utils/tools'
import { API } from '@/utils/API'


function getTotalRequire(payload) {
  return getData(API.Require, payload)
}

export default {
  state: {
    requireInfo: {
      data: [],
      page: {
        size: 10,
        current: 1,
        total: 1
      }
    }
  },
  effects: {
    *getTotalRequire({ payload }, { call, put }) {
      try {
        const res = yield call(getTotalRequire, payload)
        console.log(res)
      } catch (err) {
        console.log(err)
      }
    }
  },
  reducers: {

  }
}