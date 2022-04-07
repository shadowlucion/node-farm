const fs = require('fs')
const path = require('path')
const url = require('url')
const http = require('http')


// reading data 

// single-card.html contains single card
// base.html is the main main layout
// single_base.html contains single file.
const data = JSON.parse(fs.readFileSync(`${__dirname}/dev-data/data.json`,'utf-8'))
const single_base = fs.readFileSync(`${__dirname}/templates/single-base.html`,'utf-8')
const base = fs.readFileSync(`${__dirname}/templates/base.html`,'utf-8')
const single_card = fs.readFileSync(`${__dirname}/templates/single-card.html`,'utf-8')
const replacement = require('./utils/replacement')



const server = http.createServer((req,res)=>{
    const {query,pathname} = url.parse(req.url,true)
    if(pathname==='/' || pathname ==='/overview'){
        const products = data.map((obj) => replacement(obj,single_card)).join('')
        const output =  base.replace(/{%PRODUCT_CARDS%}/g,products)
        res.writeHead(200,{
            'content-type':'text/html',
        })
        console.log(output);
        res.end(output);
    }
    else if(pathname==='/product'){
        const currentObj = data.find(el=> Number(el.id) === Number(query.id))
        
        const output = replacement(currentObj,single_base)
        res.writeHead(200,{
            'content-type':'text/html',
        })
        res.end(output)
    }else{
        // 404- page not found
        res.writeHead(404,{
            'content-type':'text/html',
            'my-own-header':'hello world'
        })
        res.end('<h1>Page Not Found</h1>')
    }
})  


server.listen(3000,()=> console.log('server is listening on port 3000'))
