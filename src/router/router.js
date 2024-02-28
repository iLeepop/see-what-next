const router = [
  {
    path: '/',
    name: 'home',
    component: '<p></p>',
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