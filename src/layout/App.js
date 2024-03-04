import { SWNElement } from '../../core/element/class/SWNElement'
import '../components/slider/slider.js'
import '../components/card/card.js'

class App extends SWNElement {
  time = new Date()
  static cname = 'swn-app'
  constructor() {
    super()
  }

  connectedCallback() {
    console.log('App connect')
    this.render()
    // 给其它组件绑定监听事件 render() 后会导致监听失败
    // const LeftSlider = this.shadowRoot.querySelector('[ref="LeftSlider"]')
    // const RightSlider = this.shadowRoot.querySelector('[ref="RightSlider"]')
    // RightSlider.addEventListener('click', () => {
    //   this.time = new Date()
    //   this.render()
    // })
  }

  static get observedAttributes() {
    return []
  }
  attributeChangedCallback(value, oldValue, newValue) { }
  render() {
    // 由于全局样式不能影响 shadow dom 元素，如果在 shadow dom 里面导入样式表，那么就会遇到 build 完的文件名不能与这里对上的情况
    // 看有没有其它更好的方案 可以解决全局样式无法穿透的问题
    this.shadowRoot.innerHTML = `
    <style>
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      #container {
        position: relative;
        width: 100%;
        height: 100vh;
      }
      
      #container #main {
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
      }
      
      #container #main #tools {
        position: absolute;
        right: 4.9vw;
        top: 4.9vh;
        width: max-content;
        z-index: 1001;
      }
      
      #container #main #tools #tools-list {
        display: flex;
        flex-direction: row;
        gap: 5px;
        padding: 5px;
      }
      
      #container #main #tools #tools-list li {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 20px;
        height: 20px;
        cursor: pointer;
      }
      
      #container #main #card {
        position: absolute;
        width: 90%;
        height: 90%;
      }

      .out-line {
        border: 1px solid #000;
      }
    </style>
    <div id="container" class="">
      <swn-slider ref="LeftSlider" direct="left" width="50px" motion="30px"></swn-slider>
      <div id="main" class="out-line">
        <div id="tools" class="out-line">
          <ul id="tools-list">
            <li style="background-color: red;" class="out-line">
              
            </li>
            <li style="background-color: yellow;" class="out-line">
              
            </li>
            <li style="background-color: green;" class="out-line">
              
            </li>
          </ul>
        </div>
        <swn-card ref="MainCard" width="90vw" height="90vh">
        </swn-card>
      </div>
      <swn-slider ref="RightSlider" direct="right" width="50px" motion="30px"></swn-slider>
    </div>
  `
  }
}

customElements.define(App.cname, App)

export default App