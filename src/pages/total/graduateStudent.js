
import styles from './graduateStudent.css';
import CommonTitle from '@/components/commonTitle'
import router from 'umi/router'
import { Button } from 'antd'
// import CommonTable from '@/components/CommonTable'
// import CommonPage from '@/components/CommonPage'
import React, { Component } from 'react';


class graduateStudent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentWillMount() {
    const { location: { query: {
      id, major, name, student_no, year
    } } } = this.props
    this.setState({
      id, major,
      name,
      student_no,
      year
    })
  }

  render() {
    // console.log(this.props)
    const { route: { meta: { title } }, location: { pathname } } = this.props
    return (
      <div className={styles.studentCont}>
        <CommonTitle title={title} middle={this.state.name + '-' + this.state.student_no}
          end={<Button type="primary" onClick={() => router.go(-1)}>返回</Button>}
        />
      </div>
    );
  }
}

export default graduateStudent;


