import React from 'react';

import { DatePicker } from 'antd'

import moment from 'moment'

function yearPicker(props) {
  const { changeDate, year } = props

  return (
    <React.Fragment>
      <DatePicker mode='year'
        onPanelChange={changeDate}
        format="YYYY"
        value={year ? moment(year, 'YYYY') : null} />
    </React.Fragment>
  )
}



export default yearPicker;