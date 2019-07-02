import Vue from 'vue';
import App from './App.vue';
//Vue.prototype.$observer = new Vue();
import Observer from './observer';
import router from './router';

Vue.prototype.$observer = Observer;

new Vue({
	router,
	//通过render函数来解析templet模板
	render: h => h(App)
}).$mount('#app');
