<template>
	<div id="app" ref="body" v-cloak>
		<!-- NAVIGACIA -->
		<the-navigation v-if="!mobileNav" />
		<the-mobile-navigation v-if="mobileNav" />

		<!-- OBSAH STRANKY -->
		<router-view />

		<elevator :showElevator="showElevator" />

		<the-footer ref="footer" />
	</div>
</template>

<script>
import theNavigation from '@/components/app/the-navigation.vue'
import theMobileNavigation from '@/components/app/the-mobile-navigation.vue'
import theFooter from '@/components/app/the-footer.vue'
import elevator from '@/components/other/elevator.vue'

export default {
	components: {
		theNavigation,
		theMobileNavigation,
		theFooter,
		elevator
	},
	data() {
		return {
			showElevator: false,

			mobileNav: false
		}
	},
	mounted() {
		this.calculateWidth()
		window.addEventListener('resize', this.calculateWidth)
		window.addEventListener('scroll', () => {
			if (window.scrollY > 1000) {
				this.showElevator = true
			} else {
				this.showElevator = false
			}
		})
	},
	methods: {
		calculateWidth() {
			if (window.innerWidth < 700) {
				this.mobileNav = true
			} else {
				this.mobileNav = false
			}
		}
	}
}
</script>

<style lang="scss">
@import '@/assets/scss/main.scss';
@import '~animate.css/source/_base.css';

[v-cloak] {
	display: none !important;
}

.fade-enter-active {
	opacity: 1;
	transition: all 1s ease;
	transform: translateY(0px);
}

.fade-enter {
	opacity: 0;
	transform: translateY(50px);
}
.modal-enter-active,
.modal-leave-active {
	transition: all 0.25s ease;
}

.modal-enter,
.modal-leave-to {
	opacity: 0;
}
.modal-enter-to,
.modal-leave {
	opacity: 1;
}

.fadeModal-enter-active,
.fadeModal-leave-active {
	transition: all 0.5s ease;
}

.fadeModal-enter,
.fadeModal-leave-to {
	opacity: 0;
	transform: scale(0.9);
}
.fadeModal-enter-to,
.fadeModal-leave {
	opacity: 1;
	transform: scale(1);
}

.page-title {
	margin: 0;
	font-size: 2em;
	text-align: left;
	color: #fffff4;
	// text-shadow: 0px 1px 8px #39318933;
	// color: #5c0bc7;
	// text-shadow: 0px 1px 8px #5c0bc73b;
}

// [data-scroll-dir-y] .skuska {
// 	transition: all 0.3s ease-in;
// }
// [data-scroll-dir-y='1'] .skuska {
// 	transform: translateY(-50px);
// 	color: red;
// }
// [data-scroll-dir-y='-1'] .skuska {
// 	transform: translateY(0px);
// 	color: blue;
// }

#bar {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 3px;
	z-index: 30;
	background: linear-gradient(
		0deg,
		rgba(148, 4, 237, 1) 0%,
		rgba(118, 0, 251, 1) 100%
	);
	transform: scaleX(0);
	transform-origin: top left;
	transition: 0.25s transform ease;
}

#app {
	// position: relative;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
}

article {
	z-index: 100;
	margin: 0 auto;
	border-radius: 3em;
	max-width: 1000px;
	overflow: hidden;
}

@media only screen and (max-width: 1100px) {
	article {
		max-width: 100%;
		border-radius: 0;
	}
}
</style>
