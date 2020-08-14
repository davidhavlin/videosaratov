<template>
	<article>
		<main>
			<the-loader class="loading-circle" v-if="!loaded" />
			<transition name="gamePage">
				<section v-show="loaded" id="game-info">
					<div class="header">
						<div class="social">
							<a href>
								<i class="far fa-smile"></i>
							</a>
							<a href>
								<i class="fab fa-steam"></i>
							</a>
						</div>
						<button class="btn" @click="goBack()">
							<i class="fas fa-angle-double-left"></i>
							<span>Späť</span>
						</button>
						<div class="background-container" :style="{ backgroundColor: hra.background }">
							<div
								class="background"
								:style="{
									backgroundImage: 'url(' + hra.img + ')'
								}"
							></div>
						</div>
						<h1 class="game-title">{{ hra.title }}</h1>
						<div class="header-content">
							<div class="game-img">
								<img :src="hra.img" alt />
							</div>
							<div>{{ hra.desc }}</div>
						</div>
					</div>

					<div class="game">
						<div class="game-text">
							<div>
								<h2>{{ hra.title }}</h2>Lorem ipsum dolor sit amet, consectetur
								adipiscing elit, sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqua.
								Augue eget arcu dictum varius duis. Ut morbi
								tincidunt augue interdum velit euismod in. Duis
								ultricies lacus sed turpis tincidunt. Ultricies
								lacus sed turpis tincidunt id. Dui ut ornare
								lectus sit. Tortor consequat id porta nibh
								venenatis cras sed felis eget. Ultrices mi
								tempus imperdiet nulla malesuada pellentesque
								elit. Et netus et malesuada fames.
							</div>
							<div>
								Eget mi proin sed libero enim. A condimentum
								vitae sapien pellentesque habitant morbi
								tristique senectus. Consectetur libero id
								faucibus nisl tincidunt eget nullam. Vitae
								tortor condimentum lacinia quis vel eros donec
								ac. Dui sapien eget mi proin sed. Est
								pellentesque elit ullamcorper dignissim cras
								tincidunt lobortis feugiat vivamus. Pretium
								aenean pharetra magna ac placerat vestibulum
								lectus. Lorem ipsum dolor sit amet consectetur
								adipiscing elit ut. Neque viverra justo nec
								ultrices dui sapien. Urna et pharetra pharetra
								massa massa.
							</div>
							<div>
								Massa sapien faucibus et molestie ac feugiat sed
								lectus. Est placerat in egestas erat imperdiet.
								Convallis aenean et tortor at risus viverra
								adipiscing at in. Morbi leo urna molestie at
								elementum eu facilisis sed odio. Elementum
								curabitur vitae nunc sed. Pellentesque
								adipiscing commodo elit at. Facilisi etiam
								dignissim diam quis. Nunc non blandit massa enim
								nec dui nunc mattis enim. Eros donec ac odio
								tempor orci. Ullamcorper malesuada proin libero
								nunc consequat. Velit aliquet sagittis id
								consectetur purus. Amet consectetur adipiscing
								elit pellentesque habitant morbi tristique
								senectus et.
							</div>
						</div>
					</div>
				</section>
			</transition>
		</main>
		<svg class="wave" viewBox="0 0 1440 320" style="transform: translateY(-2px)">
			<path
				fill="#0099ff"
				fill-opacity="1"
				d="M0,96L26.7,96C53.3,96,107,96,160,101.3C213.3,107,267,117,320,106.7C373.3,96,427,64,480,80C533.3,96,587,160,640,186.7C693.3,213,747,203,800,186.7C853.3,171,907,149,960,154.7C1013.3,160,1067,192,1120,197.3C1173.3,203,1227,181,1280,165.3C1333.3,149,1387,139,1413,133.3L1440,128L1440,0L1413.3,0C1386.7,0,1333,0,1280,0C1226.7,0,1173,0,1120,0C1066.7,0,1013,0,960,0C906.7,0,853,0,800,0C746.7,0,693,0,640,0C586.7,0,533,0,480,0C426.7,0,373,0,320,0C266.7,0,213,0,160,0C106.7,0,53,0,27,0L0,0Z"
			/>
		</svg>
	</article>
</template>

<script>
import analyze from 'rgbaster'
import { hry } from './hry.js'
import theLoader from '@/components/other/the-loader.vue'

export default {
	components: {
		theLoader
	},
	props: {
		slug: {
			type: String,
			required: true
		}
	},
	data() {
		return {
			loaded: false,
			hra: null
		}
	},
	methods: {
		async bgColor(url) {
			const result = await analyze(url) // also supports base64 encoded image strings
			return result[0].color
		},

		async selectedGame() {
			this.hra = hry.find(game => game.slug === this.slug)
			this.hra.background = await this.bgColor(this.hra.img)

			setTimeout(() => {
				this.loaded = true
			}, 1000)
			return this.hra
		},

		goBack() {
			return this.$router.go(-1)
		}
	},

	mounted() {
		this.selectedGame()
	}
}
</script>

<style lang="scss" scoped>
.gamePage-enter-active {
	transition: all 0.5s ease;
}
.gamePage-enter {
	opacity: 0;
	transform: translateY(100px);
}
.gamePage-enter-to {
	opacity: 1;
	transform: translateY(0);
}
.wave {
	path {
		fill: #1b083b;
	}
}

main {
	width: 100%;
	min-height: 60em;
	overflow: hidden;
	background: #1b083b;
	display: flex;
	justify-content: center;
	align-items: flex-start;
}

.loading-circle {
	margin-top: 8em;
	margin-left: -2em;
}

section {
	position: relative;
	width: 100%;
	min-height: 60em;
	// padding: 2em;
	background: #1b083b;
	z-index: 10;
}

.social {
	position: absolute;
	bottom: 2em;
	right: 0;
	margin-right: 2em;

	a {
		color: #a9a6cf;
		font-size: 2em;
		margin-left: 0.3em;
	}
}

.btn {
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
	left: 0;
	border: none;
	background: transparent;
	font-size: 2em;
	font-family: inherit;
	padding: 0;
	margin-bottom: 0.3em;
	color: #0b87dc;

	span {
		font-size: 0.7em;
		margin-left: 0.3em;
	}

	&:focus {
		outline: none;
	}
}
.game {
	padding: 2em 2em 6em 2em;
}
.background-container {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: -1;
	overflow: hidden;
	border-bottom: 2px solid #380082ad;
	opacity: 0.4;
}
.background {
	width: 100%;
	height: 100%;
	background-repeat: no-repeat;
	background-size: cover;

	opacity: 0.8;
	filter: blur(10px);
}
.header {
	position: relative;
	padding: 2em;
}
.header-content {
	display: flex;
	justify-content: space-around;
	margin: 2em 0;

	.game-img {
		width: 40%;
		border: 2px solid #a9a6cf;
		border-radius: 1em;
		box-shadow: 1px 1px 20px #0000005c;
		overflow: hidden;
	}

	img {
		width: 100%;
		height: auto;
		display: block;
		object-fit: contain;
	}

	div {
		text-align: left;
		width: 40%;
		color: #a9a6cf;
	}
}

.game-title {
	margin: 0;
	font-size: 2em;
	text-align: left;
	color: #e8e7f1;
}
.game-text {
	color: #a9a6cf;
	text-align: left;
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 40px;
}

@media (max-width: 800px) {
	.social {
		top: 1em;
		margin-right: 1em;
	}
	.header {
		padding: 1em;
	}
	.header-content {
		img {
			width: 100%;
			height: 100%;
			display: block;
			object-fit: cover;
		}
	}
}
@media (max-width: 660px) {
	.header-content {
		flex-direction: column;
		align-items: center;
		margin: 2em 0;

		.game-img {
			margin-bottom: 2em;
			width: 60%;
		}

		div {
			width: 100%;
		}
	}
}
@media (max-width: 590px) {
	.header-content {
		flex-direction: column;
		align-items: center;
		margin: 2em 0;

		.game-img {
			margin-bottom: 2em;
			width: 100%;
		}
	}
	.game-title {
		font-size: 1.6em;
	}

	.game-text {
		gap: 20px;
	}
}
@media (max-width: 520px) {
	.game {
		padding: 1em 1em 6em 1em;
	}
	.game-text {
		grid-template-columns: 1fr;
	}
}

@media (max-width: 490px) {
	.game-title {
		margin-top: 2rem;
	}
}
</style>
