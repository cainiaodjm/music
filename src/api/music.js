import axios from './index'
class Music {
    /**
     *
     * @param type
     * @returns {http.ClientRequest | ClientHttp2Stream | never}
     * type:资源类型,对应以下类型,默认为 0 即PC
     * 1 android
     * 2 iphone
     * 3 ipad
     */
    getBanner(type=0){
        return axios.request({
            url:'/banner',
            method:'get',
            params: {
                type:type,
            },
        })
    }
}
export default Music
