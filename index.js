const fs = require('fs'); // 1.global core module

// fs.writeFileSync("hello1.txt","hello rajmal");

// console.log(__dirname)
// console.log(__filename);

const http = require('http'); // 2. http core module

// http.createServer((req, res)=>{
//     res.write('<h1>hello i am rajmal</h1>');
//     res.end();
// }).listen(4500);

// const datacontrol=(req,res)=>{
//     res.write("<h1>hello welcome...</h1>");
//     res.end();
// }   
// http.createServer(datacontrol).listen(4500);
//http is handle req and res data we get in server

// 3. add nodemon module
// console.warn('hello hi');
// console.log(100 + 37);
// node js is async lang


//4. create simple basic api

// const userData = require('./data');
// http.createServer((req,res)=>{
//     res.writeHead(200,{'Content-type':'application\json'});
//     // res.write(JSON.stringify({name:'rajmal patidar',email:'raj@gmail.com'}));
//     res.write(JSON.stringify(userData));
//     res.end();

// }).listen(4500)

//5. create file set input from commond line
// const input = process.argv;

// fs.writeFileSync(input[2],input[3]);

//6. create and read multiple file using loop
const path = require('path');
const dirPath = path.join(__dirname,'files');
// for(i=0;i<5;i++){
//     fs.writeFileSync(`${dirPath}/hello${i}`,'create multiple file')
// }

// fs.readdir(dirPath,(err,files)=>{
//     files.forEach((file)=>{
//         console.log(file);
//     })
// });

// Q kya hum c drive ya d drive ka data get kr sakte hai ? 
//ans. nhi kyu ki node js kevel ek perticular folder ke liye server create krta hai to hum kewal usi folder ki dir ko get kr sakte hai.

// 7. crud with file system 
const crudPath = path.join(__dirname,'crud');
const crudFilePath = `${crudPath}/crud.txt`
// fs.writeFileSync(`${crudPath}/crud.txt`,'this is simple text file')
// fs.readFile(`${crudFilePath}`,'utf-8',(err,item)=>{
//     // console.log(item); return buffer data
//     console.log(item); // second utf-8
// })

// fs.appendFile(crudFilePath,'and file name is crud file',(err)=>{
//     if(!err) console.log(' file is updated')
// })

// fs.rename(crudFilePath,`${crudPath}/crudfile.txt`,(err)=>{
//     if(!err) console.log('file name is updated')
// })

// fs.unlinkSync(`${dirPath}/crudfile.txt`);
// Q. buffer = temprally memory need for node perform operation.

//8. asynchronous basics in nodejs
// synchronous - operations takes are performed one at a time
// 1.users -> 2.products -> 3.cites
// asynchronous - second task do not wait to finish first task 

// console.log("start exicution....")
// setTimeout(()=>{
//     console.log("logic exicution....")
// },2000)
console.log("complete exicution....") // so asynchronous is fast...


//Q. drawback in asynchronous ex.

let a = 10;
let b = 0;

// setTimeout(()=>{
//     b = 20;
// },2000)

// console.log(a+b)   //solve this using promisses

//9. handle asynchronous in nodejs;
// let waitingData = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         b = 20;
//         resolve(30)
//     },2000)
// })
// waitingData.then(()=>{
//     console.log(a+b);
// })


// Q. how nodejs works in background....
// 1. call stack 
// 2. node api
// 3. callback queue    // full process cald event Loop.

// 1. call stack is read and register all function and identify which function call first.

// 2. nodeapi handle for all asynchronus task like settimeout

// 3. callback queue take nodeapi function one by one and pass empty stack and stack is execute this....







//<----------------------------------------------------------------------------------------------
//                                        express js
//------------------------------------------------------------------------------------------------>

// express js is web app framework of node we make api esailly..
// const express = require('express');

// const app = express();

