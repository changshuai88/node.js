# node.js
# HTTP
HTTP(hypertext transport protocol)协议【超文本传输协议】，协议详细规定了浏览器和万维网服务器之间互相通信的规则。
## 请求报文
重点是格式与参数

行      GET     /s?ie=utf-8     HTTP/1.1
头      host: atguigu.com
        cookie: name=guigu
        content-type: application/x-www-form-urlencoded
        user-Agent: chrome 83
空行
体      username=admin&password=admin

## 响应报文

行      HTTP/1.1  200   ok
头      Content-Type：text/html;charset=utf-8
        Content-length: 2048
        content-encoding: gzip
空行
体      <html>
            <head>
                <body>
                <h1>李世民</h1>
                </body>
            </head>
        </html>

# express框架


# nodemon
可以免除重复开关终端--使更改服务端代码时候变得方便
这里如果安装不成功需要用管理员身份设置
1.管理员身份打开powerShell

2.输入set-ExecutionPolicy RemoteSigned 

# 同源策略
同源策略（same-Origin policy）最早是Netscape公司提出，是浏览器的一种安全策略

url
同源：协议、域名、端口号 必须完全相同
违背同源策略就是跨域

# 跨域

## JSONP

1.JSONP是什么
JSONP(JSON with padding)是一个非官方的跨域解决方案，纯粹凭借程序员的聪明才智开发出来，只支持get请求。
2.JSONP怎么工作的
在网页有一些标签天生具有跨域能里，比如：img link iframe script。

JSONP就是利用script标签的跨域能力来发送请求的。

# CORS
https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Access control CORS
CORS (cross-origin resource sharing)跨域资源共享，CORS是官方的跨域解决方案，它的特点是不需要在用户端做任何特殊的操作，完全在服务器中进行处理，支持get和post请求。跨域资源共享标准新增了一组http首部字段，允许服务器声明那些源站通过浏览器有权限访问哪些资源

1.CORS怎么工作的
CORS是通过设置一个响应头来告诉浏览器，该请求允许跨域，浏览器收到该响应后就会对响应放行
2.CORS使用
主要是服务器端的设置
router.get('/textAJAX',function(req,res){})