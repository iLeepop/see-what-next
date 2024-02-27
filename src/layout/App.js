import { SWNElement } from '../../core/element/class/SWNElement'
import '../components/slider/slider.js'
import '../components/card/card.js'

class App extends SWNElement {
  static cname = 'swn-app'
  constructor() {
    super()
  }
  static get observedAttributes() {
    return []
  }
  attributeChangedCallback(value, oldValue, newValue) { }
  render() {
    // 由于全局样式不能影响 shadow dom 元素，如果在 shadow dom 里面导入样式表，那么就会遇到 build 完的文件名不能与这里对上的情况
    // 看有没有其它更好的方案 可以解决全局样式无法穿透的问题
    this.shadowRoot.innerHTML = `
    <link rel="stylesheet" href="./style.less">
    <div id="container" class="">
      <swn-slider ref="LeftSlider" direct="left" width="50px" motion="30px"></swn-slider>
      <div id="main" class="out-line">
        <div id="tools" class="out-line">
          <ul id="tools-list">
            <li class="out-line">
              
            </li>
            <li class="out-line">
              
            </li>
            <li class="out-line">
              
            </li>
          </ul>
        </div>
        <swn-card width="90vw" height="90vh"></swn-card>
      </div>
      <swn-slider ref="RightSlider" direct="right" width="50px" motion="30px"></swn-slider>
    </div>
  `
  }
}

customElements.define(App.cname, App)

export default App