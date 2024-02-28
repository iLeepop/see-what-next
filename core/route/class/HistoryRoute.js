export class HistoryRouters {
  constructor(routes) {
    this.routes = routes
    this._bindPopState()
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
  _bindPopState() {
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