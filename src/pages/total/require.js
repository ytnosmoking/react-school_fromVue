import React, { Component } from 'react';
// import styles from './require.css';
import CommonTitle from '@/components/commonTitle'
import CommonSearch from '@/components/CommonSearch'
import { connect } from 'dva'

@connect(state => ({
  lists: state.total.requireInfo.data,
  page: state.total.requireInfo.page
}), {
  getLists: params => ({ type: 'total/getTotalRequire', payload: params })
})
class TotalRequire extends Component {
  constructor(props) {
    super(props)

    this.state = {
      year: '',
      selectMajor: ''
    }
  }

  confrimSearch = () => {
    console.log('confirm search')
    const {
      year: enter_year,
      selectMajor: major_id
    } = this.state
    const { current: page, size: page_size } = this.props.page
    const params = {
      enter_year,
      major_id,
      page,
      page_size
    }
    Object.keys(params).forEach(key => {
      if (!params[key]) {
        delete params[key]
      }
    })
    console.log(this.props)
    this.props.getLists(params)
  }
  resetSearch = () => {
    this.setState({
      year: '',
      selectMajor: ''
    })
  }
  changeDate = (value) => {
    this.setState({
      year: new Date(value).getFullYear()
    })
  }
  changeMajor = (selectMajor) => {
    console.log(selectMajor)
    this.setState({
      selectMajor
    })
  }
  componentDidMount() {
    this.confrimSearch()
  }

  render() {
    console.log(this.props.location)
    // const { title } = this.props.location.state
    const title = this.props.location.state && this.props.location.state.title || ''
    const { year, selectMajor } = this.state
    return (
      <div>
        <CommonTitle title={title} />
        <CommonSearch
          confirm={this.confrimSearch}
          reset={this.resetSearch}
          changeDate={this.changeDate}
          changeMajor={this.changeMajor}
          selectMajor={selectMajor}
          year={year}
        />
      </div>
    )
  }
}

export default TotalRequire