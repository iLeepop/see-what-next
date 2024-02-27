import { SWNElement } from '../../../core/element/class/SWNElement'

class SWNSlider extends SWNElement {
  static cname = 'swn-slider'
  direct = 'left'
  width = '50px'
  motion = '30px'
  num = 50
  constructor() {
    super()
  }

  connectedCallback() {
    this.addEventListener('click', () => {
      // 切换主页信息
      this.width = `${this.num += 50}px`
      this.render()
    })
  }

  static get observedAttributes() {
    return ['direct', 'width', 'motion']
  }

  attributeChangedCallback(value, oldValue, newValue) {
    if (newValue === '') {
      return
    }
    if (value === 'direct') {
      this.direct = this.getAttribute('direct')
    }
    if (value === 'width') {
      this.width = this.getAttribute('width')
    }
    if (value === 'motion') {
      this.motion = this.getAttribute('motion')
    }
    this.render()
  }

  render() { // 不确定这么写对不对 避免数据修改过快导致短时间渲染多次
    clearTimeout(this.renderTime)
    this.renderTime = setTimeout(() => {
      this.shadowRoot.innerHTML = `
    <style>
    .swn-slider {
      position: fixed;
      ${this.direct}: -${this.motion};
      width: ${this.width};
      height: 100vh;
      transition: ${this.direct} .4s cubic-bezier(0.4, 0, 0.2, 1);
  
      cursor: pointer;
      z-index: 9999;
    }
    .swn-slider:hover {
      ${this.direct}: 0;
    }
    .out-line {
      border: 1px solid #000;
    }
  </style>
  <div class="swn-slider out-line"></div>
  `
    }, 500)
  }
}

customElements.define(SWNSlider.cname, SWNSlider)

export default SWNSlider

