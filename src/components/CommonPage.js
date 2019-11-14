import React from 'react';
import { Pagination } from 'antd';
const styles = {
  textAlign: 'right',
  padding: '20px 0'
}
const options = ['10', '20', '30', '40']
function CommonPage(props) {
  // console.log(props)
  const { current, size: pageSize, total, pageSizeOptions, changePageSize, changePage } = props

  return (
    <div style={styles} >
      <Pagination current={current}
        onShowSizeChange={changePageSize}
        onChange={changePage}
        pageSize={pageSize / 1} showSizeChanger showQuickJumper showTotal={() => `共${total}条`} pageSizeOptions={pageSizeOptions || options} total={total} />
    </div>
  )
}

export default CommonPage;