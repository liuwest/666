import VueRouter from 'vue-router'

//引入组件
import Index from '../pages'
import Home from '../pages/home/home'
import Login from '../pages/login/login'
import Register from '../pages/register/register'
import Center from '../pages/center/center'
import Messages from '../pages/messages/list'
import Storeup from '../pages/storeup/list'
import News from '../pages/news/news-list'
import NewsDetail from '../pages/news/news-detail'
import yonghuList from '../pages/yonghu/list'
import yonghuDetail from '../pages/yonghu/detail'
import yonghuAdd from '../pages/yonghu/add'
import xiangmufenleiList from '../pages/xiangmufenlei/list'
import xiangmufenleiDetail from '../pages/xiangmufenlei/detail'
import xiangmufenleiAdd from '../pages/xiangmufenlei/add'
import fuwuxiangmuList from '../pages/fuwuxiangmu/list'
import fuwuxiangmuDetail from '../pages/fuwuxiangmu/detail'
import fuwuxiangmuAdd from '../pages/fuwuxiangmu/add'
import huodongleixingList from '../pages/huodongleixing/list'
import huodongleixingDetail from '../pages/huodongleixing/detail'
import huodongleixingAdd from '../pages/huodongleixing/add'
import zhiyuanhuodongList from '../pages/zhiyuanhuodong/list'
import zhiyuanhuodongDetail from '../pages/zhiyuanhuodong/detail'
import zhiyuanhuodongAdd from '../pages/zhiyuanhuodong/add'
import youxiuzhiyuanzheList from '../pages/youxiuzhiyuanzhe/list'
import youxiuzhiyuanzheDetail from '../pages/youxiuzhiyuanzhe/detail'
import youxiuzhiyuanzheAdd from '../pages/youxiuzhiyuanzhe/add'
import shenqingjiaruList from '../pages/shenqingjiaru/list'
import shenqingjiaruDetail from '../pages/shenqingjiaru/detail'
import shenqingjiaruAdd from '../pages/shenqingjiaru/add'
import aboutusList from '../pages/aboutus/list'
import aboutusDetail from '../pages/aboutus/detail'
import aboutusAdd from '../pages/aboutus/add'

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
	return originalPush.call(this, location).catch(err => err)
}

//配置路由
export default new VueRouter({
	routes:[
		{
      path: '/',
      redirect: '/index/home'
    },
		{
			path: '/index',
			component: Index,
			children:[
				{
					path: 'home',
					component: Home
				},
				{
					path: 'center',
					component: Center,
				},
				{
					path: 'messages',
					component: Messages
				},
				{
					path: 'storeup',
					component: Storeup
				},
				{
					path: 'news',
					component: News
				},
				{
					path: 'newsDetail',
					component: NewsDetail
				},
				{
					path: 'yonghu',
					component: yonghuList
				},
				{
					path: 'yonghuDetail',
					component: yonghuDetail
				},
				{
					path: 'yonghuAdd',
					component: yonghuAdd
				},
				{
					path: 'xiangmufenlei',
					component: xiangmufenleiList
				},
				{
					path: 'xiangmufenleiDetail',
					component: xiangmufenleiDetail
				},
				{
					path: 'xiangmufenleiAdd',
					component: xiangmufenleiAdd
				},
				{
					path: 'fuwuxiangmu',
					component: fuwuxiangmuList
				},
				{
					path: 'fuwuxiangmuDetail',
					component: fuwuxiangmuDetail
				},
				{
					path: 'fuwuxiangmuAdd',
					component: fuwuxiangmuAdd
				},
				{
					path: 'huodongleixing',
					component: huodongleixingList
				},
				{
					path: 'huodongleixingDetail',
					component: huodongleixingDetail
				},
				{
					path: 'huodongleixingAdd',
					component: huodongleixingAdd
				},
				{
					path: 'zhiyuanhuodong',
					component: zhiyuanhuodongList
				},
				{
					path: 'zhiyuanhuodongDetail',
					component: zhiyuanhuodongDetail
				},
				{
					path: 'zhiyuanhuodongAdd',
					component: zhiyuanhuodongAdd
				},
				{
					path: 'youxiuzhiyuanzhe',
					component: youxiuzhiyuanzheList
				},
				{
					path: 'youxiuzhiyuanzheDetail',
					component: youxiuzhiyuanzheDetail
				},
				{
					path: 'youxiuzhiyuanzheAdd',
					component: youxiuzhiyuanzheAdd
				},
				{
					path: 'shenqingjiaru',
					component: shenqingjiaruList
				},
				{
					path: 'shenqingjiaruDetail',
					component: shenqingjiaruDetail
				},
				{
					path: 'shenqingjiaruAdd',
					component: shenqingjiaruAdd
				},
				{
					path: 'aboutus',
					component: aboutusList
				},
				{
					path: 'aboutusDetail',
					component: aboutusDetail
				},
				{
					path: 'aboutusAdd',
					component: aboutusAdd
				},
			]
		},
		{
			path: '/login',
			component: Login
		},
		{
			path: '/register',
			component: Register
		},
	]
})
