import arrow from './arrow'
import entries from './entries'
import promise from './promise'

const bob = { a: 1, b: 2, c: 3 }

console.log(arrow(20))
console.log(entries(bob))
console.log(
  promise(1000, 'Hello!')
    .then(console.log)
    .finally(() => console.log('finished!')),
)
