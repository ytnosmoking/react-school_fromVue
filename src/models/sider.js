
import { getItem, setItem } from '@/utils/tools'


const siderInfo = getItem('siderInfo') || {
  collapsed: false
}

export default {
  state: siderInfo,
  effects: {
  },
  reducers: {
    toggleCollapsed(state, action) {
      const status = { ...state, collapsed: action.payload }
      console.log(status)
      setItem('siderInfo', status)
      return status
    }
  }
}