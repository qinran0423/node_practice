module.exports.compose = middlewares => {
    return function () {
        return dispatch(0)
        function dispatch(i) {
            // 暗号： 排序
            // ##BEGIN## 代码已加密
            let fn = middlewares[i];
            if (!fn) {
                return Promise.resolve();
            }
            return Promise.resolve(
                fn(function next() {
                    return dispatch(i + 1);
                })
            )
            // ##END##
        }
    }
}
