import React, { Component } from 'react';
import { Layout, Button, Icon, Dropdown, Menu, } from 'antd'
import { connect } from 'dva'
import Link from 'umi/link'
import Redirect from 'umi/redirect'
import LoginView from '../pages/login'
import SiderMenu from '../components/siderMenu'
import styles from './index.less';
import { filterRole } from '@/utils/filters'
import { PROJECTNAME } from '@/config/variable'



const { Header, Sider, Content, } = Layout
const logo = require('../assets/logo.png')

@connect(state => ({
  user: state.user,
  collapsed: state.sider.collapsed
}), {
  exitSystem: () => ({ type: 'user/exitSystem' }),
  toggleCollapsed: value => ({ type: 'sider/toggleCollapsed', payload: value })
})
class BasicLayout extends Component {
  render() {
    const { user: { token, role, name }, collapsed, toggleCollapsed, children, location: { pathname } } = this.props
    const userMenu = (
      <Menu>
        <Menu.Item key="1">
          <Link to="/home">
            <Button type="primary" icon="user" >
              基本信息
        </Button>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Button style={{ width: "100%" }} type="danger" icon='logout' onClick={this.props.exitSystem}>退出</Button>
        </Menu.Item>
      </Menu >
    )
    const isLogin = (
      <Layout className={styles.layout}>
        <Sider trigger={null} collapsible collapsed={collapsed} className={styles.sider}>
          {/* this is Sider */}
          <SiderMenu location={this.props.location} />
        </Sider>
        <Layout>
          <Header className={styles.header}>
            <Button type={collapsed ? 'danger' : 'primary'} shape="circle" className={styles.header_collapsed} onClick={() => toggleCollapsed(!collapsed)} >
              {/* <Icon type={collapsed ? 'menu-unfold' : 'menu-fold'} /> */}
              <Icon type={collapsed ? 'disconnect' : 'api'} />
            </Button>
            <span style={{ fontSize: 20 }}>
              {PROJECTNAME}预期学习结果
            </span>
            <div className={styles.user}>
              <img src={logo} className={styles.logo} alt="" />
              <Dropdown overlay={userMenu}>
                <div className={styles.user_info}>
                  <span>{name}</span>
                  <br />
                  <span>{filterRole(role)}</span>
                </div>
              </Dropdown>
              {/* <Button type="danger" onClick={this.props.exitSystem}>退出</Button> */}
            </div>
          </Header>
          <Content className={styles.content}>
            <div className={styles.bread}> this is bread</div>
            {children}
            <div className={styles.crop}> copyright &copy; 武汉好快科技有限公司技术支持</div>
          </Content>
        </Layout>
      </Layout>)
    const noLogin = pathname === '/login' ? <LoginView /> : <Redirect to="/login" />

    const innerCont = token ?
      isLogin : noLogin;
    console.log(this.props)

    return (
      <React.Fragment>
        {innerCont}
      </React.Fragment>

    );
  }
}

export default BasicLayout;
