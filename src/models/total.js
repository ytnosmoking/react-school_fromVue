
// eslint-disable-next-line
import { postData, getData } from '@/utils/tools'
import { API } from '@/utils/API'


function getTotalRequire(payload) {
  return getData(API.Require, payload)
}

function getTotalGraduate(payload) {
  return getData(API.Graduate, payload)
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
    graduateInfo: {
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
    },
    *getTotalGraduate({ payload }, { call, put }) {
      yield put({
        type: 'syncTableLoading', payload: {
          loading: true
        }
      })
      try {
        const { errcode, data: { data, current_page, total, per_page } } = yield call(getTotalGraduate, payload)
        if (errcode === 0) {
          yield put({
            type: 'syncGraduateInfo', payload: {
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
            key: item.id,
            year: item.enter_year,
            major: item.major.title
          })),
          page
        }
      }
    },
    syncGraduateInfo(state, action) {
      const { payload: { data, page } } = action
      // console.log(data)
      // console.log(page)
      return {
        ...state,
        graduateInfo: {
          data: data.map(item => {
            const { student: { name, student_no, class: { enter_year: year, major: { title: major }, title: classes } } } = item
            return {
              name,
              student_no,
              year,
              major,
              classes,
              ...item,
              key: item.id,
              control: {
                id: item.id,
                major,
                year,
                student_no,
                name
              }
            }
          }),
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