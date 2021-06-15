//1.引入express
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
//4.鉴定端口启动服务
app.listen(8000,()=>{
    console.log('服务已经启动，8000 端口监听中......');
});
