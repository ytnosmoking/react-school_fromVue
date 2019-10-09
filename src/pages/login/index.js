import styles from './index.css'
import './index.css'
import React from 'react';
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
  componentWillMount() {
    // const { token } = this.props
    // if (token) {
    //   router.push('/home')
    // }
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const { token, location: { pathname } } = this.props

    const redirectPath = pathname !== '/login' ? pathname : '/home'
    return (
      <React.Fragment>
        {token ? ((<Redirect to={{
          pathname: redirectPath,
        }} />)) : (
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
          )}
      </React.Fragment>
    );
  }
}

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(NormalLoginForm);
export default function (props) {
  return (
    <div className={styles.cont}>
      <WrappedNormalLoginForm location={props.location} />
    </div>
  )
}