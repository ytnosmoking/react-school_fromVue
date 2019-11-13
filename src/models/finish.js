
// eslint-disable-next-line
import { postData, getData } from '@/utils/tools'
import { API } from '@/utils/API'


function getFinishRequire(payload) {
  return getData(API.FinishRequireMent, payload)
}

export default {
  state: {
    requireMent: []
  },
  effects: {
    *getFinishRequire({ payload }, { call, put }) {
      try {
        const { errcode, data } = yield call(getFinishRequire)
        if (errcode === 0) {
          yield put({
            type: 'syncFinishRequireMent', payload: {
              data
            }
          })
        }
      } catch (err) {
        console.log(err)
      }
    }
  },
  reducers: {
    syncFinishRequireMent(state, action) {
      const { payload: { data } } = action
      return {
        ...state,
        requireMent: data
      }
    }
  }
}