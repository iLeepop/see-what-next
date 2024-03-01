const router = [
  {
    path: '/',
    name: 'home',
    component: '<p><outlet></outlet></p>',
    children: [
      {
        path: '/1',
        name: '1',
        component: '<p>1</p>'
      },
      {
        path: '/2',
        name: '2',
        component: '<p>2</p>'
      }
    ]
  }
]

const _router = {
  '/'() {
    document.querySelector('#app').innerHTML = '<p><outlet></outlet></p>'
  },
  '/1'() {
    this['/']()
  },
  '/2'() {
    this['/']()
  }
}
