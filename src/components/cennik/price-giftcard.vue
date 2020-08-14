<template>
	<div class="gift-card">
		<h1>Darčekové poukazy</h1>
		<hr style="opacity: 0.2" />
		<div class="name">
			<div class="field">
				<label class="label">Meno</label>
				<div class="control">
					<input v-model="firstName" class="input" type="text" placeholder />
				</div>
			</div>

			<div class="field">
				<label class="label">Priezvisko</label>
				<div class="control">
					<input v-model="lastName" class="input" type="text" placeholder />
				</div>
			</div>
		</div>

		<div class="field">
			<label class="label">Email</label>
			<div class="control has-icons-left has-icons-right">
				<input v-model="email" type="email" required placeholder="email@gmail.com" />
			</div>
			<p v-show="invalid">This email is invalid</p>
		</div>
		<div class="gift-info">
			<div class="field">
				<label class="label">Koľko poukazov?</label>
				<div class="control">
					<div class="select">
						<select v-model.number="howMuch">
							<option value="1">1</option>
							<option value="2">2</option>
							<option value="3">3</option>
							<option value="4">4</option>
							<option value="5">5</option>
						</select>
					</div>
				</div>
			</div>
			<div class="field">
				<label class="label">Trvanie:</label>
				<div class="control">
					<div class="select">
						<select v-model.number="howMuchTime">
							<option value="1">30 min</option>
							<option value="2">1 hod</option>
							<option value="3">2 hod</option>
							<option value="4">3 hod</option>
						</select>
					</div>
				</div>
			</div>
		</div>

		<div class="field-pay">
			<div class="control">
				<label class="radio">
					<i class="fab fa-cc-visa"></i>
					<input v-model="picked" type="radio" value="1" name="question" />
					Credit card
				</label>
				<label class="radio">
					<i class="fab fa-google"></i>
					<input v-model="picked" type="radio" value="2" name="question" />
					Google pay
				</label>
				<label class="radio">
					<i class="fab fa-paypal"></i>
					<input v-model="picked" type="radio" value="3" name="question" />
					Paypal
				</label>
			</div>
		</div>

		<div class="field-terms">
			<label class="checkbox">
				I agree to the
				<a href="#">terms and conditions</a>
				<input v-model="checked" value="1" type="checkbox" />
			</label>
		</div>
		<hr style="opacity: 0.2" />

		<div class="card-footer">
			<div class="field-buttons">
				<button class="button" @click="checkResult()">Submit</button>

				<button class="btn-cancel" @click="exitModal()">Cancel</button>
			</div>
			<div class="final-price">
				Cena spolu:
				<span>{{ calculateResult() }}€</span>
			</div>
		</div>

		<div class="error" v-if="error">Vyplnte formular</div>
		<div class="result" v-if="showResult">
			<div class="result-content">
				<p>Dakujeme {{ firstName }} {{ lastName }} za nakup.</p>
				<p>na vas email {{ email }} boli zaslane darcekove poukazy</p>
				<p>zakupene polozky: {{ howMuch }}ks {{ howMuchTime }}</p>
				<button @click="exitModal()">ok</button>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			error: false,
			invalid: false,
			modal: false,
			firstName: '',
			lastName: '',
			email: '',
			picked: '',
			checked: '',
			howMuchTime: 1,
			howMuch: 1,
			showResult: false
		}
	},
	methods: {
		exitModal() {
			this.modal = false
			this.$emit('closeModal', this.modal)
		},
		checkResult() {
			if (
				this.email &&
				this.firstName &&
				this.lastName &&
				this.howMuchTime &&
				this.howMuch &&
				this.checked
			) {
				this.showResult = true
				this.error = false
			} else {
				this.error = true
			}
		},
		calculateResult() {
			let value = 5
			return (this.howMuch * value * this.howMuchTime).toFixed(2)
		}
	}
}
</script>

<style lang="scss" scoped>
.error {
	color: red;
}

.result {
	color: #fff;
	padding: 2em;
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: #28045cdb;
	display: flex;
	justify-content: center;
	align-items: center;
}

h1 {
	font-size: 1.5em;
	margin: 0.5em 0;
}
.gift-card {
	position: relative;
	text-align: left;
	color: #2c3e50;
	padding: 2em;
	overflow: hidden;
}

input:not([type='radio']):not([type='checkbox']) {
	font-size: 1em;
	color: #2c3e50cc;
	width: 100%;
	padding: 0.7rem;
	margin-bottom: 1rem;
	border-radius: 5px;
	border: 1px solid #1104241a;
}
input:focus {
	outline: none;
}
::placeholder {
	color: rgba(94, 0, 182, 0.211);
}
select {
	padding: 0.5em;
	border-radius: 5px;
	border: 1px solid #2c3e5033;
	margin-left: 0.5em;
}

.name {
	display: flex;
	justify-content: space-between;
	margin-top: 2em;
}

.name .field {
	width: 48%;
}

.gift-info {
	display: flex;
	justify-content: center;
}
.gift-info .field {
	display: flex;
	justify-content: center;
	align-items: center;
}
.gift-info .field:first-child {
	margin-right: 1em;
}

.field-pay {
	margin: 2em 0;
}
input[type='radio'] {
	margin: 0.5em 0;
}

.field-pay .control {
	display: flex;
	justify-content: space-evenly;
	align-items: center;
}
.field-pay label {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}
.fa-cc-visa,
.fa-google,
.fa-paypal {
	font-size: 3em;
}

.field-terms {
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 2em 0;
}

.field-terms a {
	margin-right: 0.5em;
	color: #3f0b96;
}

.card-footer {
	display: flex;
	justify-content: space-between;
}

button {
	font-weight: bold;
	padding: 1em 2em;
	color: #fff;
	border: 1px solid white;
	background: #3f0b96;
	border-radius: 5px;
	margin-right: 1em;
	cursor: pointer;
}
button.btn-cancel {
	background: #f5f5f6;
	color: #3f0b968f;
	border: none;
}

.final-price {
	span {
		color: #3f0b96;
		font-weight: bold;
	}
}

@media (max-width: 460px) {
	button {
		padding: 1em 1em;
		margin-right: 0.1em;
	}
	.gift-card {
		padding: 1em;
	}
}
@media (max-width: 400px) {
	.gift-info {
		flex-direction: column;
	}
	.gift-info .field:first-child {
		margin-bottom: 1em;
	}
}
</style>
