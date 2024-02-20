class SWNSlider extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
  }

  connectedCallback() {
    this.render(this.getAttribute('pos'))
  }

  disconnectedCallback() {
    console.log('disconnected')
  }

  static get observedAttributes() {
    return ['pos']
  }

  attributeChangedCallback(value, oldValue, newValue) {
    if (value === 'pos') {
      console.log('render')
      this.render(newValue)
    }
  }

  render(value) {
    this.shadowRoot.innerHTML = `
    <style>
    .swn-slider {
      position: fixed;
      ${value}: -30px;
      width: 50px;
      height: 100vh;
      transition: ${value} .4s cubic-bezier(0.4, 0, 0.2, 1);
  
      cursor: pointer;
      z-index: 9999;
    }
    .swn-slider:hover {
      ${value}: 0;
    }
    .out-line {
      border: 1px solid #000;
    }
  </style>
  <div class="swn-slider out-line"></div>
  `
  }
}

customElements.define('swn-slider', SWNSlider)

export default SWNSlider

