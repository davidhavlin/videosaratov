<template>
	<div class="category-navigation">
		<a
			v-for="(link, index) in links"
			:key="index"
			href="#"
			class="btn"
			:class="{
				active: index == current && !searching,
				disabled: loading
			}"
			:data-class="withoutDia(link, vocals)"
			@click.prevent="categorizeIt($event), (current = index)"
		>{{ link }}</a>
	</div>
</template>

<script>
export default {
	props: {
		searching: {
			type: Boolean
		}
	},
	data() {
		return {
			clicked: false,
			loading: false,
			links: [
				'Všetky',
				'Akčné',
				'Zábavné',
				'Hororové',
				'Dobrodružné',
				'Pre deti',
				'Logické',
				'Športové'
			],
			vocals: {
				á: 'a',
				ä: 'a',
				é: 'e',
				č: 'c',
				š: 's',
				ž: 'z'
			},
			current: 0
		}
	},

	methods: {
		withoutDia(str, map) {
			return str
				.toLowerCase()
				.replace(/[^A-Za-z]/g, x => map[x] || x)
				.replace(/\s/g, '')
		},

		categorizeIt(event) {
			this.clicked = true
			this.$emit('clickedOnNav', this.clicked)

			let category = event.target.dataset.class
			let games = document.querySelectorAll('.game')

			if (this.loading || event.target.className.includes('active')) {
				return
			}

			games.forEach(game => {
				game.classList.add('visually-hidden')
				game.addEventListener('transitionend', () => {
					game.classList.add('hide')

					this.loading = true
					this.$emit('loadingGallery', this.loading)
				})
			})

			setTimeout(() => {
				this.loading = false
				this.$emit('loadingGallery', this.loading)

				if (category == 'vsetky') {
					games.forEach(game => {
						game.classList.remove('visually-hidden')
						game.classList.remove('hide')
						game.classList.add('show')
					})
					return
				}

				for (let i = 0; i < games.length; i++) {
					if (games[i].className.includes(category)) {
						games[i].classList.remove('visually-hidden')
						games[i].classList.remove('hide')
						games[i].classList.add('show')
					} else {
						games[i].classList.remove('visually-hidden')
						games[i].classList.remove('show')
						games[i].classList.add('hide')
					}
				}

				this.clicked = false
				this.$emit('clickedOnNav', this.clicked)
			}, 1300)
		}
	},
	mounted() {
		this.$emit('loadingGallery', this.loading)
	},
	computed: {
		searchInput() {
			return document.getElementById('search-input')
		}
	}
}
</script>

<style lang="scss" scoped>
.btn {
	background: #570de9;
	margin-right: 0.1em;
	color: #ffffff;
	font-weight: 500;
}
.btn:hover {
	background: #34097a;
}
.btn:hover.active {
	background-color: #9b0941;
	cursor: default;
}
.active {
	color: #fff;
	background-color: #ea093e;
	box-shadow: -2px 3px 0px 1px #170732, -6px 7px 19px 0px rgb(23, 7, 50);
	transform: translateY(-10px);
}
.disabled {
	pointer-events: none;
	cursor: default;
}

@media only screen and (max-width: 860px) {
	.btn {
		margin-bottom: 0.5em;
		margin-right: 0.5em;
	}
	.category-navigation {
		text-align: left;
	}
}
</style>
