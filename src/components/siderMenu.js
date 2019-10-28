import React, { Component } from 'react';
import { connect } from 'dva'
import Link from 'umi/link'
import { navRoutes } from '../../config/routes'
import styles from './siderMenu.less'

import { Menu, Icon, Divider, Tooltip } from 'antd';

const logo = require('../assets/logo.png')
const { SubMenu } = Menu;
@connect(state => ({
  collapsed: state.sider.collapsed
}))
class SiderMenu extends Component {

  render() {
    console.log(this.props)
    const { collapsed, location: { pathname } } = this.props

    return (
      <div className={styles.subMenu}>
        <Tooltip placement="right" title={collapsed ?
          '达成度系统' : ''}>
          <div className={styles.logoCont} >

            <img src={logo} className={styles.logo} alt="" />


            {collapsed ?
              '' : <span>达成度系统</span>
            }
          </div>
        </Tooltip>
        <Divider style={{ margin: 0 }} />
        <Menu
          defaultSelectedKeys={[pathname]}
          mode="inline"
          theme="dark"
          defaultOpenKeys={['0']}
        >
          {navRoutes.map((item, itemIndex) => {
            return (
              <SubMenu
                key={itemIndex}
                title={
                  <span>
                    <Icon className={styles.transIcon} type={item.meta && item.meta.icon} />
                    <span>{item.meta.title}</span>
                  </span>
                }
              >
                {item.routes.map((route, index) => {
                  let routes = null
                  if (route.component) {
                    routes = <Menu.Item key={route.path}>
                      <Link to={{ pathname: route.path, state: { title: route.meta.title } }}>
                        {route.meta.title}
                      </Link>
                    </Menu.Item>
                  }
                  return routes
                })}
              </SubMenu>
            )
          })}
        </Menu>
      </div >
    );
  }
}
export default SiderMenu