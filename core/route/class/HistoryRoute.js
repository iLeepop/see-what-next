import { BuildRouter } from '../util/BuildRouter.js'
import SWN from '../../mount/SWN.js'

export class HistoryRouters {
  // 不对 不应该传 root 应该只传 routes
  constructor(routes, root) {
    this.routes = BuildRouter(routes, root)
    this._bind()
  }
  init(path) {
    history.replaceState({ path: path }, null, path)
    this.routes[path] && this.routes[path]()
  }
  route(path, callback) {
    this.routes[path] = callback || function () { }
  }
  go(path) {
    history.pushState({ path: path }, null, path)
    this.routes[path] && this.routes[path]()
  }
  _bind() {
    // 提升到全局变量中
    SWN.$Router = this
    // 直接修改 url 时，根据路由规则初始化
    document.addEventListener('DOMContentLoaded', (e) => {
      this.init(e.target.location.pathname)
    })
    // 监听浏览器前进后退事件
    window.addEventListener('popstate', (e) => {
      const path = e.state && e.state.path
      this.routes[path] && this.routes[path]()
    })
  }
}