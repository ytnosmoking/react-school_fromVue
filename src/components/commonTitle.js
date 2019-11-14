import React, { Component } from 'react';
import styles from './commonTitle.less'

class Title extends Component {
  render() {
    const { title, middle, end } = this.props
    return (
      <div className={styles.title}>
        <span>
          {title}
        </span>
        <span>{middle}</span>
        <span>{end}</span>

      </div>
    )
  }
}

export default Title