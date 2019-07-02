规范要求：

    目录结构
        /dist >>>>>>>>>>>>>>自动生成不要操作)
        /node_modules >>>>>>>>>>>>>>只在本地用 npm install 生成 不上传代码到 git)
        /src >>>>>>>>>>>>>>生产目录 所有代码和生产文件在此目录下)
        /src/common >>>>>>>>>>>>>>共用组件 如 header navBar footer 等)
        /src/components >>>>>>>>>>>>>>所有其他小组件放在这个目录下)
        /src/router/router.js >>>>>>>>>>>>>>路由文件
        /src/views/子页面文件夹/*.vue >>>>>>>>>>>>>>子页面文件夹 子页面以及其子页面模板
        /src/App.vue App.vue
        /src/main.js main.js
        /static >>>>>>>>>>>>>>所有静态文件 css js font img
        index.html index.html
        package.json package.json 调配此文件代码前一定要和组长沟通
        readme.md
        webpack.config.js >>>>>>>>>>>>>>调配此文件代码前一定要和组长沟通

    语义化命名         》》》包括但不限于文件名 变量名等  避免抽象词 避免冗余修饰词 (例如item下 应为item.id 而不是item.goodsID 或者 item.itemID）  不确定时征询组长
    避免代码冲突 只修改自己分配到的代码部分 其他目录下的代码 一定要沟通过再动

    你没糖小组：
    小组成员
    李阳春（组长） 梅德城  唐薇
