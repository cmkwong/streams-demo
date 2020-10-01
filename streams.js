const fs = require('fs');
const server = require('http').createServer();

// Observer
server.on('request', (req,res)=>{
  // Solution 1
  // fs.readFile("../test-file.txt", (err,data)=>{
  //   if (err) console.log(err);
  //   res.end(data);
  // });

  // Solution 2 (better)
  // https://www.udemy.com/course/nodejs-express-mongodb-bootcamp/learn/lecture/15064754?start=291#notes
  // const readable = fs.createReadStream("../test-file.txt");
  // readable.on("data", chunk => {
  //   res.write(chunk);
  // });
  // readable.on("end", ()=>{
  //   res.end();
  // });
  //
  // // Observe the error event
  // readable.on("error", err=>{
  //   console.log(err);
  //   res.statusCode = 500;
  //   res.end("File not found.")
  // });

  // Solution 3 (better better)
  // https://www.udemy.com/course/nodejs-express-mongodb-bootcamp/learn/lecture/15064754?start=722#notes
  const readable = fs.createReadStream("../test-file.txt");
  readable.pipe(res); // readableSource.pipe(writeableDest)

});

// emitter
server.listen(8000, "127.0.0.1", ()=>{
  console.log("Listening...");
});
