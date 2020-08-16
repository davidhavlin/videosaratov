<template>
	<div class="price-calculator">
		<transition name="fadeModal">
			<div class="result"
				 v-if="resultShow">
				<a class="result-exit"
				   href="#"
				   @click.prevent="resultShow = !resultShow">
					<i class="far fa-times-circle"></i>
				</a>
				<div>
					Bude ťa to stáť:
					<span class="result-span">{{ result }}</span>€.
				</div>
			</div>
		</transition>
		<h1>Cenová kalkulačka</h1>
		<form id="time-form">
			<label for="time">Ako dlho chceš hrať? (v minutách)</label>
			<div class="inputTime">
				<span class="spanTime"
					  v-if="inputTime > 240">Maximálne 4 hodiny!</span>
				<span class="spanTime"
					  v-else-if="
					(inputTime < 5 && !inputTime == '') || inputTime == 0
				">Minimálne 5 minút!</span>

				<input ref="inputTime"
					   id="time"
					   type="number"
					   min="5"
					   max="240"
					   v-model.number="inputTime"
					   :class="{bordered: errorTime}" />
			</div>

			<label for="people">Kolkatí chcete hrať?</label>
			<div class="inputPeople">
				<span class="spanPeople"
					  v-if="inputPeople > 10">Maximálne 10 osôb!</span>
				<span class="spanPeople"
					  v-else-if="
						(inputPeople < 1 && !inputPeople == '') ||
							inputPeople == 0
					">Minimálne 1 osoba!</span>

				<input ref="inputPeople"
					   id="people"
					   type="number"
					   min="1"
					   max="10"
					   v-model.number="inputPeople"
					   :class="{bordered: errorPeople}" />
			</div>

			<label for="card">Máš vernostnú kartu?</label>
			<select class="selectCard"
					ref="selectCard"
					id="card"
					v-model="inputCard"
					:class="{ bordered: error }">
				<option value="def">Vyber z možností..</option>
				<option value="1">Áno</option>
				<option value="0">Nie</option>
			</select>

			<div class="price-buttons">
				<button class="calculate-btn"
						@click.prevent="calculatePrice()">Vypočítať</button>
				<input class="reset-btn"
					   type="reset"
					   @click.prevent="resetForm()" />
			</div>
		</form>
	</div>
</template>

<script>
export default {
	data() {
		return {
			error: false,
			errorTime: false,
			errorPeople: false,
			inputTime: null,
			inputPeople: null,
			inputCard: 'def',
			result: 0,
			resultShow: false
		}
	},
	methods: {
		calculatePrice() {
			if (!this.inputTime) {
				this.errorTime = true
			}
			if (!this.inputPeople) {
				this.errorPeople = true
			}
			if (this.inputCard == 'def') {
				this.error = true
			}
			if (!this.errorTime && !this.errorPeople && !this.error) {
				let minutePrice = 0.4
				let price =
					this.inputTime * minutePrice * (this.inputPeople * 1.05)
				if (this.inputCard == 1) {
					this.result = (price - 0.1 * price).toFixed(2)
				} else {
					this.result = price.toFixed(2)
				}
				this.error = false
				this.resultShow = true
			}
		},

		resetForm() {
			this.$refs.inputTime.value = ''
			this.$refs.inputPeople.value = ''
			this.$refs.selectCard.value = 'def'
			this.inputTime = ''
			this.inputPeople = ''
			this.inputCard = 'def'
			this.$refs.inputTime.focus()
		}
	},

	watch: {
		inputTime(newValue, oldValue) {
			if (newValue > 240 || newValue < 5) {
				this.errorTime = true
			} else {
				this.errorTime = false
			}
		},

		inputPeople(newValue, oldValue) {
			if (newValue > 10 || newValue < 1) {
				this.errorPeople = true
			} else {
				this.errorPeople = false
			}
		},

		inputCard(newValue, oldValue) {
			if (newValue == 'def') {
				this.error = true
			} else {
				this.error = false
			}
		}
	}
}
</script>

<style lang="scss" scoped>
h1 {
	margin-top: 0;
	color: #0b87dc;
}
span {
	color: #bf1052;
	font-size: 0.9em;
}
option {
	background: #180833;
}

.result {
	position: absolute;
	display: flex;
	justify-content: center;
	align-items: center;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: #423fa6eb;
	padding: 2em;
	z-index: 10;
	color: #fff;
}

.result-span {
	font-size: 1.2em;
	color: #309fea;
	font-weight: bold;
}

.result-exit {
	font-size: 1.4em;
	display: inline-block;
	text-decoration: none;
	padding: 1em;
	position: absolute;
	color: #1b083b;
	top: 0;
	right: 0;
}

.price-calculator {
	position: relative;
	max-width: 500px;
	padding: 2em;
	// margin: 2em;
	border-radius: 0.5em;
	overflow: hidden;
	background: #170732;
	color: #b4a6ff;
	transition: all 1s ease;
	box-shadow: 1px 1px 21px 3px #1707329e;
}
form {
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	text-align: center;
}
label {
	margin-bottom: 0.5em;
}

input:not([type='reset']),
select {
	border: none;
	width: 20em;
	display: inline-block;

	padding: 0.7em;
	color: #fff;
	font-family: inherit;
	font-weight: inherit;
	font-size: 1em;
	border-radius: 0.5em;
	outline: none;
	transition: all 500ms cubic-bezier(0.68, -0.75, 0.265, 1.75);
	background: #1c093c;
}
input.bordered,
select.bordered {
	outline: 2px solid #bf1052;
}

.price-buttons {
	display: flex;
	width: 20em;
}
.calculate-btn,
.reset-btn {
	color: #fff;
	background: #1c093c;
	border: none;
	padding: 1em 1.5em;
	font-family: inherit;
	border-radius: 0.5em;
	transition: all 0.1s ease;
}

.calculate-btn {
	width: 60%;
	margin-right: 1em;
	background-color: #0b87dc;
}
.reset-btn {
	width: 40%;
}

.calculate-btn:focus,
.reset-btn:focus {
	outline: none;
}

.calculate-btn:active {
	transform: translateY(5px);
}

.inputTime,
.inputPeople,
.selectCard {
	position: relative;
	margin-bottom: 1.5em;
}

.spanTime,
.spanPeople {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
}

@media (max-width: 860px) {
	.price-calculator {
		width: 80%;
	}
}
@media (max-width: 580px) {
	.price-calculator {
		width: 100%;
		padding: 1em;
	}
}
@media (max-width: 480px) {
	input:not([type='reset']),
	select {
		width: 100%;
	}
	.inputTime,
	.inputPeople,
	.selectCard {
		width: 100%;
	}
	.price-buttons {
		width: 100%;
	}

	.calculate-btn,
	.reset-btn {
		padding: 1em 1em;
	}
}
</style>
