const fs = require('fs');
const server = require('http').createServer();

// Observer
server.on('request', (req,res)=>{
  // Solution 1
  fs.readFile("../test-file.txt", (err,data)=>{
    if (err) console.log(err);
    res.end(data);
  });
});

// emitter
server.listen(8000, "127.0.0.1", ()=>{
  console.log("Listening...");
});
