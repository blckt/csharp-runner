module.exports = (code, instance, method) => {
  return new Promise((resolve, reject) => {
    var spawn = require('child_process').spawn
    const ls = spawn('./codeAnalys/CodeAnalys.exe', [instance, code, method])
    let output = ''
    ls.stdout.on('data', (data) => {
      output += data
    })
    ls.stdout.on('error', err => {
        reject(err)
    })
    ls.on('close', (code) => {
      resolve(JSON.parse(output))
    })
  })
}
