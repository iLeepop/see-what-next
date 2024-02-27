import { SWNElement } from '../../../core/element/class/SWNElement'

class SWNCard extends SWNElement {
  static cname = 'swn-card'
  width = '200px'
  height = '100px'
  constructor() {
    super()
  }

  static get observedAttributes() {
    return ['width', 'height']
  }

  attributeChangedCallback(value, oldValue, newValue) {
    if (newValue === '') {
      return
    }
    if (value === 'width') {
      this.width = this.getAttribute('width')
    }
    if (value === 'height') {
      this.height = this.getAttribute('height')
    }
    this.render()
  }

  render() {
    clearTimeout(this.renderTime)
    this.renderTime = setTimeout(() => {
      this.shadowRoot.innerHTML = `
      <style>
      #card {
        width: ${this.width};
        height: ${this.height};
      }
      .out-line {
        border: 1px solid #000;
      }
    </style>
    <div id="card" class="out-line"></div>
    `
    }, 500)
  }
}

customElements.define(SWNCard.cname, SWNCard)

export default SWNCard