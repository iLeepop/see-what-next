import { v1 } from 'uuid'
//
// import { RegistryRoute } from './HistoryRoute.js'
// 以下代码 屁用没有
// 路由元素 麻烦 没写
export class RouteElement extends HTMLElement {
  static cname = 'swn-element'
  swnId
  ref
  renderTime
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
    this.swnId = v1()
    this.setAttribute('swnId', this.swnId)
  }
  connectedCallback() {
    this.render()
  }

  disconnectedCallback() {
    console.log('disconnected')
  }
  render() { }
}