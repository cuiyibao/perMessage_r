import asyncComponent from '../utils/asyncComponent'
const Home = asyncComponent(() => import('../pages/home'))
const PerMsg = asyncComponent(() => import('../pages/per-msg'))
const Form = asyncComponent(() => import('../pages/form'))

export const menuConfig = [{
    title: '主页',
    url: '/',
    component: Home
}, {
    title: '列表展示',
    url: '/list',
    children: [{
        title: '表单',
        url: "/list/form",
        component: Form,
    }]
}, {
    title: '个人信息',
    url: 'perMsg',
    component: PerMsg
}]