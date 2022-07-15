import { http } from './index'


export const getList = () => {
    return http.get('/api/list')
}