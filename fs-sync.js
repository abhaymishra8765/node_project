 
 const fs = require('fs')
 console.log('start')

 const first = fs.readFileSync('./content/first.txt', 'utf-8')
 const second = fs.readFileSync('./content/second.txt', 'utf-8')

 console.log(first, second)

 fs.writeFileSync('./content/result-sync.txt', 
    `here is the result: ${first}, ${second}`,
    {flag: 'a'}
 )

 console.log('done with the task')