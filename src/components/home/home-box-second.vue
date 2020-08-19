<template>
	<aside class="content" ref="content">
		<div class="content-img">
			<img src="@/assets/img/content.jpg" alt />
		</div>
		<div class="content-title">
			<h1>
				Nová dimenzia
				<span>zábavy</span>
			</h1>
			<p>
				Zažite virtuálne cestovanie po horách, prechádzku v podmorskom
				svete, kreslenie v 3D priestore alebo si zahrajte akčnú,
				športovú alebo logickú hru tak, ako to nepoznáte.
				<br />
				<strong>Vstúpte priamo do hry!</strong>
			</p>

			<a class="btn btn-home" @click.prevent="showInfo()" rel="noopener">Objednať sa</a>
			<transition name="modal">
				<the-info v-if="info" />
			</transition>
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

.content {
	position: relative;
	grid-template-rows: repeat(6, 1fr);
	justify-items: center;

	.content-img {
		width: 90%;
		grid-column: 3 / 7;
		grid-row: 2 / 5;
		border-radius: 1em;
		overflow: hidden;
		box-shadow: -5px 5px 0px 0px #1079fb,
			-11px 11px 22px 0px rgb(47 137 246 / 14%);
		transform: rotate(-5deg);
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
		grid-column: 1 / 4;
		grid-row: 3 / 6;
		background: linear-gradient(12deg, #00060c 0%, #060d20 100%);
		box-shadow: -11px 11px 22px 0px rgba(0, 0, 56, 0.2);
		padding: 1em;
		border-radius: 1em;

		h1 {
			font-size: 2.4em;
			position: absolute;
			top: 5rem;
			left: 3.3em;
			color: #ffffff;
			transform: rotate(-5deg);
			margin: 0;

			span {
				text-align: left;
				display: block;
				// color: #f30438;
			}
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

@media (max-width: 810px) {
	.content {
		display: flex;
		flex-direction: column;
		margin: 7rem 1rem 11rem 1rem;

		.content-img {
			max-width: 500px;
			align-self: flex-start;
		}

		.content-title {
			align-self: flex-end;
			margin-top: -4.1rem;

			h1 {
				font-size: 2.4em;
				position: absolute;
				top: -3.2rem;
				left: 0;
				text-align: left;
				line-height: 1.1;
				margin: 0 0 1rem 0;

				span {
					display: inline;
				}
			}
		}
	}
}

@media (max-width: 480px) {
	.content {
		display: flex;
		flex-direction: column;
		margin: 7rem 1rem 11rem 1rem;

		.content-img {
			max-width: 500px;
			align-self: center;
			z-index: 13;
		}

		.content-title {
			align-self: center;
			margin-top: -4.1rem;
			max-width: 280px;

			h1 {
				font-size: 2.1em;
				position: static;
				top: 0;
				left: 0;
				text-align: left;
				line-height: 1.1;
				margin: 5rem 0 1rem 0;
				transform: none;

				span {
					display: inline;
				}
			}
		}
	}
}
</style>
