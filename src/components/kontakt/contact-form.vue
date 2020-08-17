<template>
	<div class="formular">
		<h2>Napište nám</h2>
		<form @submit.prevent="sendEmail">
			<div>
				<label for="form-name">Name</label>

				<input id="form-name" class="input" type="text" required v-model="name" />
			</div>

			<div>
				<label for="form-email">Email</label>

				<input value="@" id="form-email" class="input" type="email" required v-model="email" />
			</div>
			<textarea
				placeholder="Vaša správa.."
				class="input"
				id
				cols="30"
				rows="10"
				maxlength="100%"
				v-model="textarea"
				required
			></textarea>
			<div>
				<button>Odoslať</button>
			</div>
		</form>
		<transition name="email">
			<div class="img-container" v-show="emailSent">
				<img src="@/assets/img/undraw_Mail.svg" alt />
				<p class="email-sent">Email úspešne odoslaný</p>
			</div>
		</transition>
	</div>
</template>

<script>
export default {
	data() {
		return {
			focusInput: false,
			emailSent: false,
			name: null,
			email: '@',
			textarea: null
		}
	},
	methods: {
		sendEmail() {
			this.emailSent = true
			setTimeout(() => {
				this.name = null
				this.email = '@'
				this.textarea = null
				this.emailSent = false
			}, 1500)
		}
	}
}
</script>

<style lang="scss" scoped>
.email-enter-active,
.email-leave-active {
	transition: all 0.5s ease-in-out;
}
.email-enter,
.email-leave-to {
	opacity: 0;
	transform: scale(1.1);
}
.email-enter-to,
.email-leave {
	opacity: 1;
	transform: scale(1);
}

.formular {
	position: relative;
	width: 600px;
	margin: 8em auto;

	h2 {
		text-align: left;
	}

	.img-container {
		position: absolute;
		left: 0;
		top: 0;
		background: #1b083bcf;
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.email-sent {
		position: absolute;
		bottom: 109px;
		font-size: 1.2em;
		left: 50%;
		transform: translateX(-50%);
		margin-left: -0.3em;
		color: #3ad29f;
	}

	img {
		// position: absolute;
		width: 250px;
	}
}
form {
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 1rem;

	div {
		width: 100%;
		text-align: left;
		position: relative;
	}
	label {
		color: #5b0bff;
		display: block;
		margin-bottom: 0.5rem;
	}
	input {
		padding: 1em;
		color: #fff;
		font-family: inherit;
		width: 100%;

		&:focus {
			outline: none;
			border: 1px solid #0d83d875;
		}
	}

	textarea {
		padding: 1em;
		grid-column: span 2;
		color: #fff;
		font-family: inherit;
		max-width: 100%;
		min-width: 100%;

		&:focus {
			outline: none;
			border: 1px solid #0d83d875;
		}
	}
	::placeholder {
		color: #629ec989;
	}

	button {
		padding: 1em;
		background: #5b0bff;
		color: #fff;
		font-family: inherit;
		border: none;
		border-radius: 0.5rem;
		width: 50%;
		cursor: pointer;

		&:hover,
		&:focus {
			background: #4208b5;
			outline: none;
		}
	}
}

.input {
	border: 1px solid #200e41;
	background: #1f0a42;
	border-radius: 0.5rem;
}

@media (max-width: 690px) {
	.formular {
		width: 100%;
	}
}
@media (max-width: 430px) {
	form {
		grid-template-columns: 1fr;

		textarea {
			grid-column: span 1;
		}

		button {
			width: 100%;
		}
	}
}
</style>