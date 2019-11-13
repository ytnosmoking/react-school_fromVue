

// import { totalRoutes, courseRoutes, finishRoutes, dictionaryRoutes,manage } from './routes'
import { navRoutes } from './routes'
import path from 'path'
// console.log(path)
// console.log(__dirname)
const resolve = (src) => {
  return path.resolve(__dirname, '..', src)
}
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
  // webpack
  chainWebpack(config, { webpack }) {
    config.resolve.alias.set('@', resolve('src'))
    config.resolve.alias.set('utils', resolve('src/utils'))
  },

}