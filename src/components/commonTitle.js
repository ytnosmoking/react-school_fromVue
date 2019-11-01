import React, { Component } from 'react';
import styles from './commonTitle.less'

class Title extends Component {
  render() {
    const { title } = this.props
    return (
      <div className={styles.title}>
        {title}
      </div>
    )
  }
}

export default Title