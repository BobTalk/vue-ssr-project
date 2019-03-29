import creatApp from './app.js'
//服务端调用此函数  产生一个新实例
export default () => {
    let { app } = creatApp();
    return app
}