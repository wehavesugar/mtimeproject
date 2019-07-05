import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../views/home/index.vue';
import List from '../views/list/index.vue';
import Order from '../views/order/index.vue';
import Mine from '../views/mine/index.vue';
// import Explore from '../views/explore/index.vue';
import One from '../components/one.vue';
Vue.use(VueRouter);

//路由的配置
const router = new VueRouter({
	mode: 'hash', //hash路由就是路由的路径上会有一个#
	//类似于webpack中的rules  路由的配置规则  一个对象就是一个路由的配置
	routes: [
		{
			path: '/',
			redirect: '/home'
		},
		{
			path: '/home',
			component: Home,
			children: [
				{
					path: 'one',
					component: One
				}
			]
		},
		{
			path: '/list',
			component: List
		},
		{
			path: '/order',
			component: Order
		},
		// {
		// 	path: '/explore',
		// 	component: Explore
		// },
		{
			path: '/mine',
			component: Mine
		}
	]
});

export default router;
