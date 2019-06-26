以前没有自己手动去配置过，因为朋友拜托，所以手动配置了一次，因为需求很简单只用到了最基本的。

## 配置前准备
1. 新建项目目录

2. 在项目目录下生成 package.json 文件，根据提示完成创建

```创建package.json
    npm init
```

3. 创建文件夹及文件

    1. public 文件夹用于存放 css 、js 、image 等资源
    
![](https://user-gold-cdn.xitu.io/2019/6/26/16b92dd8adf6782a?w=300&h=264&f=png&s=22647)
    
    2. view 文件夹用于存放页面
    
    3. index.html 为以下代码
    
    ``` html
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Document</title>
    </head>
    <body>
    </body>
    </html>
    ```
    
    4. webpack.conf.js 文件
    
    ```webpack.conf.js
    const path = require('path')
    module.exports = {
        entry: "./public/main.js",
        output: {
            path: path.join(__dirname, 'dist'),
            filename:'javascript/[name].[chunkhash].js'
        },
        mode: "development"
    }
    ```
    
4. 下载依赖

```
    npm install --save-dev webpack
```


