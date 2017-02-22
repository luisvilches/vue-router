//importamos Vue
import Vue from 'vue'
//importamos el modulo de Vue-Router
import VueRouter from 'vue-router'
//importamos nuestros componentes
import App from './App.vue'
import Epp from './Epp.vue'

//le indicamos a Vue que 
//utilizaremos el modulo de Vue-Router
Vue.use(VueRouter)

// creamos una constante de Vue-Router
const router = new VueRouter({
  routes: [
  	//pasamos las rutas y los componentes
    { path: '/', component: App },
    { path: '/b', component: Epp }
  ],
});

//creamos la instancia principal de Vue
new Vue({
	//pasamos nuestra constante de Vue-router
	router,
	el: '#app',
}).$mount('#app') //montamos las rutas en
// instancia principal en este caso #app