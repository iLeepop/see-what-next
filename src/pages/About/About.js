import { SWNElement } from '../../../core/element/class/SWNElement.js'

class About extends SWNElement {
  static cname = 'swn-about'
  constructor() {
    super()
  }
  connectedCallback() {
    this.render()
  }
  disconnectedCallback() {
    console.log('About disconnectedCallback')
  }
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
  
      .app {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #f08a5d;
  
        font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
        font-size: 20px;
        font-weight: 500;
        line-height: 20px;
  
        user-select: none;
      }
  
      .container {
        height: 20px;
        display: flex;
        flex-direction: row;
        gap: 5px;
        overflow: hidden;
        color: #b83b5e;
      }
  
      .container::before {
        content: '[';
        font-weight: 600;
      }
  
      .container::after {
        content: ']';
        font-weight: 600;
      }
  
      .container::before,
      .container::after {
        color: blueviolet;
        animation: slide 1.8s linear infinite;
      }
  
      .container .scroll-box {
        height: 20px;
        display: flex;
        flex-direction: column;
        color: #f9ed69;
  
        animation: scrollc 10s linear infinite;
        transition: .3s cubic-bezier(0.4, 0, 0.2, 1);
      }
  
      @keyframes slide {
        0% {
          opacity: 10%;
        }
  
        50% {
          opacity: 90%;
        }
  
        100% {
          opacity: 10%;
        }
      }
  
      @keyframes scrollc {
  
        0%,
        12.66%,
        100% {
          transform: translateY(0);
        }
  
        16.66%,
        29.32% {
          transform: translateY(-20px);
        }
  
        33.32%,
        45.98% {
          transform: translateY(-40px);
        }
  
        49.98%,
        62.64% {
          transform: translateY(-60px);
        }
  
        66.64%,
        79.3% {
          transform: translateY(-40px);
        }
  
        83.3%,
        95.96% {
          transform: translateY(-20px);
        }
      }
    </style>
    <div class="app">
    <div class="container">
      Hello
      <div class="scroll-box">
        <span>World!</span>
        <span>iLee!</span>
        <span>Friends!</span>
        <span>KiKiMan!</span>
      </div>
    </div>
  </div>
    `
    }, 500)
  }
}

customElements.define(About.cname, About)

export default About