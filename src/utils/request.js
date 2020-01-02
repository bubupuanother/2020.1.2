import axios from 'axios'
import qs from 'qs'

// let cancelToken = axios.CancelToken

// const cancel = []

// const removePending = config => {
//   for(let p in cancel){
//     if (cancel[p].u === config.url) {
//       cancel[p].f()
//     }
//   }
// }

// // 请求拦截器 发送一个请求之前
// axios.interceptors.request.use(config => {
//   //在一个ajax发送前执行一下取消操作
//   removePending(config)
//   config.cancelToken = new cancelToken(c => {
//     cancel.push({ 
//       f: c,
//       u: config.url,
//     })
//   })
  
//   return config
// }, error => {
//   return Promise.reject(error)
// })

// //添加响应拦截器
// axios.interceptors.response.use(response => {
//   // code status 200 201 202 203
//   switch (response.data.code) {
//     case 200:
//   }
//   return response

// }, error => {
//   switch (_.get(error, 'response.status', '')) {
//     case 500:
//       this.props.history.push('/defult')
//       break;
    
//     default:
//       break;
//   }
//   return Promise.reject(error)
// })

// url 是请求的服务器地址
// payload 参数
export function request (url, payload = {}) {
  return new Promise((resolve, reject) => {
    let result = ''

    if (localStorage.getItem('token')) {
      result = { ...payload, token: localStorage.getItem('token') }
    } else {
      result = payload
    }

    axios({
      method: 'post',
      baseURL: '/api',
      url: url,
      data: result
    })
      .then(response => {
        if (response.data.code === 200) {
          resolve(response.data.result)
        } else {
          reject('') 
        }
      })
      .catch(err => {
        reject(err)
      })
  })
}

export function get (endpoint, payload = {}) {
  return new Promise((resolve, reject) => {
    axios({
      method: 'get',
      baseURL: '/api',
      url: endpoint,
      params: { ...payload, token: '1ec949a15fb709370f' }
    })
    .then(response => {
      if (response.data.code === 200) {
        resolve(response.data)
      } else {
        reject('') 
      }
    })
    .catch(err => {
      reject(err)
    })
  })
}

