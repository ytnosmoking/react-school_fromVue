import React from 'react';
import { Button } from 'antd'
import { ml20 } from '@/utils/tools'

function ctrlButton(props) {
  const { func, txt } = props
  return (
    <React.Fragment>
      <Button style={ml20} type="primary" onClick={func}>{txt}</Button>
    </React.Fragment>
  )
}
export default ctrlButton