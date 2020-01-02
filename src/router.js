import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Hoc from '@/pages/hoc'
import Login from '@/pages/login'
import Images from '@/pages/images'
import Baisc from '@/layouts/Baisc'
import { PrivateRoute, Interceptors } from '@@'

export default function Router () {
  return (
    <BrowserRouter>
      <Interceptors />
      <Switch>
        <Route path="/images" component={Images} />
        <Route path="/hoc" component={Hoc} />
        <PrivateRoute path="/login" component={Login} />
        <PrivateRoute path="/" component={Baisc} />
      </Switch>
    </BrowserRouter>
  )
}
