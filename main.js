import './style.less'
//
import './src/layout/App.js'
import { HistoryRouters } from './core/route/class/HistoryRoute.js'
import { route } from './src/router/router.js'

const App = document.querySelector('#app')
// App.innerHTML = `<swn-app></swn-app>` // 挂载
// const swn_app = document.createElement('swn-app')
// App.appendChild(swn_app)
const historyRouters = new HistoryRouters(route, App)