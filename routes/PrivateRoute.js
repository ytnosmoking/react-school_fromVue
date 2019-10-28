import Redirect from 'umi/redirect'
// import { getItem } from '@/utils/tools'
import React, { Component } from 'react';
import { connect } from 'dva';

@connect(
  state => {
    console.log(state)
    return { token: state.user.token }
  }
)
class PrivateRoutes extends Component {

  render() {
    const token = this.props.token
    const { children, location: { pathname } } = this.props
    const isLogin = <div>
      <h3>this is Private Route</h3>
      {children}
    </div>
    const noLogin = <Redirect to={{
      pathname: "/login",
      state: { from: pathname } // 传递重定向地址
    }} />
    return (
      <React.Fragment>
        {
          token ? isLogin : noLogin
        }
      </React.Fragment>
    )
  }
}
export default PrivateRoutes
