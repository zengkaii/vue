import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import login from '@/views/login'
import register from '@/views/register'
import NotFound from '@/views/NotFound'
Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/',
      name: 'register',
      component: register
    },
    {
      path: '*',
      component: NotFound
    }
  ]
})
router.beforeEach((to, from, next) => {
	// 服务器在客户端中下的cookie token
	let token = localStorage.getItem('token');
	// console.log(token)
	if (to.meta.requireAuth) {
		if (token) {
			next();
		} else {
			next({
				path: '/login',
				query: {redirect: to.fullPath}
			})
		}

	}
	next();
})
export default router
