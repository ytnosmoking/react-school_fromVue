export const totalRoutes = {
  path: '/total',
  meta: {
    icon: 'apple',
    title: '达成度统计'
  },
  routes: [
    {
      path: '/total',
      redirect: '/total/require'
    },
    {
      path: '/total/require',
      meta: {
        title: '达成度统计-毕业要求'
      },
      component: './total/require'
    },
    {
      path: '/total/graduate',
      meta: {
        title: '学生毕业要求达成度'
      },
      component: './total/graduate',
      routes: [
        {
          path: ':id',
          meta: {
            title: '学生达成度详情'
          },
          component: './total/graduateStudent',
        }
      ]
    },
    {
      path: '/total/support',
      meta: {
        title: '达成度统计-支撑点'
      },
      component: './total/support'
    },
    {
      path: '/total/courses',
      meta: {
        title: '达成度统计-课程组'
      },
      component: './total/courses'
    },
  ],
}

export const courseRoutes = {
  path: '/course',
  meta: {
    icon: 'chrome',
    title: '课程达成度'
  },
  routes: [
    {
      path: '/course',
      redirect: '/course/manage'
    },
    {
      path: '/course/manage',
      meta: {
        title: '课程管理'
      },
      component: './course/manage'
    },
    {
      path: '/course/target',
      meta: {
        title: '课程目标达成度'
      },
      component: './course/target'
    },
  ],
}

export const finishRoutes = {
  path: '/finish',
  meta: {
    icon: 'github',
    title: '毕业目标设置'
  },
  routes: [
    {
      path: '/finish',
      redirect: '/finish/require'
    },
    {
      path: '/finish/require',
      meta: {
        title: '毕业要求'
      },
      component: './finish/require'
    },
    {
      path: '/finish/line',
      meta: {
        title: '毕业目标达标线'
      },
      component: './finish/line'
    },
    {
      path: '/finish/project',
      meta: {
        title: '专业培养方案'
      },
      component: './finish/project'
    },
    {
      path: '/finish/support',
      meta: {
        title: '专业支撑点'
      },
      component: './finish/support'
    },
    {
      path: '/finish/outLine',
      meta: {
        title: '课程大纲'
      },
      component: './finish/outLine'
    },
    {
      path: '/finish/table',
      meta: {
        title: '实现矩阵详表'
      },
      component: './finish/table'
    },
    {
      path: '/finish/assignment',
      meta: {
        title: '课程分配'
      },
      component: './finish/assignment'
    },
    {
      path: '/finish/manage',
      meta: {
        title: '课程组管理'
      },
      component: './finish/manage'
    },
  ],
}

export const dictionaryRoutes = {
  path: '/dictionary',
  meta: {
    icon: 'google',
    title: '字典管理'
  },
  routes: [
    {
      path: '/dictionary',
      redirect: '/dictionary/college'
    },
    {
      path: '/dictionary/college',
      meta: {
        title: '学院'
      },
      component: './dictionary/college'
    },
    {
      path: '/dictionary/major',
      meta: {
        title: '专业'
      },
      component: './dictionary/major'
    },
    {
      path: '/dictionary/classes',
      meta: {
        title: '专业班级'
      },
      component: './dictionary/classes'
    },
    {
      path: '/dictionary/semester',
      meta: {
        title: '学期'
      },
      component: './dictionary/semester'
    },
    {
      path: '/dictionary/courseType',
      meta: {
        title: '课程类别'
      },
      component: './dictionary/courseType'
    },
  ],
}

export const manageRoutes = {
  path: '/manage',
  meta: {
    icon: 'zhihu',
    title: '基本信息管理'
  },
  routes: [
    {
      path: '/manage',
      redirect: '/manage/course'
    },
    {
      path: '/manage/course',
      meta: {
        title: '课程管理'
      },
      component: './manage/course'
    },
    {
      path: '/manage/teacher',
      meta: {
        title: '教师管理'
      },
      component: './manage/teacher'
    },
    {
      path: '/manage/student',
      meta: {
        title: '学生管理'
      },
      component: './manage/student'
    },

  ],
}

export const recordRoutes = {
  path: '/record',
  meta: {
    icon: 'windows',
    title: '记录'
  },
  routes: [
    {
      path: '/record',
      redirect: '/record/upload'
    },
    {
      path: '/record/upload',
      meta: {
        title: '上次记录'
      },
      component: './record/upload'
    },
  ],
}




export const navRoutes = [
  totalRoutes,
  courseRoutes,
  finishRoutes,
  dictionaryRoutes,
  manageRoutes,
  recordRoutes
]