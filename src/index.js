
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/lib/integration/react'
import Router from './router'
import { store } from './store'
import Im from 'immutable'
import '@/utils/rem'
import './index.less'
// import axios from 'axios'
// import qs from 'qs'
 
// axios.post('/api/Home/Apis/sampleLogin', qs.stringify({
//   userName: '333333444444444',
//   passWord: '222222',
// }))

// axios({
//     method: 'post',
//     url: '/api/Home/Apis/samplePut',
//     data: qs.stringify({
//       info: {
//         name: '000000000000',
//         age: 23331,
//         sex: 2332,
//       },
//       token: 'BCYAjkLKEqwi6Y6QPnqggKwCfy49gRAy',
//     }),
//   })
//     .then(res => {
//       axios({
//         method: 'post',
//         url: '/api/Home/Apis/sampleList',
//         data: qs.stringify({
//           limit: 20,
//           page: 1,
//           token: 'BCYAjkLKEqwi6Y6QPnqggKwCfy49gRAy',
//         }),
//         headers: {
//           'Content-Type': 'application/x-www-form-urlencoded'
//         }
//       })
//         .then(res => {
//           axios({
//             method: 'post',
//             url: '/api/Home/Apis/sampleInfo',
//             data: qs.stringify({
//               id: 9,
//               token: 'BCYAjkLKEqwi6Y6QPnqggKwCfy49gRAy',
//             }),
//           })
//         })
//     })

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistStore(store)}>
      <Router />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
)

