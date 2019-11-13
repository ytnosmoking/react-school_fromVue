
// eslint-disable-next-line
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
    },
    tableLoading: true
  },
  effects: {
    *getTotalRequire({ payload }, { call, put }) {
      yield put({
        type: 'syncTableLoading', payload: {
          loading: true
        }
      })
      try {
        const { errcode, data: { data, current_page, total, per_page } } = yield call(getTotalRequire, payload)
        if (errcode === 0) {
          yield put({
            type: 'syncRequireInfo', payload: {
              data,
              page: {
                size: per_page,
                current: current_page,
                total
              }
            }
          })
          yield put({
            type: 'syncTableLoading', payload: {
              loading: false
            }
          })
        }
      } catch (err) {
        console.log(err)
        yield put({
          type: 'syncTableLoading', payload: {
            loading: false
          }
        })
      }
    }
  },
  reducers: {
    syncRequireInfo(state, action) {
      const { payload: { data, page } } = action
      return {
        ...state,
        requireInfo: {
          data: data.map(item => ({
            ...item,
            year: item.enter_year,
            major: item.major.title
          })),
          page
        }
      }
    },
    syncTableLoading(state, action) {
      const { payload: { loading } } = action
      return {
        ...state,
        tableLoading: loading
      }
    }
  }
}