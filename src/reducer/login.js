const initState = {
  token: '',
  ddd: ''
}

export default function (state = initState, action) {
  switch (action.type) {
    // 导航列表
    case 'SAVE_TOKEN':
      return {
        ...state,
        // token: action.payload.data.token
      }
    default:
      return state
  }
}
