import React, { Component } from 'react';

import { Table } from 'antd'

const calScroll = (height, colums) => {
  const x = colums.reduce((now, next) => {
    return now + next.width;
  }, 0);
  return {
    x,
    y: (parseFloat(height) - 54) + 'px'

  }
}


class CommonTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scroll: {}
    };
  }
  componentDidMount() {
    Promise.resolve().then(() => {
      this.resizeTable()
    })
    window.addEventListener('resize', this.resizeTable)
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.resizeTable)
  }

  resizeTable = () => {
    const dom = document.getElementsByClassName('selfTable')[0]
    const computedHeight = window.getComputedStyle(dom).height
    console.log(computedHeight)
    const scroll = calScroll(computedHeight, this.props.columns)
    this.setState({
      scroll
    }, () => {
      console.log(1111)
      console.log(this.state.scroll)
    })
  }


  render() {

    const { columns, dataSource, styles, tableSize, loading } = this.props
    const { scroll } = this.state
    return (
      <Table
        className="selfTable"
        style={{ ...baseTable, ...styles }}
        dataSource={dataSource} columns={columns}
        pagination={false}
        bordered={true}
        scroll={scroll}
        loading={loading}
        size={tableSize || 'default'}
      ></Table >
    )

  }
}
const baseTable = {
  // backgroundColor: '#fff',
  marginTop: '20px',
  width: '100%',

}



export default CommonTable;