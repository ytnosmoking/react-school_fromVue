
import { getItem, setItem, removeItem, postData, getData } from '@/utils/tools'
import { API } from '@/utils/API'
// import router from 'umi/router'

const userInfo = getItem('userInfo') || {
  token: "",
  role: "",
  name: "",
  code: '',
  major: {}
}
function login(payload) {
  return postData(API.Login, payload)
}
function getUserInfo() {
  return getData(API.userInfo)
}
export default {
  namespace: 'user',
  state: userInfo,
  effects: {
    *login({ payload }, { call, put }) {
      try {
        const { errcode: loginCode, data: { token } } = yield call(login, payload)
        if (loginCode === 0) {
          setItem('token', token)
          const { errcode: infoCode, data: infoData } = yield call(getUserInfo)
          if (infoCode === 0) {
            const { name, roles, teacher_no, major } = infoData
            const useInfo = { role: roles, name, code: teacher_no, major, token }
            setItem('userInfo', useInfo)
            yield put({ type: 'initInfo', payload: { role: roles, name, code: teacher_no, major, token } })
          }
        }
      } catch (error) { }
    }
  },
  reducers: {
    initInfo(state, action) {
      return action.payload
    },
    exitSystem(state, action) {
      removeItem('token')
      removeItem('userInfo')
      return {
        token: "",
        role: "",
        name: "",
        code: '',
        major: {}
      }
    }
  }
}