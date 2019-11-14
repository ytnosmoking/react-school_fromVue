import React, { Component } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group'
// import router from 'umi/router'
import CommonTitle from '@/components/commonTitle'
import MajorSelect from '@/components/MajorSelect'
import YearPicker from '@/components/YearPicker'
import CtrlButton from '@/components/CtrlButton'
import CommonTable from '@/components/CommonTable'
import CommonPage from '@/components/CommonPage'
import { allColumns } from 'utils/table'

import { connect } from 'dva'
import { Tooltip, Icon, Input } from 'antd'
import { pt, ml, setWidth } from 'utils/tools'




@connect(state => ({
  lists: state.total.graduateInfo.data,
  page: state.total.graduateInfo.page,
  requireMent: state.finish.requireMent,
  loading: state.total.tableLoading
}), {
  getLists: params => ({ type: 'total/getTotalGraduate', payload: params }),
  getRequireMent: () => ({ type: 'finish/getFinishRequire' })
})
class TotalGraduate extends Component {
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
    // console.log(new Date(value).getFullYear())
    this.setState({
      year: new Date(value).getFullYear()
    })
  }
  changeMajor = (selectMajor) => {
    // console.log(selectMajor)
    const major = selectMajor === '专业' ? '' : selectMajor
    this.setState({
      selectMajor: major
    })
  }
  onChange = (event, key) => {
    event.stopPropagation()
    // console.log(key)
    // console.log(event.target.value)
    this.setState({
      [key]: event.target.value
    })
  }

  changePageSize = (current, page) => {
    // console.log(current, page)
    const params = this.getParams()
    params.page_size = page
    this.props.getLists(params)
  }
  changePage = (current) => {
    const params = this.getParams()
    params.page = current
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
    // console.log(this.props)
    const title = this.props.location.state && this.props.location.state.title || ''
    const { year, selectMajor, student_name, student_no } = this.state
    const { children, page: { current, size, total }, lists: dataSource, requireMent, loading } = this.props
    if (requireMent.length > 0) {
      allColumns.graduate.forEach((item, index) => {
        if (item.dataIndex.indexOf('achivement_') > -1) {
          item.title = (
            <div>要求{index - 4}<Tooltip title={requireMent[index - 5].content}>
              <Icon type="question-circle" />
            </Tooltip></div>
          )
        }
      })
    }

    const { location: { state: { ssTitle }, pathname } } = children.props
    console.log(children)
    return (

      < React.Fragment >
        <CommonTitle title={title} />
        <div style={pt(10)}>
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
        <CommonTable columns={allColumns.graduate} loading={loading} dataSource={dataSource} styles={{ height: 'calc(100% - 30px - 50px - 80px)' }} />
        <CommonPage current={current} size={size} total={total} changePageSize={this.changePageSize} changePage={this.changePage} />

        {ssTitle ? (
          <TransitionGroup>
            <CSSTransition key={pathname} classNames="star" timeout={300}>
              {children}
            </CSSTransition>
          </TransitionGroup>
        ) : ''}

        {/* </div> */}
      </React.Fragment >
    )
  }
}

export default TotalGraduate