export const GRADE = '年级'
export const CODE = '学号'
export const MAJOR = '专业'
export const PROGRESS = '进度'
export const AVERAGE = '平均值'
export const NAME = '姓名'
export const CLASSES = '专业班级'
export const OPERATION = '操作'
export const TYPE = '类别'
export const SCORE = '学分'
export const COURSE = '课程'
export const SUPPORT = '支撑点'
export const SEMESTER = '学期'
export const TEACHER = '教师'
export const SET = '设置'
export const STATUS = '状态'
export const TEACH = '教学环节'
export const ACADEMY = '学院'
export const REQUIREMENT = '要求'
export const WEIGHT = '权重'
export const COURSENUMS = '课程目标数'
export const EXPLAIN = '说明'
export const ROLE = '角色'

export const type = {}
for (let i = 1; i < 21; i++) {
  type['require' + i] = `需求${i}`
  type['target' + i] = `课程目标${i}`
}

