const {EventEmitter} = require('events')
module.exports = class Connection {
    // ##BEGIN## 代码已加密
    // 暗号： 搜索算法
    constructor() {
        this.emmiter = new EventEmitter()
    }

    onConn(mockfn) {
        this.emmiter.on('connect', val => mockfn(val))
    }

    connection(val) {
        this.emmiter.emit('connect', val)
    }
    // ##END##
}
