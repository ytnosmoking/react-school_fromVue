
import * as types from './const'

// 设置 col
export const getcol = (title = types.GRADE, dataIndex = 'grade', width = 200, obj = {}) => ({
  title,
  dataIndex,
  width,
  ...obj
})
export const common = (obj) => getcol(...obj)
// 设置slot
export const slotScope = (name = 'operation') => ({
  scopedSlots: {
    customRender: name
  }
})
export const enterYear = other => ({ ...getcol('入学年份', 'enterYear'), ...other })
// 设置fixed
export const fixed = (fixed = 'left') => ({ fixed })

export const grade = other => ({ ...getcol(), ...other })
export const major = other => ({ ...getcol(types.MAJOR, 'major'), ...other })
// export const progress = getcol('进度', 'progress')
export const progress = other => ({ ...getcol(types.PROGRESS, 'progress'), ...other })
export const average = other => ({ ...getcol(types.AVERAGE, 'average'), ...other })
export const code = other => ({ ...getcol(types.CODE, 'code'), ...other })
export const name = other => ({ ...getcol(types.NAME, 'name'), ...other })
export const classes = other => ({ ...getcol(types.CLASSES, 'classes'), ...other })

export const operation = other => ({
  ...getcol(types.OPERATION, 'operation', 200, slotScope()),
  ...other
})
export const type = other => ({ ...getcol(types.TYPE, 'type'), ...other })
export const score = other => ({ ...getcol(types.SCORE, 'score'), ...other })
export const course = other => ({ ...getcol(types.COURSE, 'course'), ...other })
export const support = other => ({ ...getcol(types.SUPPORT, 'support'), ...other })
export const semester = other => ({ ...getcol(types.SEMESTER, 'semester'), ...other })
export const teacher = other => ({ ...getcol(types.TEACHER, 'teacher'), ...other })
export const set = other => ({ ...getcol(types.SET, 'set'), ...slotScope('set'), ...other })

export const status = other => ({ ...getcol(types.STATUS, 'status'), ...other })
export const teach = other => ({ ...getcol(types.TEACH, 'teach'), ...other })
export const academy = other => ({ ...getcol(types.ACADEMY, 'academy'), ...other })
export const requireMent = other => ({ ...getcol(types.REQUIREMENT, 'requireMent'), ...other })
export const weight = other => ({ ...getcol(types.REQUIREMENT, 'weight'), ...other })
export const courseNums = other => ({ ...getcol(types.COURSENUMS, 'courseNums', 150), ...other })
export const explain = other => ({ ...getcol(types.EXPLAIN, 'explain'), ...other })
export const role = other => ({ ...getcol(types.ROLE, 'role', 250), ...other })

export const RequireColumns = [
  enterYear({ width: 120, dataIndex: 'enter_year', ...fixed() }),
  major({ width: 120, ...slotScope('major') }),
  progress({ width: 160, ...slotScope('progress') }),
  average({ width: 160, ...slotScope('average') }),
  ...Array(12).fill(1).map((item, index) => ({
    width: 200,
    dataIndex: `achivement_${index + 1}`,
    title: `要求${index + 1}`
  }))
]

export const GraduateColumns = [
  enterYear({ width: 150, dataIndex: 'enter_year', ...fixed() }),
  code({ width: 150, dataIndex: 'student_no', ...fixed() }),
  name({ width: 150, ...fixed() }),
  major({ width: 150 }),
  classes({ width: 150 }),
  ...Array(12).fill(1).map((item, index) => ({
    width: 200,
    dataIndex: `achivement_${index + 1}`,
    title: `要求${index + 1}`
  })),
  operation({ width: 250, ...fixed('right') })
]

export const GraduateInfoColumns = [
  type({ width: 100 }),
  code({ width: 100, title: '课程编号' }),
  course({ width: 120, title: '课程名称' }),
  score({ width: 80 }),
  operation({ width: 150, title: '查看', ...fixed('right') })
]
// 支撑点
export const SupportColumns = [
  enterYear({ width: '25%' }),
  major({ width: '25%' }),
  support({ width: '25%' }),
  operation({ width: '25%', title: '达成度' })
]
// 课程组
export const ClassColumns = [
  name({ width: 150, title: '课程组名称' }),
  name({ width: 150, title: '课程组组长', dataIndex: 'leader' }),
  semester({ width: 200, ...slotScope('semester') }),
  course({ width: 200, title: '课程组课程', dataIndex: 'courses', ...slotScope('courses') }),
  teacher({ width: 200, title: '课程组教师', ...slotScope('teacher') }),
  major({ ...slotScope('major') }),
  average({ width: 200, title: '达成度平均值', ...slotScope('average') })
]

// 目标达成度
export const TargetColumns = [
  semester(),
  enterYear({ width: 100 }),
  major({ width: 100 }),
  code({ width: 150, title: '课程编号' }),
  course(),
  teacher({ width: 100 }),
  average({ width: 150, title: '课程目标平均值', ...slotScope('average') }),
  operation({ width: 150 })
]
// 目标达成度 详情
export const TargetInfoColumns = [
  code({ ...fixed() }),
  name({ ...fixed() }),
  classes({ title: '专业班级', width: 150, ...fixed() })
]

// ------------SET----------------
// 课程管理
export const SetColumns = [
  semester({ dataIndex: 'term', ...slotScope('term') }),
  enterYear({ width: 100 }),
  major({ width: 120, ...slotScope('major') }),
  code({ width: 150, title: '课程编号' }),
  course(slotScope('course')),
  teacher({ width: 150, ...slotScope('teacher') }),
  set({ width: 150, title: '考核设置' }),
  status({ width: 150, title: '上传状态', ...slotScope('status') }),
  operation({ width: 340 })
]

// setEdu
export const SetEduColumns = [
  teach({ ...slotScope('teach') }),
  score({ width: 100, title: '分值', ...slotScope('score') })
]

export const SetScoreColumns = [
  code(),
  name({ width: 100 }),
  classes({ title: '班级' })
]

// ---------------finish-------------------------
export const RequireMentColumns = [
  requireMent({ title: '毕业要求' }),
  {
    title: '具体毕业要求',
    dataIndex: 'info',
    ...slotScope('info')
  },
  operation()
]

export const MarkingLineColums = [
  grade(),
  academy(),
  major(),
  {
    title: '达成度最低指标',
    width: 200,
    dataIndex: 'low'
  },
  operation()

]
// 专业培养方案
export const ProjectColumns = [
  grade(),
  {
    title: '专业',
    // width: 200,
    dataIndex: 'major'
  },
  operation()
]

// 专业培养方案详情
export const ProjectInfoColumns = [
  type({ width: 160 }),
  code({ width: 220, title: '课程编号' }),
  {
    title: '课程名称',
    // width: 200,
    dataIndex: 'name'
  },
  score({ width: 160 }),
  operation()
]

export const FinishSupportColumns = [
  requireMent({ title: '毕业要求', width: 100 }),
  grade(),
  major(),
  support({ title: '支撑点', width: 300, ...slotScope('support') }),
  weight({ width: 100, ...slotScope('weight') }),
  operation()
]

export const FinishSupportInfoColumns = [
  code({ title: '课程编号', width: 100 }),
  course({ title: '支撑课程', width: 300, ...slotScope('course') }),
  score({ width: 100 }),
  weight({ width: 100, title: '权重' }),
  operation()
]

// 课程大纲
export const OutLineColumns = [
  enterYear({ width: 100, ...slotScope('enterYear') }),
  major({ width: 180, ...slotScope('major') }),
  code({ width: 150, title: '课程编号' }),
  course({ width: 240, ...slotScope('course') }),
  { title: '学分', width: 200, dataIndex: 'credit' },
  courseNums(),
  operation({ width: 220 })
]

export const CheckOutLineColumns = [
  { title: '序号', width: 200, dataIndex: 'number' },
  {
    title: '课程目标',
    width: 200,
    dataIndex: 'courseTarget'
  },
  support(slotScope('support')),
  weight({ title: '权重' }),
  operation()
]

export const ReportColums = [
  enterYear({ dataIndex: 'enter_year', ...slotScope('enter_year') }),
  major(slotScope('major')),
  operation()
]

export const CourseColumns = [
  semester({ dataIndex: 'terms', ...slotScope('terms') }),
  enterYear({ width: 100, ...slotScope('enterYear') }),
  major({ width: 300, ...slotScope('major') }),
  code({ title: '课程编号' }),
  course({ width: 300, ...slotScope('course') }),
  teacher({ width: 300, ...slotScope('teacher') }),
  operation()
]

export const CourseSetColumns = [
  name({ title: '课程组名称' }),
  grade({ title: '课程组组长', dataIndex: 'leader' }),
  course({ width: 300, title: '课程组课程', ...slotScope('course') }),
  major({ ...slotScope('major') }),
  teacher({ ...slotScope('teacher') }),
  operation()
]

const isDev = process.env.NODE_ENV === 'development'

// const devUrl = 'http://dcd.test/api' // 本地
const devUrl = 'http://dcd.hooook.com/api' // 测试
// const devUrl = '/develop'
// const devUrl = 'http://dcd.test/api' // 测试
// const proUrl = ''
const proUrl = 'http://dcd.hooook.com/api'
export const baseUrl = isDev ? devUrl : proUrl || devUrl

export const allRole = ['admin', 'teacher', 'group_master', 'professor', 'major_master', 'department_master']
