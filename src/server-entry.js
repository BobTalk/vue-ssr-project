import creatApp from './app.js'
//服务端调用此函数  产生一个新实例
export default (context) => {
    return new Promise((resolve, reject) => {
        let { app, router } = creatApp();
        router.push(context.url)
            // 防止路由中的异步逻辑
        router.onReady(() => {
            resolve(app)
        })

    })
}