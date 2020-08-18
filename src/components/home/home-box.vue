<template>
	<aside class="content" ref="content">
		<div class="content-title" ref="inner">
			<h1 class="content-h1">Virtuálna realita</h1>
			<p>
				Príďte si vyskúšať Virtuálnu Realitu.
				<strong>Vstúpte do sveta, o ktorom sa Vám iba snívalo.</strong>
			</p>

			<a class="btn btn-home" @click.prevent="showInfo()" rel="noopener">Zistiť viac!</a>
			<transition name="modal">
				<the-info v-if="info" />
			</transition>
		</div>
	</aside>
</template>

<script>
import TheInfo from '@/components/other/the-info.vue'
export default {
	name: 'homeBox',
	components: {
		TheInfo
	},
	data() {
		return {
			info: false,
			counter: 0,
			updateRate: 10,
			mouse: {
				_x: 0,
				_y: 0,
				x: 0,
				y: 0,
				updatePosition: function(event) {
					var e = event || window.event
					this.x = e.clientX - this._x
					this.y = (e.clientY - this._y) * -1
				},
				setOrigin: function(e) {
					this._x = e.offsetLeft + Math.floor(e.offsetWidth / 2)
					this._y = e.offsetTop + Math.floor(e.offsetHeight / 2)
				},
				show: function() {
					return '(' + this.x + ', ' + this.y + ')'
				}
			}
		}
	},
	methods: {
		showInfo() {
			this.info = true
			setTimeout(() => {
				this.info = false
			}, 1500)
		},
		update(event) {
			this.mouse.updatePosition(event)
			this.updateTransformStyle(
				(this.mouse.y / this.inner.offsetHeight / 2).toFixed(2),
				(this.mouse.x / this.inner.offsetWidth / 2).toFixed(2)
			)
		},

		onMouseEnterHandler(event) {
			this.update(event)
		},
		onMouseLeaveHandler() {
			this.inner.style = ''
		},
		onMouseMoveHandler(event) {
			if (this.isTimeToUpdate()) {
				this.update(event)
			}
		},
		isTimeToUpdate() {
			return this.counter++ % this.updateRate === 0
		},
		updateTransformStyle(x, y) {
			let style = 'rotateX(' + x + 'deg) rotateY(' + y + 'deg)'
			this.inner.style.transform = style
			this.inner.style.webkitTransform = style
			this.inner.style.mozTransform = style
			this.inner.style.msTransform = style
			this.inner.style.oTransform = style
		}
	},

	mounted() {
		if (window.innerWidth < 700) {
			return
		}
		this.content.addEventListener('mouseenter', this.onMouseEnterHandler)
		this.content.addEventListener('mouseleave', this.onMouseLeaveHandler)
		this.content.addEventListener('mousemove', this.onMouseMoveHandler)

		this.mouse.setOrigin(this.content)
		this.inner.addEventListener('mouseenter', () => {
			this.inner.style = ''
			this.content.removeEventListener(
				'mouseenter',
				this.onMouseEnterHandler
			)
			this.content.removeEventListener(
				'mouseleave',
				this.onMouseLeaveHandler
			)
			this.content.removeEventListener(
				'mousemove',
				this.onMouseMoveHandler
			)
		})
		this.inner.addEventListener('mouseleave', () => {
			this.content.addEventListener(
				'mouseenter',
				this.onMouseEnterHandler
			)
			this.content.addEventListener(
				'mouseleave',
				this.onMouseLeaveHandler
			)
			this.content.addEventListener('mousemove', this.onMouseMoveHandler)
		})
	},

	computed: {
		inner() {
			return this.$refs.inner
		},
		content() {
			return this.$refs.content.parentElement
		}
	}
}
</script>

<style scoped lang="scss">
@import '@/assets/scss/_colors.scss';
.content {
	display: flex;
	margin: 0;
	width: 100%;
	height: 100%;
	perspective: 50px;

	.content-title {
		transition: transform 0.5s;
		position: absolute;
		right: 0;
		max-width: 280px;
		text-align: left;
		background: linear-gradient(12deg, #f80f2b 0%, #ea093e 100%);
		box-shadow: 0px 2px 22px 0px rgb(236 10 58 / 15%);
		padding: 1em;
		border-radius: 1em;
		z-index: 1;
		h1 {
			font-size: 2em;
			position: absolute;
			transform: translate(0em, -4.7em);
			text-align: right;
		}

		p {
			text-align: left;
			margin: 1.5em 0;
			margin: 0 0 1em 0;
		}
	}

	.btn-home {
		text-align: right;
		background: #9e0923;
		box-shadow: 0px 0px 10px 0px rgb(158 9 35 / 78%);
		transition: all 0.3s cubic-bezier(0.68, -0.75, 0.265, 1.75);
	}
	.btn-home:hover,
	.btn-home:focus {
		transform: scale(1.1);
		box-shadow: 6px 7px 1px -1px #130c1e1f;
		color: #fff;
	}
}

@media (max-width: 850px) {
	.content {
		margin-right: 2rem;
		margin-left: 2rem;
	}
}
</style>
