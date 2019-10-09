import React, { Component } from 'react';
import styles from './index.css';
import { Button } from 'antd'
import { connect } from 'dva'

@connect(null, {
  exitSystem: () => ({ type: 'user/exitSystem' })
})
class BasicLayout extends Component {

  render() {
    return (
      <div className={styles.normal}>
        <Button onClick={this.props.exitSystem}>退出</Button>
        <h1 className={styles.title}>Yay! Welcome to umi!</h1>
        {this.props.children}
      </div>
    );
  }
}

export default BasicLayout;
