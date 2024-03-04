import { v1 } from 'uuid'
//
import { RegistryElement } from '../registryElement.js'

export class SWNElement extends HTMLElement {
  static cname = 'swn-element'
  swnId
  ref
  renderTime
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })

    /* 
        因为如果使用 createElement 会导致报错无法在构造时设置属性
        也就是说在 constructor 中避免使用 setAttribute
    */

    // this.swnId = v1()
    // this.setAttribute('swnId', this.swnId)

    // 注册组件信息 暂时舍弃
    // 0228:又捡回来了
    if (this.getAttribute('ref')) {
      this.ref = this.getAttribute('ref')
      RegistryElement.registry(this, this.ref)
    }
  }
  connectedCallback() {
    this.render()
  }

  disconnectedCallback() {
    console.log('disconnected')
  }
  render() { }
}