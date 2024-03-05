import App from '../layout/App.js'
import About from '../pages/About/About.js'
import Other from '../pages/Other/Other.js'

// 路由结构错了 应该是个数组 方便写递归
export const route = {
  '/': {
    name: 'home',
    component: App,
    children: [
      {
        '/other': {
          name: 'other',
          component: Other
        },
      },
      {
        '/about': {
          name: 'about',
          component: About
        }
      }
    ]
  },
  '/error': {
    name: 'error',
    element: '<p>404 Page</p>'
  }
}