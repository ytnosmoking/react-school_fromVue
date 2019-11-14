import React from 'react'
import router from 'umi/router';
import { ml20 } from 'utils/tools'
import { Progress, Button } from 'antd';
function setCol(title, dataIndex, key, config = {}) {
  return {
    title,
    dataIndex,
    key,
    width: 200,
    ...config
  }
}
const fixed = true

export const allColumns = {
  require: [
    setCol('入学年份', 'year', 1, {
      fixed
    }),
    setCol('专业', 'major', 2),
    setCol('进度', 'progress', 3, {
      render: txt => {
        return (
          <Progress percent={txt * 100} />
        )
      }
    }),
    setCol('平均值', 'average', 4),
    ...Array.from(Array(12).keys()).map(key => setCol(`要求${key + 1}`, `achivement_${key + 1}`, `${key + 5}`))
  ],
  graduate: [
    setCol('入学年份', 'year', 1, {
      fixed,
      width: 100
    }),
    setCol('学号', 'student_no', 2, {
      fixed,
      width: 150
    }),
    setCol('姓名', 'name', 3, {
      fixed,
      width: 100
    }),
    setCol('专业', 'major', 4, {
      width: 120
    }),
    setCol('专业班级', 'classes', 5),
    ...Array.from(Array(12).keys()).map(key => setCol(`要求${key + 1}`, `achivement_${key + 1}`, `${key + 6}`)),
    setCol('操作', 'control', 18, {
      width: 300,
      render: (control) => {
        return (
          <React.Fragment>
            <Button type="primary" onClick={() => router.push({
              pathname: `/total/graduate/${control.id}`,
              state: {
                fTitle: '达成度统计', title: '学生毕业要求达成度',
                ssTitle: '学生达成度详情'
              },
              query: {
                ...control
              }
            })}>达成度详情</Button>
            <Button type="primary" style={ml20}>雷达图</Button>
          </React.Fragment>
        )
      }
    })
  ]
}