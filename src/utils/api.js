export const API = {
  EditorPwd: '/teacher/change-password', // 修改密码
  Login: '/teacher/login',
  userInfo: '/teacher/info',
  Require: '/major-graduate-achivements', // 专业毕业要求达成度
  AddRequire: '/total/addrequire', //
  // 学生毕业 达成度
  Graduate: '/student-graduate-achivements',
  GraduateInfo: '/s-t-explain-achivements',

  studentHead: '/explain-header', // 学生支撑点详情头部数据
  Support: 'major-explain-achivements', //  专业支撑点达成度

  InfoRecord: '/total/graduate/id/record',
  InfoEditor: '/total/graduate/id/recordEditor',

  Course: '/group-achivements', // 课程组
  Target: 'total/target',
  SetCourse: 'course/SetCourse',
  TargetAverage: '/training-avg-achivements', // 获取培养方案平均达成度
  TargetId: '/s-target-achivements', // 培养 方案详情
  downCourseTraning: '/s-target-achivement/export', // 培养方案达成度导出
  // ---------课程达成度
  setEdu: '/check-ways', // 教学环节 学分 数据
  setEduHeader: '/check-way/header', // 不分页 教学环节 学分 数据
  setEduCols: '/check-way-targets', // 教学环节设置 考核方式支撑目标占比列表
  setAllTarget: '/check-way-target/batch-save', // 批量更新占比

  CourseScore: '/exam-results', // 考核成绩
  ExportTemplate: '/exam-result/export', // 导出成绩模版
  ImportScoreFile: '/exam-result/import', // 导入学生成绩
  // ---------课程达成度

  // 毕业目标设置
  FinishRequireMent: '/graduate-requirements',

  MarkingLine: '/graduate-standards',
  // 专业培养方案
  finishProjectList: '/training-plan-entries', // 培养列表
  finishProject: '/training-plans', // 支撑点
  finishProjectData: '/training-plan-entries', // 支撑点

  finishSupport: '/graduate-explains', // 专业支撑点

  supportCourses: '/graduate-explain-training-plans', // 支撑课程

  outLine: '/targets', // 课程大纲
  outLineSupport: '/target/select-options', // 支撑点数据源

  finishCourse: '/training-plans', // 课程分配管理
  assignTeacher: id => `/training-plans/${id}/assign-teachers`,

  finishCourseGroup: '/groups', // 课程组管理

  finishReportInfo: '/training-plan-explains', // 支撑点报表
  downloadReport: '/training-plan-explains/download', // 支撑点报表下载
  // -----基本元素------
  departments: '/departments', // 学院
  majors: '/majors', // 专业
  classes: '/classes', // 班级
  terms: '/terms', // 学期
  courses: '/course-types', // 课程类别
  // ---------基本信息管理----------
  info_teacher: '/teachers',
  info_student: '/students',
  info_course: '/courses',
  searchStudent: '/whut-students', // 搜索学生
  exportSomeStudents: '/student/batch-store', // 批量添加学生
  resetCode: '/teacher/reset-password', // 重置密码
  // 记录
  getRecord: '/import-records', // 查看导入记录

  // upload xls
  studentImport: '/student/import',
  courseImport: '/course/import',
  studentScoreImport: '/exam-result/import', // 导入学生成绩
  studentScoreExport: '/exam-result/export', // 导出学生成绩

  // 教学大纲
  editorOutLine: '/training-plan-outline' // 查看 更改 教学大纲

}
