<template>
	<aside class="content">
		<!-- obrazok KOCKA  -->
		<div
			class="content-img-1"
			ref="vrimage"
			data-lax-translate-y_large="-1000 0, 1000 -150"
			data-lax-translate-y_medium="-300 -93, 1000 -150"
			data-lax-translate-y_small="-300 -93, 1000 -150"
			data-lax-translate-y_ultrasmall="-300 -93, 1000 -150"
			data-lax-rotate="-1000 -20, vh 0"
			data-lax-anchor="self"
		>
			<img src="@/assets/img/vrvr.jpg" alt />
		</div>

		<!-- HORNA SEKCIA s obrazkom a popisom -->
		<section ref="section_1" class="content-title-1 animate__animated">
			<h1 id="htc-vive">HTC Vive</h1>
			<p>
				Súprava HTC Vive obsahuje Headset a 2 ovládače. Ponúka najväčšiu
				ponuku hier a zážitkov oproti iným systémom.
			</p>
			<a class="btn btn-home" href="#">Zistiť viac</a>
		</section>
		<!-- **************************** -->

		<!-- obrazok OVLADACE      -->
		<div
			class="content-img-2"
			ref="controllers"
			data-lax-translate-y_large="-1000 180, 1000 -150"
			data-lax-translate-y_medium="-1000 220, 1000 80"
			data-lax-translate-y_small="-1000 220, 1000 -40"
			data-lax-rotate_large="-1000 -25, 600 0"
			data-lax-rotate_medium="-1000 30, 600 0"
			data-lax-rotate_small="-1000 62, 600 40"
			data-lax-opacity="-500 0, -400 1"
			data-lax-anchor="self"
		>
			<img src="@/assets/img/ovladace.png" alt />
		</div>

		<!-- SEKCIA HEADSET -->
		<section class="content-title-2 animate__animated" ref="section_2">
			<h1>Headset</h1>
			<p>
				Pri hre sa pohybujete v priestore cca 3 x 3 m, na hlave máte
				Headset / okuliare / a v rukách ovládače, ktorými sa ovláda
				pohyb /teleport/, streľba, dvíhanie predmetov, výber v menu hry
				atď. Do Headsetu sa zmestia aj dioptrické okuliare.
			</p>
		</section>
		<!-- ************* -->

		<!-- obrazok HEADSET -->
		<div
			class="content-img-3"
			ref="vive"
			data-lax-translate-y_large="-1000 300, 1000 -100"
			data-lax-translate-y_medium="-1000 -26, 1000 -100"
			data-lax-translate-y_small="-500 -6, 1000 -80"
			data-lax-rotate="-1000 20, 1000 0"
			data-lax-anchor="self"
		>
			<img src="@/assets/img/htc.png" alt />
		</div>

		<!-- SEKCIA CONTROLLERS -->
		<section class="content-title-3 animate__animated" ref="section_3">
			<h1>Controllers</h1>
			<p>
				Hrá 1 hráč a jeho priatelia môžu sledovať hru na TV obrazovke.
				Hráči sa môžu striedať, povzbudzovať sa a zažiť veľkú zábavu.
				Napr. pri 30 min hrania sa môžu hráči striedať po 15 min. Pri 60
				min sa môžu prestriedať 3 hráči. Všetko závisí na Vašej dohode.
				Virtuálna realita je aj pre deti od 8.rokov. Vek dieťaťa a
				možnosť hrať je na posúdení rodiča.
			</p>
		</section>
		<!-- ************************ -->

		<!-- POSLEDNA SEKCIA -->
		<section class="content-title-4 animate__animated" ref="section_4">
			<h1>Info</h1>
			<p>
				Použitie VR môže pre niekoho znamenať psychickú záťaž.
				Neodporúča sa pre ľudí, ktorí majú epileptické záchvaty, srdcové
				alebo psychiatrické ochorenia alebo pri fyzickej únave a
				vyčerpanosti. Pri hraní Vám ponúkame možnosť občerstvenia:
				nealko, káva, chipsy, čerstvé pukance, nanuky a sladkosti.
				Rezervácie email: vrvideosaratov@gmail.com mobil: 0903 459 516
			</p>
		</section>
		<!-- ******************* -->

		<div
			class="content-img-4 lax"
			ref="popcorn"
			data-lax-translate-y_large="-1000 80, 1000 -100"
			data-lax-translate-y_medium="-300 80, 1200 -100"
			data-lax-translate-y_small="-300 80, 1200 -25"
			data-lax-translate-y_ultrasmall="-300 40, 1200 -60"
			data-lax-rotate_large="-1000 -10, 1000 -5"
			data-lax-rotate_medium="-1000 13, 1000 -5"
			data-lax-rotate_small="-1000 13, 1000 -5"
			data-lax-rotate_ultrasmall="-1000 13, 1000 -5"
			data-lax-anchor="self"
		>
			<img src="@/assets/img/vr.jpg" alt />
		</div>
	</aside>
</template>

<script>
import ScrollOut from 'scroll-out'
// import { throttle } from 'lodash-es'

export default {
	name: 'homeBox',
	data() {
		return {
			sheduled: false
		}
	},

	mounted() {
		this.so = ScrollOut({
			onShown(elem) {
				elem.classList.add('animate__fadeInLeft')
			},
			targets: [this.$refs.section_2, this.$refs.section_4]
		})

		this.so = ScrollOut({
			onShown(elem) {
				elem.classList.add('animate__fadeInRight')
			},
			targets: [
				this.$refs.controllers,
				this.$refs.vrimage,
				this.$refs.vive,
				this.$refs.section_1,
				this.$refs.section_3,
				this.$refs.popcorn
			],
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
@import '@/assets/scss/_colors.scss';
@import '~animate.css/animate.min.css';

[data-scroll] {
	transition: all 1s;
}
[data-scroll='in'] {
	opacity: 1;
}
[data-scroll='out'] {
	opacity: 0;
}

.content-title-1 {
	grid-area: one;
}
.content-title-2 {
	grid-area: two;
}

.content-title-3 {
	grid-area: three;
}
.content-title-4 {
	grid-area: for;
}
.content-img-1 {
	grid-area: img;
	left: -30px;
	position: relative;
}
.content-img-2 {
	grid-area: img2;
	width: 110%;
	position: absolute;
	left: -50px;
}
.content-img-3 {
	grid-area: img3;
	position: absolute;
	width: 50%;
	right: -60px;
	top: 350px;
	z-index: 1;
}
.content-img-4 {
	border-radius: 1em;
	overflow: hidden;
	box-shadow: -5px 5px 0px 0px #2448fa, -11px 11px 22px 0px #4046c940;
	transform: rotate(-5deg) translateX(30px);
	grid-area: img4;
	position: relative;
	right: -40px;
	margin-right: -10em;
}

.content {
	position: relative;
	line-height: 1.4;
	margin: 6em 0;
	grid-template-columns: repeat(6, 1fr);
	grid-template-rows: auto;
	grid-auto-rows: minmax(100px, auto);
	grid-template-areas:
		'. . . one one one'
		'img img img one one one'
		'. . . . . .'
		'two two two       . . .'
		'two two two       . . .'
		'. . . . . .'
		'img2 img2 img2 three three three'
		'img2 img2 img2 three three three'
		'. . . . . .'
		'for for for img4 img4 img4'
		'for for for img4 img4 img4';
	gap: 30px;
	align-items: start;

	.content-img-1 {
		position: relative;
		margin-left: -6em;
		border-radius: 1em;
		overflow: hidden;
		box-shadow: -5px 5px 0px 0px #f4126a, -11px 11px 22px 0px #ca17923b;
		transform: rotate(5deg);
	}

	img {
		display: block;
		height: auto;
		width: 100%;
	}
}
section {
	border: 2px dashed rgb(64 70 201 / 23%);
	text-align: left;
	padding: 1.6em;
	border-radius: 1em;
	z-index: 1;

	h1 {
		color: #fc1269;
		margin: 0;
		font-size: 2em;
	}

	p {
		margin: 1.5em 0;
	}
}

.btn-home {
	background: #4046c9;
	box-shadow: 0px 0px 10px 0px rgb(84 89 193 / 22%);
	transition: all 0.3s cubic-bezier(0.68, -0.75, 0.265, 1.75);
}
.btn-home:hover,
.btn-home:focus {
	transform: scale(1.1);
	box-shadow: 6px 7px 1px -1px #130c1e3a;
}

@media (max-width: 860px) {
	.content {
		padding: 1rem;
		display: flex;
		flex-direction: column;
		justify-content: center;
		width: 100%;
	}

	section {
		max-width: 350px;
	}
	.content .content-img-1 {
		position: absolute;
		top: 0;
		left: 0;
		max-width: 400px;
		margin-left: 0;
		margin-top: 5rem;
		margin-bottom: -7rem;
	}
	.content-img-2 {
		max-width: 300px;
	}
	.content-img-3 {
		grid-area: img3;
		position: absolute;
		width: 300px;
		right: -20px;
		top: 390px;
	}

	.content-img-4 {
		max-width: 400px;
		position: absolute;
		bottom: 4rem;
		right: -5rem;
		margin-right: 0;
	}

	.content-title-1 {
		align-self: flex-end;
	}
	.content-title-2 {
		align-self: flex-start;
	}
	.content-title-3 {
		align-self: flex-end;
	}
	.content-title-4 {
		align-self: flex-start;
	}
}

@media (max-width: 800px) {
	.content .content-img-1 {
		max-width: 320px;
	}
	.content-img-2 {
		width: 300px;
	}
	.content-img-3 {
		width: 260px;
	}
	.content-img-4 {
		max-width: 350px;
		right: -2rem;
	}
}

@media (max-width: 720px) {
	section .content-title-1 {
		margin-top: 15rem;
		align-self: center;
	}
	section {
		margin-bottom: 4rem;
	}

	.content-title-2 {
		align-self: center;
	}
	.content-title-3 {
		align-self: center;
	}
	.content-title-4 {
		align-self: center;
		margin-bottom: 15rem;
	}

	.content .content-img-1 {
		left: 27%;
	}
	.content-img-2 {
		left: -226px;
	}
	.content-img-3 {
		right: -70px;
	}

	.content-img-4 {
		right: 4rem;
		bottom: 0;
	}
}

@media (max-width: 560px) {
	section {
		margin-bottom: 2rem;
	}
	.content-img-2 {
		display: none;
	}
	.content-img-3 {
		display: none;
	}
}

@media (max-width: 430px) {
	.content .content-img-1 {
		left: 2rem;
	}
	.content-img-4 {
		right: 0rem;
		margin: 0 1rem;
	}
}
</style>
