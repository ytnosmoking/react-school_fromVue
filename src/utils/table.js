import { Progress } from 'antd';
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


  ]


}