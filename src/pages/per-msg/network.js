import { request, net } from '../../network'

export function getTableData() {
    return request({
        'data|10-100': [{
            'name': '@cname',
            'sex|1': ['男', '女'],
            'birthday': '@date("yyyy-MM-dd")',
            'area': '@county(true)',
            'phone': /\d{11}/,
            'email': '@email'
        }]
    }, (resolve) => {
        net.get('/api/perMessage').then((data) => {
            resolve(data.data)
        })
    })
}