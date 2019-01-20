export default (ms, response) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(response)
    }, ms)
  })
