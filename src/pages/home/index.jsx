import React from 'react'
import { connect } from 'react-redux'
import { getCeshi } from '@/actions/home'
import './styles.less'

export default @connect(state => {
  return {
    loading: state.home.loading,
  }
}, {
  getCeshi,
})
class Home extends React.PureComponent {
  onClick = () => {
    this.props.getCeshi()
  }

  componentDidMount () {
    // 拿接口的数据
    this.props.getCeshi()
  }

  render () {
    const { loading } = this.props
    // 默认进来 loading true
    // 收到数据 loading false
    // 请求接口 loading true
    // 收到数据 loading false
    
    return (
      <div className="pages-home">
        <h1>{loading && 'loading233333'}</h1>
        <span onClick={this.onClick}>go</span>
      </div>
    )
  }
}
