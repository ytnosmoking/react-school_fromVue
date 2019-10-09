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
    return (
      <React.Fragment>
        {
          token ? (<div>
            <h3>this is Private Route</h3>
            {children}
          </div>) : (<Redirect to={{
            pathname: "/login",
            state: { from: pathname } // 传递重定向地址
          }} />)
        }
      </React.Fragment>
    )
  }
}
export default PrivateRoutes
// export default ({ children, location: { pathname } }) => {
//   const token = getItem('token')
//   if (!token) {
//     return (
//       <Redirect to={{
//         pathname: "/login",
//         state: { from: pathname } // 传递重定向地址
//       }} />
//     )
//   }
//   return (
//     <div>
//       <h3>this is Private Route</h3>
//       {children}
//     </div>
//   )
// }