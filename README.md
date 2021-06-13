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
