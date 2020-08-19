<template>
	<fieldset ref="gallery"
			  class="animate__animated">
		<legend style="padding: 1em 1em "
				id="gallery">
			<h1>Galéria priestorov</h1>
		</legend>

		<div class="gallery">
			<a :href="require('@/assets/img/photos/01.jpg')">
				<img src="@/assets/img/photos/01s.webp"
					 alt="First image" />
			</a>
			<a :href="require('@/assets/img/photos/02.jpg')">
				<img src="@/assets/img/photos/02s.webp"
					 alt="Second image" />
			</a>
			<a :href="require('@/assets/img/photos/03.jpg')">
				<img src="@/assets/img/photos/03s.webp"
					 alt="First image" />
			</a>
			<a :href="require('@/assets/img/photos/05.jpg')">
				<img src="@/assets/img/photos/05s.webp"
					 alt="First image" />
			</a>
			<a :href="require('@/assets/img/photos/06.jpg')">
				<img src="@/assets/img/photos/06s.webp"
					 alt="First image" />
			</a>
			<a :href="require('@/assets/img/photos/07.jpg')">
				<img src="@/assets/img/photos/07s.webp"
					 alt="First image" />
			</a>
			<a :href="require('@/assets/img/photos/08.jpg')">
				<img src="@/assets/img/photos/08s.webp"
					 alt="First image" />
			</a>
			<a :href="require('@/assets/img/photos/09.jpg')">
				<img src="@/assets/img/photos/09s.webp"
					 alt="First image" />
			</a>
			<a :href="require('@/assets/img/photos/10.jpg')">
				<img src="@/assets/img/photos/10s.webp"
					 alt="First image" />
			</a>
		</div>
	</fieldset>
</template>

<script>
import baguetteBox from 'baguettebox.js'
import ScrollOut from 'scroll-out'

export default {
	name: 'gallery',

	mounted() {
		baguetteBox.run('.gallery', {
			async: true
		})

		this.so = ScrollOut({
			targets: [this.$refs.gallery],
			once: true,
			threshold: 0.3
		})
	},
	destroyed() {
		this.so.teardown()
	}
}
</script>

<style scoped lang="scss">
@import '~baguettebox.js/dist/baguetteBox.min.css';
@import '@/assets/scss/_colors.scss';

fieldset {
	margin: 4em 0 10em 0;
	border: none;
	border-radius: 2em;
}

h1 {
	color: #ffffff;
	margin: 0;
	font-size: 2em;
}
p {
	max-width: 600px;
}

.gallery {
	position: relative;
	max-width: 800px;
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	grid-auto-rows: 150px;
	gap: 5px;
	border-radius: 2em;
	overflow: hidden;
	z-index: 99;

	a::before {
		position: absolute;
		top: 50%;
		left: 50%;
		margin-top: -35px;
		margin-left: -13px;
		opacity: 0;
		color: #fff;
		font-size: 46px;

		content: '\002315';
		pointer-events: none;
		z-index: 9000;
		transition: 0.4s;
	}
	a::after {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		opacity: 0;
		background-color: rgb(10 135 243 / 63%);
		content: '';
		transition: 0.4s;
	}

	a:hover::before,
	a:hover::after {
		opacity: 1;
	}

	a {
		position: relative;
		width: 100%;
		height: 100%;
		opacity: 0.7;
		overflow: hidden;
		transition: all 0.3s ease-in-out;

		&:hover {
			opacity: 1;
			border-radius: 2em;
		}
		&:hover img {
			transform: scale(1.2);
		}
	}

	img {
		object-fit: cover;
		display: block;
		width: 100%;
		height: 100%;
		transition: all 0.5s ease;
	}
}

@media (max-width: 500px) {
	h1 {
		font-size: 1.6em;
	}

	fieldset {
		padding: 0;
	}

	.gallery {
		grid-auto-rows: 100px;
	}
}
</style>
