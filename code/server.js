//1.引入express
const { request, response } = require('express');
const  express=require('express');
//2.创建应用对象
const app= express();

//3.创建路由规则
//requset 是对请求报文的封装
//response 是对响应报文的封装
app.get('/server',(request,response)=>{
    //设置响应头  设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    //设置响应体
    response.send('HELLO AJAX-2');
});

// app.post('/server',(request,response)=>{
//     //设置响应头  设置允许跨域
//     response.setHeader('Access-Control-Allow-Origin','*');
//     //允许自定义响应头--设置完还不行还要将post改为all，可以接收任意乐星请求
//     response.setHeader('Access-Control-Allow-Headers','*');
//     //设置响应体
//     response.send('HELLO AJAX POST');
// });

//all可以接收任意类型的请求
app.all('/json-server',(request,response)=>{
    //设置响应头  设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    //允许自定义响应头--设置完还不行还要将post改为all，可以接收任意乐星请求
    response.setHeader('Access-Control-Allow-Headers','*');
    //响应一个数据
    const data={
        name:'shuai'
    };
    //对对象进行字符串转换，借助JSON。stringify方法
    let str=JSON.stringify(data);
    //设置响应体  send方法只能接收字符串。
    response.send(str);
});

//针对IE缓存
app.get('/ie',(request,response)=>{
    //设置响应头  设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    //设置响应体
    response.send('HELLO IE-3');
});

//延时响应
app.get('/delay',(request,response)=>{
    //设置响应头  设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    setTimeout(() => {
        //设置响应体
    response.send('延时响应');
    }, 3000);
});

//jQuery 服务
app.all('/jquery-server',(request,response)=>{
    //设置响应头  设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    response.setHeader('Access-Control-Allow-Headers','*');

    const data={name:'shuai'};
    // response.send('Hello jQuery AJAX');
    response.send(JSON.stringify(data));
});

//axios服务
app.all('/axios-server',(request,response)=>{
    //设置响应头  设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    response.setHeader('Access-Control-Allow-Headers','*');

    const data={name:'shuai'};
    // response.send('Hello jQuery AJAX');
    response.send(JSON.stringify(data));
});

//fetch服务
app.all('/fetch-server',(request,response)=>{
    //设置响应头  设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    response.setHeader('Access-Control-Allow-Headers','*');

    const data={name:'shuai'};
    // response.send('Hello jQuery AJAX');
    response.send(JSON.stringify(data));
});

//jsonp服务
app.all('/jsonp-server',(request,response)=>{
    // response.send('jsonp-server');
    // response.send('console.log("jsonp-server")');
    const data={
        name:'秦始皇-祖龙'
    }
    //将数据转化为字符串
    let str=JSON.stringify(data);
    //返回结果  用end是因为end不会加特殊响应头
    response.end(`handle(${str})`);
});

//用户名检测是否存在
app.all('/check-username',(request,response)=>{
    // response.send('jsonp-server');
    // response.send('console.log("jsonp-server")');
    const data={
        exist:1,
        msg:'用户名已经存在'
    }
    //将数据转化为字符串
    let str=JSON.stringify(data);
    //返回结果  用end是因为end不会加特殊响应头
    response.end(`handle(${str})`);
});

//
app.all('/jquery-jsonp-server',(request,response)=>{
    // response.send('jsonp-server');
    // response.send('console.log("jsonp-server")');
    const data={
        name:'shuai',
        city:['天津','北京','秦皇岛']
    }
    //将数据转化为字符串
    let str=JSON.stringify(data);

    //接收callback参数
    let cb=request.query.callback;

    //返回结果  用end是因为end不会加特殊响应头
    response.end(`${cb}(${str})`);
});

//cors服务
app.all('/cors-server',(request,response)=>{
    //设置响应头
    response.setHeader('Access-Control-Allow-Origin','*');
    response.send('hello CORS');
});

//4.鉴定端口启动服务
app.listen(8000,()=>{
    console.log('服务已经启动，8000 端口监听中......');
});
