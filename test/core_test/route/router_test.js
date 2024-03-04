import { HistoryRouters } from "../../../core/route/class/HistoryRoute.js"

const app = document.querySelector('#app')

const Route = {
  '/': {
    name: 'home',
    component: '<p>Home Page</p>'
  },
  '/about': {
    name: 'about',
    component: '<p>About Page<outlet></outlet></p>',
    children: [
      {
        path: '/about/auth',
        name: 'auth',
        component: '<p>Auth Page</p>'
      }
    ]
  },
  '/error': {
    name: 'error',
    component: '<p>404 Page</p>'
  }
}

function ifObject(obj) {
  return Object.keys(obj).length === 0 && obj.constructor === Object
}

function hasChildren(obj) {
  return Object.keys(obj).children !== undefined
}

function BuildRouter(route, root) {
  const troute = {}
  Object.keys(route).forEach(key => {
    troute[key] = () => {
      root.innerHTML = route[key].component
    }
    if (route[key].children) {
      route[key].children.forEach(child => {
        troute[child.path] = () => {
          root.innerHTML = child.component
        }
      })
    }
  })
  return troute
}

// const TRoute = {
//   '/'() {
//     app.innerHTML = '<p>Home Page</p>'
//   },
//   '/about'() {
//     app.innerHTML = '<p>About Page<outlet></outlet></p>'
//   },
//   '/about/auth'() {
//     this['/about']()
//     document.querySelector('outlet').innerHTML = '<p>Auth Page</p>'
//   },
//   '/error'() {
//     app.innerHTML = '<p>404 Page</p>'
//   }
// }

const historyRouters = new HistoryRouters(Route, app)

Object.keys(BuildRouter(Route, app)).forEach(key => {
  let btn = document.createElement('button')
  btn.innerText = `go to ${key}`
  btn.addEventListener('click', (e) => {
    e.preventDefault()
    console.log(key)
    historyRouters.go(key)
  })
  document.body.appendChild(btn)
})