import is from 'is_js'
import { handleActions } from 'redux-actions'
import Im from 'immutable'

// 最外层 必须这么写
const defaultState = {
  data: {
    name: {
      age: 1,
    },
  },
  result: [],
  loading: true,
}

export default function (state = defaultState, action) {
  switch (action.type) {
    // 导航列表
    case 'NAVS':
      return {
        ...state,
        navs: action.payload.data
      }

    case 'DATA':
      return { ...state, data: action.payload }

    case 'LODING':
      return { ...state, loading: action.payload }

    case 'CESHI':
      return { ...state, result: action.payload }

    default:
      return state
  }
}
