<template>
	<div>
		<form v-on:keyup="debouncedSearch()">
			<div @click="searchInput.focus()" class="icon">
				<i class="fas fa-search"></i>
			</div>

			<input id="search-input" ref="search" type="text" placeholder="Hľadaj hru.." v-model="search" />
		</form>
	</div>
</template>

<script>
import { debounce } from 'lodash-es'

export default {
	props: {
		clicked: {
			type: Boolean
		}
	},
	watch: {
		clicked(newValue, oldValue) {
			this.search = ''
			this.searching = false
			this.$emit('searching', this.searching)
		}
	},
	data() {
		return {
			search: '',
			searching: false
		}
	},
	methods: {
		debouncedSearch: debounce(function() {
			this.searchGame()
		}, 600),

		searchGame() {
			let searchValue = this.search.toLowerCase().trim()
			let games = document.querySelectorAll('.game')

			if (searchValue.length > 0) {
				this.searching = true
				this.$emit('searching', this.searching)
			} else {
				this.searching = false
				this.$emit('searching', this.searching)
			}

			games.forEach(game => {
				if (game.textContent.toLowerCase().includes(searchValue)) {
					game.classList.remove('hide')
					game.classList.add('show')
				} else {
					game.classList.remove('show')
					game.classList.add('hide')
				}
			})
		}
	},
	computed: {
		searchInput() {
			return document.getElementById('search-input')
		}
	},
	mounted() {
		this.$emit('searching', this.searching)
	}
}
</script>

<style lang="scss" scoped>
form {
	display: flex;
	justify-content: center;
	align-items: center;
}

.fa-search {
	color: rgba(0, 0, 0, 0.3);
	font-size: 1.8em;
	display: inline-block;
	position: relative;
	cursor: pointer;
}

input {
	color: #fff;
	font-family: inherit;
	font-weight: inherit;
	font-size: 1em;
	display: inline-block;
	width: 10em;
	padding: 0.7em;
	border-radius: 0.5em;
	border: none;
	background: transparent;
	outline: none;
	transition: all 502ms cubic-bezier(0.68, -0.75, 0.265, 1.75);
	background: rgba(22, 7, 48, 0.78);
	margin-left: 0.2em;
}
::placeholder {
	color: #7f24ff42;
}

input:focus {
	width: 25em;
	transition: all 601ms cubic-bezier(0.68, -0.75, 0.265, 1.75);
	box-shadow: 0px 0px 15px -4px rgba(0, 0, 0, 0.15);
	background: #fff;
	margin-left: 0.5em;
	color: #1c083d;
}
input:focus.fa-search {
	color: #fff;
}

input:focus::placeholder {
	color: rgba(0, 0, 0, 0.3);
}
</style>
