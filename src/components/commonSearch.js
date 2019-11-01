import React, { Component } from 'react';

import { Select, Button, DatePicker } from 'antd'
import { connect } from 'dva'

import moment from 'moment'
const ml20 = {
  marginLeft: 20
}
const pt10 = {
  paddingTop: 10
}

@connect(state => ({
  majors: state.common.majors.lists
}), {
  getMoreMajor: () => ({ type: 'common/getMoreMajor' })
})
class CommonSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.props.getMoreMajor()
  }
  render() {
    const { confirm, reset, changeDate,
      getMoreMajor,
      changeMajor, selectMajor, year, majors: majorArr } = this.props

    return (
      <div style={pt10}>
        <DatePicker mode='year'
          onPanelChange={changeDate}
          format="YYYY"
          value={year ? moment(year, 'YYYY') : null} />
        <Select style={{ width: 140, ...ml20 }} value={selectMajor || ''} onChange={changeMajor}
          onPopupScroll={getMoreMajor}
        >
          {
            majorArr.map((item, index) => (
              <Select.Option value={item.label} key={index}>{item.value}</Select.Option>
            ))
          }
        </Select>
        <Button style={ml20} type="primary" onClick={confirm}>确定</Button>
        <Button style={ml20} type="primary" onClick={reset}>重置</Button>
      </div>
    );
  }
}

export default CommonSearch;