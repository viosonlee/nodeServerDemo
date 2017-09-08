var event = require('events');
var eventEmitter = new event.EventEmitter();
eventEmitter.on('onEvent', function () {
    console.log("触发事件")
});
console.log('开始');

/*EventEmitter 定义了一个特殊的事件 error，它包含了错误的语义，我们在遇到 异常的时候通常会触发 error 事件。
当 error 被触发时，EventEmitter 规定如果没有响 应的监听器，Node.js 会把它当作异常，退出程序并输出错误信息。
我们一般要为会触发 error 事件的对象设置监听器，避免遇到错误后整个程序崩溃。例如：*/
// eventEmitter.emit('error');

setTimeout(function () {
    eventEmitter.emit('onEvent')
}, 1000);