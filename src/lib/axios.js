import axios from 'axios';
import Config from '@/config';

const baseURL = process.env.NODE_ENV === 'production'
    ? Config.baseUrl.pro
    : Config.baseUrl.dev;
class HttpRequest {
    constructor(baseUrl = baseURL) {
        this.baseUrl = baseUrl;
        this.queue = {};
    }

    getInsideConfig() {
        const config = {
            baseURL: this.baseUrl,
            headers: {
                'content-type': 'application/json',
            },
        };
        return config;
    }

    destroy(url) {
        delete this.queue[url];
        if (!Object.keys(this.queue).length) {
            // Spin.hide()
        }
    }

    interceptors(instance, url) {
        // 请求拦截
        instance.interceptors.request.use((config) => {
            // 添加全局的loading...
            if (!Object.keys(this.queue).length) {
                // Spin.show() // 不建议开启，因为界面不友好
            }
            this.queue[url] = true;



            return config;
        }, error => Promise.reject(error));
        // 响应拦截
        instance.interceptors.response.use((res) => {
            this.destroy(url);
            // const { data, status } = res;
            if (res.headers['content-dispositon']) {
                return {
                    data: res.data,
                    dispositon: res.headers['content-dispositon'],
                };
            }
            return res.data;
        }, (error) => {
            this.destroy(url);
            return Promise.reject(error);
        });
    }

    request(options) {
        const instance = axios.create();
        const option = Object.assign(this.getInsideConfig(), options);
        this.interceptors(instance, option.url);
        return instance(option);
    }
}
export default HttpRequest;
