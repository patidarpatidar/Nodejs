const express = require('express');

const app = express();
//1.
// app.get('',(req,res)=>{
//     res.send('hello, this is home page')
// });
// app.get('/about',(req,res)=>{
//     res.send('hello, this is about page')
// });



// 2. routing Params request and responce
// app.get('',(req,res)=>{
//     res.send(`hello ${req.query.name}`)
// })

//3. render html and json

// app.get('',(req,res)=>{
//     res.send('<h1>hello html first heading tag...</h1><a href="/jsondata">jsondata</a>')
// })
// app.get('/jsondata',(req,res)=>{
//     res.send([
//         {
//             name:'rajmal',
//             email:'rajmal@gmail.com'
//         },
//         {
//             name:'rajmal1',
//             email:'rajmal1@gmail.com'
//         },
//     ])
// })


// 4. make html folder and load html file
const path = require('path');

const publicDir = path.join(__dirname,'public')
// app.use(express.static(publicDir));
app.listen(8000);

// 5. remove extation like .html

// app.get('',(req,res)=>{
//     res.sendFile(`${publicDir}/home.html`)
// })
// app.get('/about',(req,res)=>{
//     res.sendFile(`${publicDir}/about.html`)
// })
// app.get('/about',(req,res)=>{
//     res.sendFile(`${publicDir}/about.html`)
// })
// app.get('*',(req,res)=>{
//     res.sendFile(`${publicDir}/404.html`)
// })

//6. Template Engine install ejs template package

app.set('view engine','ejs');
// app.get('/profile',(req,res)=>{
//     const user = {
//         name:'rajmal',
//         email:'rajmal@gmail.com',
//     }
//     res.render('profile',{user})
// })

//7. daynamic page....
// app.get('/profile',(req,res)=>{
//     const user = {
//         name:'rajmal',
//         email:'rajmal@gmail.com',
//         skills:['php','react','java']
//     }
//     res.render('profile',{user})
// })

// app.get('/login',(req,res)=>{
//     res.render('login')
// })

//8. middleware in node js how to make and type of middleware

// some time need for change and filter request and responce and chek authentication so we use middleware..

// const reqFilter=(req,res,next)=>{
//     // console.log('request filter')
//     if(!req.query.age){
//         res.send('please provide age')
//     }
//     else{
//         next()
//     }
// }

// app.use(reqFilter);
// app.get('/',(req,res)=>{
//     res.send('hello welcome to home page')
// })

//Q. type of middleware
// 1. application-level middleware
// 2. route-level middleware
// 3. error-handling middleware
// 4. built-in middleware
// 5. third-party middleware


//Q. route-level middleware apply middleware on single Route make middleware in difrent file and apply route in the group of route?

// const reqFilter=(req,res,next)=>{
//     // console.log('request filter')
//     if(!req.query.age){
//         res.send('please provide age')
//     }
//     else{
//         next()
//     }
// }

const reqFilter = require('./middleware')
// app.use(reqFilter);


app.get('/',(req,res)=>{
    res.send('hello welcome to home page')
})
// app.get('/users',reqFilter,(req,res)=>{
//     res.send('hello welcome to users page')
// })
//group of route
const route = express.Router();
route.use(reqFilter)
// route.get('/about',(req,res)=>{
//     res.send('hello welcome to about page')
// })
// route.get('/contact',(req,res)=>{
//     res.send('hello welcome to contact page')
// })
app.use('/',route)

