//工具类
import axios from 'axios'
export default {
    request(url, data = {}, headers = {}, method = 'get') {
        const requestObj = {
            url,
            method,
            headers,
            timeout: 2000,
        }
        // headers['m-tk'] = 'kongwencM6Y5PJEGJ6HGQSLPZLQO2H7K1U03'

        if (method == 'get') {
            requestObj['params'] = data
        } else {
            requestObj['data'] = data
        }
        return new Promise((resolve, reject) => {
            axios(requestObj).then((response) => {
                    resolve(response.data)
                })
                .catch((error) => {
                    const errorObj = { //自定义错误
                        code: '999',
                        message: '接口调用失败'
                    }
                    const {
                        response
                    } = error
                    if (!response) {
                       
                        reject(errorObj)
                        return
                    }
                    const {
                        data
                    } = response;
                    if (!data || !data.code) {

                        reject(errorObj)
                        return
                    }
                
                    const errorItem = errorConfig.find(err => err.code == data.code)
                  
                    reject(errorItem)
                });
        })
    }

}