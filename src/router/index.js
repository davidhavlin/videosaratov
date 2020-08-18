import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import { hry } from '@/components/games/hry.js'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
		props: true
	},
	{
		path: '/hry',
		name: 'Hry',
		props: true,
		component: () =>
			import(/* webpackChunkName: "hry" */ '../views/Hry.vue')
	},
	{
		path: '/hry/:slug',
		name: 'GameSinglePage',
		props: true,
		component: () =>
			import(
				/* webpackChunkName: "GameSinglePage" */ '../components/games/game-single-page.vue'
			),
		beforeEnter: (to, from, next) => {
			const exists = hry.find(game => game.slug === to.params.slug)
			if (exists) {
				next()
			} else {
				next({ name: 'notFound' })
			}
		}
	},
	{
		path: '/cennik',
		name: 'Cennik',
		props: true,
		component: () =>
			import(/* webpackChunkName: "cennik" */ '../views/Cennik.vue')
	},
	{
		path: '/kontakt',
		name: 'Kontakt',
		props: true,
		// route level code-splitting
		// this generates a separate chunk (kontakt.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import(/* webpackChunkName: "kontakt" */ '../views/Kontakt.vue')
	},
	{
		path: '/404',
		alias: '*',
		name: 'notFound',
		component: () =>
			import(/* webpackChunkName: "NotFound" */ '../views/NotFound.vue')
	}
]

const router = new VueRouter({
	mode: 'history',
	scrollBehavior(to, from, savedPosition) {
		// if (savedPosition) {
		// 	return savedPosition
		// } else {
		// 	return { x: 0, y: 0 }
		// }

		if (from.name === 'GameSinglePage' && to.name === 'Hry') {
			return savedPosition
		}
		if (
			to.name === 'Cennik' ||
			to.name === 'Kontakt' ||
			to.name === 'Hry'
		) {
			return { x: 0, y: 0 }
		}
		if (savedPosition) {
			return savedPosition
		} else {
			const position = {}
			if (to.hash) {
				position.selector = to.hash
				if (to.hash === '#game-info') {
					return { x: 0, y: 0 }
				}
				if (document.querySelector(to.hash)) {
					return position
				}
				return false
			}
		}
	},
	routes
})

export default router
