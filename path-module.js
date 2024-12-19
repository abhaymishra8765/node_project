const path = require('path')

console.log(path.sep)

const filepath = path.join('/content', '/subfolder', '/text')
console.log(filepath)
console.log(path.basename(filepath));

const absolute = path.resolve(__dirname, 'text.txt')
console.log(absolute)