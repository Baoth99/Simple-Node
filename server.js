const http = require('http')

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
async function main() {
  // while(true) {
  //   console.log('Containers rule!');
  //   await sleep(5000);
  // }
  const server = http.createServer((req, res) => {
  console.log(req.url)
  res.end('Udacity !!!!!')
  })
  server.listen(80)
}

main();
