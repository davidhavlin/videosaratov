<template>
	<div class="game-gallery">
		<transition name="loader">
			<the-loader class="loading"
						v-show="loader" />
		</transition>
		<div v-for="game in games"
			 :key="game.id"
			 class="game"
			 :class="game.category">
			<router-link :to="{
					name: 'GameSinglePage',
					params: { slug: game.slug }
				}">
				<div class="category">{{ categorize(game.category) }}</div>
				<img :src="game.img"
					 alt="Image of Game"
					 loading="lazy" />
				<div class="under-image">
					<h4 class="title">{{ game.title }}</h4>
					<p class="description">{{ game.desc }}</p>
				</div>
			</router-link>
		</div>
	</div>
</template>

<script>
import { hry } from './hry.js'
import theLoader from '@/components/other/the-loader.vue'

export default {
	props: {
		loader: {
			type: Boolean
		}
	},
	data() {
		return {}
	},
	components: {
		theLoader
	},
	methods: {
		categorize(category) {
			switch (category) {
				case 'akcne':
					return 'Akčné'
					break
				case 'zabavne':
					return 'Zábavné'
					break
				case 'hororove':
					return 'Hororové'
					break
				case 'dobrodruzne':
					return 'Dobrodružné'
					break
				case 'predeti':
					return 'Pre deti'
					break
				case 'logicke':
					return 'Logické'
					break
				case 'sportove':
					return 'Športové'
					break

				default:
					return 'Bez kategorie'
					break
			}
		},

		titleUrl(title) {
			let str = title.toLowerCase()
			return str
				.split('-')[0]
				.replace(/[^a-zA-Z0-9 ]/g, '')
				.trim()
				.split(' ')
				.join('-')
		}
	},
	computed: {
		games() {
			let id = 0
			for (let i = 0; i < hry.length; i++) {
				hry[i].id = i
				hry[i].titleUrl = this.titleUrl(hry[i].title)
			}
			return hry
		}
	}
}
</script>

<style lang="scss" scoped>
a {
	text-decoration: none;
}
.loading {
	position: relative;
	font-size: 70%;
	grid-column: span 3;
	justify-self: center;
	height: 100px;
	transform: translateX(-20px);
}

.loader-enter-active {
	transition: all 0.5s ease-in;
}
.loader-enter,
.loader-leave-to {
	opacity: 0;
}

.loader-enter-to,
.loader-leave {
	opacity: 1;
}

.loader-leave-activ {
	transition: opacity 0.5s ease-in;
}

.game-gallery {
	margin: 3em 0;
	width: 100%;
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	gap: 20px;
	transition: all 1s ease-in;
}

.game {
	position: relative;
	border-radius: 0.5em;
	overflow: hidden;
	background: #291354;
	transition: all 0.3s ease;
}

img {
	width: 100%;
	height: auto;
	display: block;
}

.category {
	color: #fff;
	position: absolute;
	left: 0;
	top: 0;
	background: #000;
	padding: 0.3em 0.6em;
}

.under-image {
	width: 100%;
	padding: 1em;

	.title {
		margin: 0;
		margin-bottom: 1em;
		text-align: left;
		color: #dcd5f7;
		text-decoration: none;
	}

	.description {
		margin: 0;
		text-align: left;
		color: #d1bcfe;
		text-decoration: none;
	}
}

.akcne .category {
	background: #920403;
}
.zabavne .category {
	background: #e99801;
}
.hororove .category {
	background: #57036a;
}
.dobrodruzne .category {
	background: #0abb66;
}
.predeti .category {
	background: #da0a8a;
}
.logicke .category {
	background: #cceb05;
}
.sportove .category {
	background: #0c43e9;
}

.show {
	animation: show 0.3s ease-in-out;
	// display: block;
}

@keyframes show {
	from {
		opacity: 0;
		transform: scale(0.9);
	}
	to {
		opacity: 1;
		transform: scale(1);
	}
}
.visually-hidden {
	transform: scale(0.9);
	opacity: 0;
}
.hide {
	display: none;
}

@media only screen and (max-width: 930px) {
	.game-gallery {
		grid-template-columns: 1fr 1fr;
	}
	.loading {
		grid-column: span 2;
	}
}

@media only screen and (max-width: 500px) {
	.game-gallery {
		grid-template-columns: 1fr;
	}
	.loading {
		grid-column: span 1;
	}
}
</style>
