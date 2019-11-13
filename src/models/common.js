// eslint-disable-next-line
import { postData, getData } from '@/utils/tools'
import { API } from '@/utils/API'

function getMoreMajor(payload) {
  return getData(API.majors, payload)
}


export default {
  state: {
    majors: {
      lists: [],
      page: {
        total: 0
      },
      loading: false

    }
  },
  effects: {
    *getMoreMajor({ payload }, { call, put, select }) {
      try {
        const config = yield select(state => state.common.majors)
        if (config.page.total <= config.lists.length && config.page.total !== 0) {
          return
        }
        if (config.loading) {
          return
        }
        yield put({
          type: 'syncMajor', payload: {
            ...config,
            loading: true
          }
        })

        const { errcode, data: {
          data,
          current_page,
          total,
          per_page
        } } = yield call(getMoreMajor, { page: (config.page && config.page.page || 0) + 1, page_size: 10 })
        console.log(data)
        if (errcode === 0) {
          yield put({
            type: 'syncMajor', payload: {
              lists: [...config.lists, ...data.map(item => ({ label: item.id, value: item.title }))],
              page: {
                page: current_page,
                total,
                page_size: per_page
              },
              loading: false
            }
          })
        }
      } catch (error) {
        console.log(error)
      }
    }
  },
  reducers: {
    syncMajor(state, action) {
      return {
        ...state, majors: { ...state.majors, ...action.payload }
      }
    }
  }
}