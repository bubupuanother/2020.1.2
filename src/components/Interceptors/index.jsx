
import React from 'react'
import axios from 'axios'
import _ from 'loadsh'
import { withRouter } from 'react-router-dom'
import { loading } from '@/actions/home'

export default @withRouter
class extends React.PureComponent {
  constructor (props) {
    super(props)
    
    let cancelToken = axios.CancelToken

    const cancel = []

    const removePending = config => {
      for(let p in cancel){
        if (cancel[p].u === config.url) {
          cancel[p].f()
        }
      }
    }

    // 请求拦截器 发送一个请求之前
    axios.interceptors.request.use(config => {
      //在一个ajax发送前执行一下取消操作
      removePending(config)
      config.cancelToken = new cancelToken(c => {
        cancel.push({ 
          f: c,
          u: config.url,
        })
      })
      window.store.dispatch(loading(true))
      return config
    }, error => {
      return Promise.reject(error)
    })

    //添加响应拦截器
    axios.interceptors.response.use(response => {
      // code status 200 201 202 203
      window.store.dispatch(loading(false))
      switch (response.data.code) {
        case 200:
          // window.location.href = 'http://localhost:3001/login'
          // this.props.history.push('/login')
      }
      return response

    }, error => {
      switch (_.get(error, 'response.status', '')) {
        case 500:
          this.props.history.push('/defult')
          break;
        
        default:
          break;
      }
      return Promise.reject(error)
    })
  }

  render () {
    return <></>
  }
}
