import './style.less'
//
import './src/layout/App.js'
import './src/components/slider/slider.js'
import { RegistryElement } from './core/element/registryElement.js'
import { StorageTree } from './core/element/storageTree.js'

const App = document.querySelector('#app')
App.innerHTML = `<swn-app></swn-app>` // 挂载
const children = App.children
for (let i = 0; i < children.length; i++) {
  if (children[i].tagName.match(/^swn-/i)) console.log('oh!')
}

StorageTree.treeset(App)
