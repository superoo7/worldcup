const fs = require('fs')
const approve = require('../approve.json')
const v1 = require('../violated1.json')
const v2 = require('../violated2.json')
const v3 = require('../violated3.json')

let a = [{ arr: approve, name: 'approve' }, { arr: v2, name: 'v2' }, { arr: v3, name: 'v3' }]

a.forEach(datas => {
  const store = datas.arr.map(d => `@${d.author}`).join(', ')
  console.log(datas.name)
  fs.writeFileSync(`./${datas.name}.txt`, store, () => {})
  return
})

fs.writeFileSync('./v1.txt', v1.map(datas => `@${datas}`).join(', '), () => {})

const max = Math.max(approve.length, v1.length, v2.length, v3.length)
console.log(max)

let str = 'approve,v1,v2,v3\n'
for (let i = 0; i < max; i++) {
  str += `${gs(approve[i])},${gs(v1[i])},${gs(v2[i])},${gs(v3[i])}\n`
}

fs.writeFileSync('all.csv', str, () => {})

function gs(arr) {
  if (arr === undefined) {
    return ''
  } else if (arr.hasOwnProperty('author')) {
    return arr.author
  } else {
    return arr
  }
}
