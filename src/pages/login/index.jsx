import React from 'react'
import './styles.less'

export default class Login extends React.PureComponent {
  constructor (props) {
    super(props)
    console.log(localStorage.getItem('s1'))
    console.log(sessionStorage.getItem('s2'))
  }

  onClick = () => {
    this.props.history.replace('/login')
  }

  render () {
    return (
      <div className="pages-home">
        Login
        <span onClick={this.onClick}>首页路由</span>
      </div>
    )
  }
}

