export const filterRole = role => {
  if (role === 'teacher') {
    return '老师'
  } else if (role === 'major_master') {
    return '主任'
  } else if (role === 'professor') {
    return '教授'
  } else if (role === 'group_master') {
    return '组长'
  } else if (role === 'department_master') {
    return '院长'
  } else if (role === 'admin') {
    return '管理员'
  } else {
    return ''
  }
}