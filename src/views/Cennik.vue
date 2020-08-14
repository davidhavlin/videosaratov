<template>
	<transition name="fade">
		<article v-show="showCennik">
			<main>
				<section>
					<h1 class="page-title">Cenník</h1>

					<div class="page-text">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Condimentum lacinia quis vel eros donec ac odio tempor orci. At imperdiet dui accumsan sit amet nulla facilisi. Arcu ac tortor dignissim convallis aenean et tortor at. Našu
						<a
							href
						>vernostnú kartu</a>.
					</div>
					<div class="price-content">
						<price-calc class="calc" />

						<price-table class="table" />
					</div>
					<price-coupone class="coupone" />
				</section>
				<svg class="wave" viewBox="0 0 1440 320">
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
import priceCalc from '@/components/cennik/price-calc.vue'
import priceTable from '@/components/cennik/price-table.vue'
import priceCoupone from '@/components/cennik/price-coupone.vue'

export default {
	components: {
		priceCalc,
		priceTable,
		priceCoupone
	},
	data() {
		return {
			showCennik: false
		}
	},
	mounted() {
		this.showCennik = true
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
	padding-bottom: 4em;
	background: #1b083b;
	z-index: 10;
}
.page-text {
	text-align: left;
	margin-top: 2rem;
	color: #b4a6ff;

	a {
		color: #0b87dc;
		text-decoration: none;
	}
	a:hover {
		text-decoration: underline;
	}
}
.price-content {
	margin: 3em 0;
	display: grid;
	gap: 10px;
	grid-template-columns: 1fr 1fr;
}

.coupone {
	grid-column: span 2;
	margin: 16em 0 9em 0;
}

.wave {
	path {
		fill: #1b083b;
	}
}

@media (max-width: 860px) {
	.price-content {
		grid-template-columns: 1fr;
		justify-items: center;
	}
}
@media (max-width: 400px) {
	section {
		padding: 1em;
		padding-bottom: 4em;
	}
	.wave {
		transform: translate(-1px, -2px);
	}
}
</style>
