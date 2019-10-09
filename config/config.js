export default {
  plugins: [
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      dynamicImport: false,
      title: 'react-school_vue',
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
      Routes: ["./routes/PrivateRoute.js"],
      routes: [
        {
          path: '',
          exact: 'true',
          redirect: '/home'
        },
        {
          path: '/home', component: './home'
        },
        {
          path: '/users', component: './users'
        }
      ]
    },

  ]
}