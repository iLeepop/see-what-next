const fk = [
  {
    path: '/',
    children: [
      {
        path: '/home',
        children: [
          {
            path: '/home/about'
          }
        ]
      }
    ]
  },
  {
    path: '/other',
    children: [
      {
        path: '/other/about'
      }
    ]
  }
]

// const o = new Object()
function BUTest(Robj, o) {
  Robj.forEach(i => {
    o[i.path] = () => {
      console.log(i.path)
    }
    if (i.children) BUTest(i.children, o)
  })
}

function BUro(Robj) {
  let o = {}
  BUTest(Robj, o)
  return o
}

console.log(BUro(fk))