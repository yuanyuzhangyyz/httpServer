const  Koa = require("koa");
const app = new Koa();
const staticCache = require("koa-static-cache")
const Router = require("@koa/router")
const router = new Router();
const fs = require("fs")
const {getQuote}= require("./getQuote.js") 

app.use( staticCache('./public', {
    // prefix: '/static',
    dynamic: true,
    gzip: true
}) );

router.get('/quote', async (ctx, next) => {
    let content = getQuote()
    console.log("content",content)
    ctx.body = content;
});

router.get('/', async (ctx, next) => {
    
    ctx.body = "首页--Hello World!";
});

app.use( router.routes() );

app.listen(8888,()=>{
    console.log("server is started at http:localhost:8888");
})




