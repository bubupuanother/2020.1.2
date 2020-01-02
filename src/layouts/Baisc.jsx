import React from 'react'
import { Switch } from 'react-router-dom'
import PrivateRoute from '@@/PrivateRoute'
import Home from '@/pages/home'
import List from '@/pages/list'
import './styles.less'

export default class Basic extends React.Component {
  render () {
    return (
      <div className="layouts-basic">
        <Switch>
          <PrivateRoute path="/textlist/:cid" component={List} />
          <PrivateRoute path="/textlist" component={List} />
          <PrivateRoute path="/" component={Home} />
        </Switch>
      </div>
    )
  }
}
