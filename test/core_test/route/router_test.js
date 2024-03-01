import { HistoryRouters } from "../../../core/route/class/HistoryRoute.js"

const app = document.querySelector('#app')

const Route = {
  '/': {
    name: 'home',
    component: '<p>Home Page</p>'
  },
  '/about': {
    name: 'about',
    component: '<p>About Page</p>'
  },
  'error': {
    name: 'error',
    component: '<p>404 Page</p>'
  }
}

const TRoute = {
  '/'() {
    app.innerHTML = '<p>Home Page</p>'
  },
  '/about'() {
    app.innerHTML = '<p>About Page<outlet></outlet></p>'
  },
  '/about/auth'() {
    this['/about']()
    document.querySelector('outlet').innerHTML = '<p>Auth Page</p>'
  },
  '/error'() {
    app.innerHTML = '<p>404 Page</p>'
  }
}

const historyRouters = new HistoryRouters(TRoute)

const btn = document.createElement('button')
btn.innerText = 'go to /'
btn.addEventListener('click', (e) => {
  e.preventDefault()
  console.log('/')
  historyRouters.go('/')
})

const btn1 = document.createElement('button')
btn1.innerText = 'go to /about'
btn1.addEventListener('click', (e) => {
  e.preventDefault()
  console.log('about')
  historyRouters.go('/about')
})

const btn3 = document.createElement('button')
btn3.innerText = 'go to /about/auth'
btn3.addEventListener('click', (e) => {
  e.preventDefault()
  console.log('about/auth')
  historyRouters.go('/about/auth')
})

const btn2 = document.createElement('button')
btn2.innerText = 'go to /error'
btn2.addEventListener('click', (e) => {
  e.preventDefault()
  console.log('error')
  historyRouters.go('/error')
})

document.body.appendChild(btn)
document.body.appendChild(btn1)
document.body.appendChild(btn2)
document.body.appendChild(btn3)