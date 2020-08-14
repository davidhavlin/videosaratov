<template>
	<div class="mapouter">
		<div class="loader">
			<the-loader />
		</div>
		<div class="gmap_canvas">
			<iframe
				width="700"
				height="500"
				id="gmap_canvas"
				src="https://maps.google.com/maps?q=Saratovsk%C3%A1%203424&t=&z=17&ie=UTF8&iwloc=&output=embed"
				frameborder="0"
				scrolling="no"
				marginheight="0"
				marginwidth="0"
			></iframe>
			<a href="https://www.whatismyip-address.com"></a>
		</div>
	</div>
</template>

<script>
import theLoader from '@/components/other/the-loader.vue'
export default {
	components: {
		theLoader
	}
}
</script>

<style lang="scss" scoped>
.mapouter {
	position: relative;
	text-align: right;
	height: 400px;
	width: 600px;
}
.gmap_canvas {
	overflow: hidden;
	background: none !important;
	height: 400px;
	width: 600px;
	// border: 3px solid #0d83d8;
}

.loader {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: #1b083b;
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: -1;
}

@media (max-width: 660px) {
	.mapouter {
		width: 100%;
	}
	.gmap_canvas {
		width: 100%;
	}
}
</style>
