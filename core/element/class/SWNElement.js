import { v1 } from 'uuid'

export class SWNElement extends HTMLElement {
  static cname = 'swn-element'
  swnId
  ref
  renderTime
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
    this.swnId = v1()
    this.setAttribute('swnId', this.swnId)
    // 注册组件信息 暂时舍弃
    // if (this.getAttribute('ref')) {
    //   this.ref = this.getAttribute('ref')
    //   RegistryElement.registry(SWNSlider.cname, this.ref)
    // }
  }
  connectedCallback() {
    this.render()
  }

  disconnectedCallback() {
    console.log('disconnected')
  }
  render() { }
}