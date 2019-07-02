import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../views/home.vue';
import List from '../views/list.vue';
import Order from '../views/order.vue';
import Mine from '../views/mine.vue';
import One from '../components/one.vue';
Vue.use(VueRouter);

//路由的配置
const router = new VueRouter({
	mode: 'hash', //hash路由就是路由的路径上会有一个#
	//类似于webpack中的rules  路由的配置规则  一个对象就是一个路由的配置
	routes: [
		{
			path: '/',
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
		{
			path: '/mine',
			component: Mine
		}
	]
});

export default router;
