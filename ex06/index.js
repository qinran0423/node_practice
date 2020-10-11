const crypto = require('crypto')
const jsonwebtoken = require('jsonwebtoken')
module.exports.createToken = token => {
    const ary = token.split('.')
    if (ary.length !== 3) {
        return
    }

    return {
        getExp: () => {
            // ##BEGIN## 代码已加密
            // 暗号： 贪心算法
            // 没有明确标出sercet,所有猜测和下面的sercet是一样的
            return jsonwebtoken.verify(token, '12345678', (data) => {
                return new Date(data.expiredAt).getTime() / 1000
            })
            // ##END##
        },

        verify: key => {
            const hmac = crypto.createHmac('SHA256', key).update(ary[0]+ '.' +  ary[1]).digest('base64');
            return hmac === ary[2] + '='
            
        }
    }
}
