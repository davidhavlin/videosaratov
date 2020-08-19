<template>
	<aside class="aside-content"
		   ref="content">
		<div class="content-title">
			<h1>
				Nová dimenzia
				zábavy
			</h1>
			<p>
				Zažite virtuálne cestovanie po horách, prechádzku v podmorskom
				svete, kreslenie v 3D priestore alebo si zahrajte akčnú,
				športovú alebo logickú hru tak, ako to nepoznáte.
				<br />
				<strong>Vstúpte priamo do hry!</strong>
			</p>

			<a class="btn btn-home"
			   @click.prevent="showInfo()"
			   rel="noopener">Objednať sa</a>
			<transition name="modal">
				<the-info v-if="info" />
			</transition>
		</div>

		<div class="content-img">
			<img src="@/assets/img/content.jpg"
				 alt />
		</div>
	</aside>
</template>

<script>
import ScrollOut from 'scroll-out'
import TheInfo from '@/components/other/the-info.vue'

export default {
	name: 'homeBox',

	components: {
		TheInfo
	},
	data() {
		return {
			info: false
		}
	},

	methods: {
		showInfo() {
			this.info = true
			setTimeout(() => {
				this.info = false
			}, 1500)
		}
	},

	mounted() {
		this.so = ScrollOut({
			targets: [this.$refs.content],
			once: true,
			threshold: 0.3
		})
	}
}
</script>

<style scoped lang="scss">
@import '@/assets/scss/_colors.scss';

[data-scroll] {
	transition: all 0.7s;
}
[data-scroll='in'] {
	opacity: 1;
	transform: translateY(0px) scale(1);
}
[data-scroll='out'] {
	opacity: 0;
	transform: translateY(20px) scale(0.9);
}

.aside-content {
	display: flex;
	position: relative;
	justify-content: center;
	align-items: center;

	.content-img {
		width: 43%;
		border-radius: 1em;
		overflow: hidden;
		box-shadow: -5px 5px 0 0 #5010e2,
			-11px 11px 22px 0 rgba(47, 137, 246, 0.14);
		transform: rotate(-4deg) translate(22px, -82px);
		z-index: 10;
	}
	.content-img img {
		display: block;
		height: auto;
		width: 100%;
	}

	.content-title {
		max-width: 20em;
		text-align: right;
		z-index: 11;
		transform: translate(5px, 41px);
		background: linear-gradient(12deg, #100c1d 0%, #08122c 100%);
		box-shadow: -11px 11px 22px 0px rgba(0, 0, 56, 0.2);
		padding: 1em;
		margin-right: 2rem;
		border-radius: 1em;

		h1 {
			text-align: left;
			font-size: 2em;
			position: absolute;
			top: -5.7rem;
			left: 1rem;
			color: #ffffff;
			margin: 0 0 1rem 0;
		}

		p {
			text-align: left;
			line-height: 1.4;
			color: #fff;
			margin: 0 0 1em 0;
		}
	}
}

.btn-home {
	text-align: right;
	background: #00060d;
	box-shadow: none;
	transition: all 0.3s cubic-bezier(0.68, -0.75, 0.265, 1.75);
}
.btn-home:hover,
.btn-home:focus {
	transform: scale(1.1);
	box-shadow: 5px 6px 1px -1px #080f2229;
}

@media (max-width: 720px) {
	.aside-content {
		padding: 10rem 0 20rem 0;
		flex-direction: column;

		.content-img {
			width: 60%;
			order: 1;
			transform: rotate(-4deg);
		}

		.content-title {
			margin-right: 0;

			background: none;
			box-shadow: none;
			order: 2;

			h1 {
				position: static;
			}
		}
	}
}

@media (max-width: 480px) {
	.aside-content {
		.content-img {
			width: 90%;
			z-index: 13;
			transform: rotate(-4deg);
			order: 1;
		}

		.content-title {
			margin-top: -4.1rem;
			order: 2;

			h1 {
				margin: 3.6rem 0 1rem 0;
			}
		}
	}
}
</style>
