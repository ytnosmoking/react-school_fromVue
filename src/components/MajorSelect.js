import React, { Component } from 'react';

import {Select} from 'antd'

import { connect } from 'dva'
import {ml20} from '@/utils/tools'
@connect(state => ({
  majors: state.common.majors.lists
}), {
  getMoreMajor: () => ({ type: 'common/getMoreMajor' })
})
class MajorSelect extends Component {
  componentDidMount() {
    this.props.getMoreMajor()
  }
  render() {
    const { 
      getMoreMajor,
      changeMajor, selectMajor,majors: majorArr} = this.props
    return (
      <React.Fragment>
        <Select placeholder="专业" style={{ width: 140, ...ml20 }} value={selectMajor || '专业'} onChange={changeMajor}
          onPopupScroll={getMoreMajor}
        >
          {
            majorArr.map((item, index) => (
              <Select.Option value={item.label} key={index}>{item.value}</Select.Option>
            ))
          }
        </Select>
      </React.Fragment>
    )
  }
}

export default MajorSelect