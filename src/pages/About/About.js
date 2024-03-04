import { SWNElement } from '../../../core/element/class/SWNElement.js'

class About extends SWNElement {
  static cname = 'swn-about'
  constructor() {
    super()
  }
  connectedCallback() {
    this.render()
  }
  disconnectedCallback() { }
  render() {
    clearTimeout(this.renderTime)
    this.renderTime = setTimeout(() => {
      this.shadowRoot.innerHTML = `
      <style>
        * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
        .about {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          height: 100%;
          font-size: 20px;
          background-color: skyblue;
        }
    </style>
    <div class="about">
        <h1>Hello SWN!</h1>
    </div>
    `
    }, 500)
  }
}

customElements.define(About.cname, About)

export default About