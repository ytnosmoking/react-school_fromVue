import React, { Component } from 'react';

import CommonTitle from '@/components/commonTitle'
import MajorSelect from '@/components/MajorSelect'
import YearPicker from '@/components/YearPicker'
import CtrlButton from '@/components/CtrlButton'
import CommonTable from '@/components/CommonTable'
import CommonPage from '@/components/CommonPage'
import { allColumns } from 'utils/table'

import { connect } from 'dva'
import { Tooltip, Icon, Input } from 'antd'
import { pt, ml, setWidth, setDisplay } from 'utils/tools'
const pt10 = {
  paddingTop: 10
}


@connect(state => ({
  lists: state.total.requireInfo.data,
  page: state.total.requireInfo.page,
  requireMent: state.finish.requireMent,
  loading: state.total.tableLoading
}), {
  getLists: params => ({ type: 'total/getTotalRequire', payload: params }),
  getRequireMent: () => ({ type: 'finish/getFinishRequire' })
})
class TotalRequire extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      year: '',
      selectMajor: '',
      student_name: '',
      student_no: ''
    }
  }

  confrimSearch = () => {
    const params = this.getParams()
    this.props.getLists(params)
  }
  getParams = () => {
    const {
      year: enter_year,
      selectMajor: major_id,
      student_name,
      student_no
    } = this.state
    const { current: page, size: page_size } = this.props.page
    const params = {
      name: student_name,
      student_no,
      enter_year,
      major_id,
      page,
      page_size,

    }
    Object.keys(params).forEach(key => {
      if (!params[key]) {
        delete params[key]
      }
    })
    return params
  }
  resetSearch = () => {
    this.setState({
      year: '',
      selectMajor: '',
      student_name: '',
      student_no: ''
    })
  }
  changeDate = (value) => {
    console.log(new Date(value).getFullYear())
    this.setState({
      year: new Date(value).getFullYear()
    })
  }
  changeMajor = (selectMajor) => {
    console.log(selectMajor)
    const major = selectMajor==='专业'?'':major
    this.setState({
      selectMajor: major
    })
  }
  onChange = (event, key) => {
    event.stopPropagation()
    console.log(key)
    // console.log(event)
    console.log(event.target.value)
    this.setState({
      [key]: event.target.value
    })
  }

  changePageSize = (current, page) => {
    console.log(current, page)
    const params = this.getParams()
    params.page_size = page
    this.props.getLists(params)
  }
  componentDidMount() {
    const { requireMent, getRequireMent } = this.props
    if (requireMent.length === 0) {
      getRequireMent()
    }
    this.confrimSearch()
  }

  render() {
    console.log(`----render----`)
    const title = this.props.location.state && this.props.location.state.title || ''
    const { year, selectMajor, student_name, student_no } = this.state
    const { page: { current, size, total }, lists: dataSource, requireMent, loading } = this.props
    if (requireMent.length > 0) {
      allColumns.require.forEach((item, index) => {
        if (item.dataIndex.indexOf('achivement_') > -1) {
          item.title = (
            <div>要求{index - 3}<Tooltip title={requireMent[index - 4].content}>
              <Icon type="question-circle" />
            </Tooltip></div>
          )
        }
      })
    }

    return (
      <React.Fragment>
        {/*  <div> */}
        <CommonTitle title={title} />
        <div style={pt10}>
          <YearPicker
            changeDate={this.changeDate}
            year={year} />
          <MajorSelect
            changeMajor={this.changeMajor}
            selectMajor={selectMajor} />
          <Input style={{ ...setWidth(150), ...ml(20) }} placeholder="姓名" value={student_name} onChange={e => this.onChange(e, 'student_name')} />
          <Input style={{ ...setWidth(150), ...ml(20) }} placeholder="学号" value={student_no} onChange={e => this.onChange(e, 'student_no')} />
          <CtrlButton func={this.confrimSearch} txt='确定' />
          <CtrlButton func={this.resetSearch} txt='重置' />
        </div>
        <CommonTable columns={allColumns.require} loading={loading} dataSource={dataSource} styles={{ height: 'calc(100% - 30px - 50px - 80px)' }} />
        <CommonPage current={current} size={size} total={total} changePageSize={this.changePageSize} />
        {/* </div> */}
      </React.Fragment>
    )
  }
}

export default TotalRequire