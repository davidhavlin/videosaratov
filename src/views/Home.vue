<template>
	<transition name="fade">
		<article v-if="showHome">
			<main class="home">
				<section class="first-section">
					<div class="slide slide1 active"></div>
					<div class="slide slide2"></div>
					<div class="slide slide3"></div>
					<home-box />
					<svg class="wave2" viewBox="0 0 1440 320" overflow="hidden">
						<path
							fill="#0099ff"
							fill-opacity="1"
							d="M0,0L60,42.7C120,85,240,171,360,202.7C480,235,600,213,720,197.3C840,181,960,171,1080,176C1200,181,1320,203,1380,213.3L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
						/>
					</svg>
					<svg class="wave" viewBox="0 0 1440 320" overflow="hidden">
						<path
							fill="#0099ff"
							fill-opacity="1"
							d="M0,0L60,42.7C120,85,240,171,360,202.7C480,235,600,213,720,197.3C840,181,960,171,1080,176C1200,181,1320,203,1380,213.3L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
						/>
					</svg>
				</section>

				<section class="second-section" ref="parallax2" data-lax-bg-pos-y="1400 120, 700 0">
					<home-box-second />
					<svg class="second-wave" viewBox="0 0 1440 320">
						<path
							fill="#fff"
							fill-opacity="1"
							d="M0,192L48,192C96,192,192,192,288,202.7C384,213,480,235,576,234.7C672,235,768,213,864,192C960,171,1056,149,1152,144C1248,139,1344,149,1392,154.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
						/>
					</svg>
				</section>

				<section
					class="third-section"
					ref="parallax3"
					data-lax-bg-pos-y_large="3600 1000, 700 0"
					data-lax-bg-pos-y_medium="3600 800, 700 0"
					data-lax-bg-pos-y_small="3600 1500, 700 0"
					data-lax-bg-pos-y_ultrasmall="3600 1800, 700 0"
				>
					<home-box-third ref="third" />
					<svg viewBox="0 0 1440 320" class="third-wave">
						<path
							fill="#0099ff"
							fill-opacity="1"
							d="M0,96L48,128C96,160,192,224,288,229.3C384,235,480,181,576,149.3C672,117,768,107,864,117.3C960,128,1056,160,1152,144C1248,128,1344,64,1392,32L1440,0L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
						/>
					</svg>
				</section>

				<section class="forth-section">
					<home-box-gallery />
				</section>
				<svg class="forth-wave" viewBox="0 0 1440 320">
					<path
						fill="#0099ff"
						fill-opacity="1"
						d="M0,96L26.7,96C53.3,96,107,96,160,101.3C213.3,107,267,117,320,106.7C373.3,96,427,64,480,80C533.3,96,587,160,640,186.7C693.3,213,747,203,800,186.7C853.3,171,907,149,960,154.7C1013.3,160,1067,192,1120,197.3C1173.3,203,1227,181,1280,165.3C1333.3,149,1387,139,1413,133.3L1440,128L1440,0L1413.3,0C1386.7,0,1333,0,1280,0C1226.7,0,1173,0,1120,0C1066.7,0,1013,0,960,0C906.7,0,853,0,800,0C746.7,0,693,0,640,0C586.7,0,533,0,480,0C426.7,0,373,0,320,0C266.7,0,213,0,160,0C106.7,0,53,0,27,0L0,0Z"
					/>
				</svg>
			</main>
		</article>
	</transition>
</template>

<script>
import homeBox from '@/components/home/home-box.vue'
import homeBoxSecond from '@/components/home/home-box-second.vue'
import homeBoxThird from '@/components/home/home-box-third.vue'
import homeBoxGallery from '@/components/home/home-box-gallery.vue'
import lax from 'lax.js'

export default {
	name: 'Home',
	components: {
		homeBox,
		homeBoxSecond,
		homeBoxThird,
		homeBoxGallery
	},
	data() {
		return {
			showHome: false,
			sheduled: false,
			slides: '',
			index: 0
		}
	},
	methods: {
		changeSlide() {
			for (let i = 0; i < this.slides.length; i++) {
				this.slides[i].classList.remove('active')
			}

			this.slides[this.index].classList.add('active')
		},
		nextSlide() {
			if (this.index == this.slides.length - 1) {
				this.index = 0
			} else {
				this.index++
			}
			this.changeSlide()
		},

		autoSlide() {
			this.nextSlide()
		}
	},

	mounted() {
		this.showHome = true
	},

	updated() {
		let slidesNode = document.querySelectorAll('.slide')
		this.slides = Array.from(slidesNode)

		let timer = setInterval(this.autoSlide, 4000)

		lax.setup({
			breakpoints: { ultrasmall: 0, small: 400, medium: 720, large: 860 }
		})
		window.addEventListener('scroll', () => {
			lax.update(window.scrollY)
		})

		window.addEventListener('resize', () => {
			lax.updateElements()
		})

		lax.addElement(this.$refs.parallax2)
		lax.addElement(this.$refs.parallax3)
		lax.addElement(document.querySelector('.third-section .content-img-1'))
		lax.addElement(document.querySelector('.third-section .content-img-2'))
		lax.addElement(document.querySelector('.third-section .content-img-3'))
		lax.addElement(document.querySelector('.third-section .content-img-4'))
	}
}
</script>

<style lang="scss" scoped>
.slide {
	background-position: center;
	position: absolute;
	width: 100%;
	height: 100%;
	display: none;
	z-index: -3;
}

.slide1 {
	background-image: url('~@/assets/img/slides/slide1.webp');
	background-size: cover;
	background-repeat: no-repeat;
	animation: fadeIn 2s ease;
}

.slide2 {
	background-image: url('~@/assets/img/slides/slide2.webp');
	background-size: cover;
	background-repeat: no-repeat;
	animation: fadeIn 2s ease;
}

.slide3 {
	background-image: url('~@/assets/img/slides/slide3.jpg');
	background-size: cover;
	background-repeat: no-repeat;
	animation: fadeIn 2s ease;
}

@keyframes fadeIn {
	from {
		opacity: 0.5;
		transform: scale(1.1);
	}
	to {
		opacity: 1;
		transform: scale(1);
	}
}

.active {
	display: block;
}

main {
	width: 100%;
	overflow: hidden;
}
section {
	position: relative;
	min-height: 40em;
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 10;
}
.first-section {
	background-color: #0c030d;
	// background-image: url('~@/assets/img/slides/slide1.webp');
	// background-size: cover;
	// background-repeat: no-repeat;
	// background-position-y: -30px;
	z-index: 9;
	opacity: 1;
	height: 40em;
	transition: all 0.2s ease;
	overflow: hidden;
}

.second-section {
	background-image: url('~@/assets/img/cityup.webp');
	background-color: #2f1238;
	background-size: cover;
	background-repeat: no-repeat;
	// transition: all 0.4s ease-out;
}

.second-section::after {
	content: '';
	// background: linear-gradient(0deg, rgb(76, 0, 16) 0%, #ff0038 100%);
	background: linear-gradient(0deg, #0a0f23 0%, #f30d31 100%);
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
	opacity: 0.8;
	z-index: -20;
}
.third-section {
	background-image: url('~@/assets/img/cyber-min.webp');
	background-color: #190b44;
	background-size: 100%;
	background-repeat: no-repeat;
	background-position-y: -20px;

	padding-bottom: 10em;
}

.third-section::after {
	content: '';
	background: linear-gradient(0deg, #24095d 0%, #1f0946 50%, #3215a3 100%);
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
	opacity: 0.9;
	z-index: -20;
}

.forth-section {
	background: #0e061c;
	background: linear-gradient(0deg, #0e061c 0%, #0e061c 100%);
	padding: 0 1rem;
}

.wave,
.wave2,
.second-wave,
.third-wave {
	position: absolute;
	left: 0;
	bottom: -40px;
	z-index: -3;
	path {
		fill: #ca0e32;
		// fill: #363cce;
	}
}
.wave2 {
	bottom: -23px;
	transform: rotate(-2deg) scale(1.1);
}
.wave2 path {
	fill: #08090e;
}

.second-wave path {
	fill: #2f1498;
}

.third-wave path {
	fill: #0e061c;
}
.forth-wave {
	position: relative;
	top: -2px;

	path {
		fill: rgba(14, 6, 28, 1);
	}
}

@media (max-width: 810px) {
	.second-wave {
		bottom: 0px;
	}
	.third-wave {
		bottom: -5px;
	}
}
@media (max-width: 640px) {
	.wave {
		bottom: -5px;
	}
	.wave2 {
		bottom: 11px;
	}
}

@media (max-width: 500px) {
	.second-section {
		transition: all 0.4s ease-out;
	}
	.third-section {
		transition: all 0.4s ease-out;
	}

	.wave {
		width: 800px;
		bottom: -34px;
	}

	.second-wave {
		width: 600px;
	}

	.third-wave {
		width: 800px;
	}

	.forth-wave {
		width: 610px;
	}

	.wave2 {
		display: none;
	}
}
</style>
