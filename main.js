import './style.less'
//
import './src/components/slider/slider.js'

document.querySelector('#app').innerHTML = `
  <div id="container" class="">
    <swn-slider pos="left"></swn-slider>
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
      <div id="card" class="out-line">
        
      </div>
    </div>
    <swn-slider pos="right"></swn-slider>
  </div>
`

