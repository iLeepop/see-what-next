import App from '../layout/App.js'
import About from '../pages/About/About.js'
import Other from '../pages/Other/Other.js'

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