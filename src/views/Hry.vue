<template>
	<transition name="fade">
		<article v-show="showHry">
			<main>
				<section>
					<h1 class="page-title">Zoznam hier</h1>
					<game-search class="search"
								 @searching="searching = $event"
								 :clicked="clicked" />

					<game-categories @loadingGallery="onClickCategory"
									 @clickedOnNav="clicked = $event"
									 :searching="searching" />

					<games :loader="loading" />
				</section>
				<svg class="wave"
					 viewBox="0 0 1440 320">
					<path fill="#0099ff"
						  fill-opacity="1"
						  d="M0,96L26.7,96C53.3,96,107,96,160,101.3C213.3,107,267,117,320,106.7C373.3,96,427,64,480,80C533.3,96,587,160,640,186.7C693.3,213,747,203,800,186.7C853.3,171,907,149,960,154.7C1013.3,160,1067,192,1120,197.3C1173.3,203,1227,181,1280,165.3C1333.3,149,1387,139,1413,133.3L1440,128L1440,0L1413.3,0C1386.7,0,1333,0,1280,0C1226.7,0,1173,0,1120,0C1066.7,0,1013,0,960,0C906.7,0,853,0,800,0C746.7,0,693,0,640,0C586.7,0,533,0,480,0C426.7,0,373,0,320,0C266.7,0,213,0,160,0C106.7,0,53,0,27,0L0,0Z" />
				</svg>
			</main>
		</article>
	</transition>
</template>

<script>
import gameSearch from '@/components/games/game-search.vue'
import gameCategories from '@/components/games/game-categories.vue'
import games from '@/components/games/games.vue'

export default {
	components: {
		gameSearch,
		gameCategories,
		games
	},
	data() {
		return {
			loading: '',
			searching: '',
			clicked: '',
			showHry: false
		}
	},
	methods: {
		onClickCategory(value) {
			this.loading = value
		}
	},
	mounted() {
		this.showHry = true
	}
}
</script>

<style lang="scss" scoped>
main {
	width: 100%;
	overflow: hidden;
}
section {
	position: relative;
	width: 100%;
	min-height: 60em;
	padding: 2em;
	background: #1b083b;
	z-index: 10;
}

.search {
	margin: 2em 0;
}

.wave {
	path {
		fill: #1b083b;
	}
}
</style>
