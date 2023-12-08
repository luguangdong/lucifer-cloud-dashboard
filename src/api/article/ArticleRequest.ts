import Request from '../../utils/http/Http'

const articleRequest = new Request({
    // 网关或其它后端服务地址
    baseURL: import.meta.env.VITE_ARTICLE_URL,
    timeout: 60 * 1000
})

export default articleRequest
