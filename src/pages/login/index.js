import styles from './index.css'
import './index.css'
import React, { Component } from 'react';
import { connect } from 'dva'
import { Form, Icon, Input, Button } from 'antd'

import Redirect from 'umi/redirect'

@connect(state => ({
  token: state.user.token
}))
class NormalLoginForm extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.dispatch({ type: 'user/login', payload: values })
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div >
        <img src={"/imgs/school.png"} alt="" className={styles.logo} />
        <Form onSubmit={this.handleSubmit} className={styles['login-form']}>

          <Form.Item>
            {getFieldDecorator('teacher_no', {
              rules: [{ required: true, message: '输入用户名' }],
            })(
              <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="Username"
              />,
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: '输入密码!' }],
            })(
              <Input
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                type="password"
                placeholder="Password"
              />,
            )}
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className={styles['login-form-button']}>
              Log in
          </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

// 登录表单
const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(NormalLoginForm);

@connect(state => ({
  token: state.user.token
}))
class Login extends Component {
  render() {
    const { token, location } = this.props
    console.log(this.props)
    return (
      // 如果 有token  跳转至home   没有token 指向  login
      <React.Fragment>
        {token ?
          <Redirect to={{ pathname: '/' }}></Redirect> : (<div className={styles.cont}>
            <WrappedNormalLoginForm location={location} />
          </div>)
        }
      </React.Fragment>
    )
  }
}
export default Login
