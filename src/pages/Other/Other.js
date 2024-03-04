import { SWNElement } from '../../../core/element/class/SWNElement.js'

class Other extends SWNElement {
  static cname = 'swn-other'
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
      .app {
        font-family: 'Montserrat, sans-serif';
        background: #1e293b;
        color: #f8fafc;
        min-width: 100%;
        min-height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        user-select: none;
      }
  
      header {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 1rem;
        text-align: center;
      }
  
      header h1 {
        font-weight: 600;
        font-size: 2rem;
        margin-bottom: 0.5rem;
      }
  
      @media (min-width: 768px) {
        header h1 {
          font-size: 3rem;
        }
      }
  
      .tag-list {
        width: 30rem;
        max-width: 90vw;
        display: flex;
        flex-shrink: 0;
        flex-direction: column;
        gap: 1rem 0;
        position: relative;
        padding: 1.5rem 0;
        overflow: hidden;
      }
  
      .loop-slider .inner {
        display: flex;
        width: max-content;
        animation-name: loop;
        animation-timing-function: linear;
        animation-iteration-count: infinite;
        animation-direction: var(--direction);
        animation-duration: var(--duration);
      }
  
      .tag {
        display: flex;
        align-items: center;
        gap: 0 0.2rem;
        color: #e2e8f0;
        font-size: 0.9rem;
        background-color: #334155;
        border-radius: 0.4rem;
        padding: 0.7rem 1rem;
        margin-right: 1rem;
        box-shadow: 0 0.1rem 0.2rem rgba(0, 0, 0, 0.2),
          0 0.1rem 05rem rgba(0, 0, 0, 0.3),
          0 0.2rem 1.5rem rgba(0, 0, 0, 0.4);
      }
  
      .tag span {
        font-size: 1.2rem;
        color: #64748b;
      }
  
      .fade {
        pointer-events: none;
        background: linear-gradient(90deg, #1e293b, transparent 30%, transparent 70%, #1e293b);
        position: absolute;
        inset: 0;
      }
  
      @keyframes loop {
        0% {
          transform: translateX(0);
        }
  
        100% {
          transform: translateX(-50%);
        }
      }
    </style>
    <div class="app">
    <header>
      <h1>What I Want</h1>
    </header>
    <div class="tag-list">
      <div class="loop-slider" style="--duration:15951ms; --direction: normal;">
        <div class="inner">
          <div class="tag"><span>#</span>Java</div>
          <div class="tag"><span>#</span>WebDev</div>
          <div class="tag"><span>#</span>Docker</div>
          <div class="tag"><span>#</span>CICD</div>
          <div class="tag"><span>#</span>Golang</div>
          <div class="tag"><span>#</span>Java</div>
          <div class="tag"><span>#</span>WebDev</div>
          <div class="tag"><span>#</span>Docker</div>
          <div class="tag"><span>#</span>CICD</div>
          <div class="tag"><span>#</span>Golang</div>
        </div>
      </div>
      <div class="loop-slider" style="--duration:19260ms; --direction: reverse;">
        <div class="inner">
          <div class="tag"><span>#</span>JavaScript</div>
          <div class="tag"><span>#</span>Python</div>
          <div class="tag"><span>#</span>Vue</div>
          <div class="tag"><span>#</span>Node.js</div>
          <div class="tag"><span>#</span>React</div>
          <div class="tag"><span>#</span>JavaScript</div>
          <div class="tag"><span>#</span>Python</div>
          <div class="tag"><span>#</span>Vue</div>
          <div class="tag"><span>#</span>Node.js</div>
          <div class="tag"><span>#</span>React</div>
        </div>
      </div>
      <div class="loop-slider" style="--duration:10449ms; --direction: normal;">
        <div class="inner">
          <div class="tag"><span>#</span>TypeScript</div>
          <div class="tag"><span>#</span>React</div>
          <div class="tag"><span>#</span>Express</div>
          <div class="tag"><span>#</span>Koa</div>
          <div class="tag"><span>#</span>Github</div>
          <div class="tag"><span>#</span>TypeScript</div>
          <div class="tag"><span>#</span>React</div>
          <div class="tag"><span>#</span>Express</div>
          <div class="tag"><span>#</span>Koa</div>
          <div class="tag"><span>#</span>Github</div>
        </div>
      </div>
      <div class="loop-slider" style="--duration:16638ms; --direction: reverse;">
        <div class="inner">
          <div class="tag"><span>#</span>Uniapp</div>
          <div class="tag"><span>#</span>Flutter</div>
          <div class="tag"><span>#</span>HTML5</div>
          <div class="tag"><span>#</span>CSS3</div>
          <div class="tag"><span>#</span>React Native</div>
          <div class="tag"><span>#</span>Uniapp</div>
          <div class="tag"><span>#</span>Flutter</div>
          <div class="tag"><span>#</span>HTML5</div>
          <div class="tag"><span>#</span>CSS3</div>
          <div class="tag"><span>#</span>React Native</div>
        </div>
      </div>
      <div class="loop-slider" style="--duration:15936ms; --direction: normal;">
        <div class="inner">
          <div class="tag"><span>#</span>React</div>
          <div class="tag"><span>#</span>JavaScript</div>
          <div class="tag"><span>#</span>Docker</div>
          <div class="tag"><span>#</span>CICD</div>
          <div class="tag"><span>#</span>Flutter</div>
          <div class="tag"><span>#</span>React</div>
          <div class="tag"><span>#</span>JavaScript</div>
          <div class="tag"><span>#</span>Docker</div>
          <div class="tag"><span>#</span>CICD</div>
          <div class="tag"><span>#</span>Flutter</div>
        </div>
      </div>
      <div class="fade"></div>
    </div>
  </div>
    `
    }, 500)
  }
}

customElements.define(Other.cname, Other)

export default Other