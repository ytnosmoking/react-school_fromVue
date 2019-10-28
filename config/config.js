

// import { totalRoutes, courseRoutes, finishRoutes, dictionaryRoutes,manage } from './routes'
import { navRoutes } from './routes'
export default {
  plugins: [
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      dynamicImport: false,
      title: 'react 测试 school',
      dll: false,
    }
    ]
  ],
  routes: [
    {
      path: '/login', component: './login',
    },
    {
      path: '/',
      component: '../layouts',
      // Routes: ["./routes/PrivateRoute.js"],
      routes: [
        // totalRoutes,
        // courseRoutes,
        // finishRoutes,
        // dictionaryRoutes,
        ...navRoutes,
        {
          path: '/home',
          component: './home'
        },
        {
          path: '/users',
          component: './users'
        },
        {
          path: '/',
          redirect: '/total',
        },
        {
          component: './NotFound'
        }
      ]
    },
  ],

}