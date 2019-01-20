import '@babel/polyfill'
import arrow from './arrow'
import entries from './entries'
import myPromise from './promise'

const bob = { a: 1, b: 2, c: 3 }

console.log(arrow(20))
console.log(entries(bob))

const pr = myPromise(500, 'Hello!')
pr.then(console.log).finally(() => console.log('fiji!'))
