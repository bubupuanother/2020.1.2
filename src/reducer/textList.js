const initState = {
  menuData: [],
}

export default function (state = initState, action) {
  switch (action.type) {
    // 导航列表
    case 'MENU_DATA':
      return {
        ...state,
        menuData: [ ...action.payload.data ]
      }

    default:
      return state
  }
}
