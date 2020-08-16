<template>
	<div class="modal">
		<a class="modal-exit exit"
		   @click="closeModal($event)">
			<i class="exit far fa-times-circle"></i>
		</a>
		<div class="modal-content">
			<slot></slot>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			modal: false
		}
	},

	methods: {
		closeModal(event) {
			this.$emit('closeModal', this.modal)
		}
	}
}
</script>

<style lang="scss" scoped>
.modal {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: #0e021ee0;
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 110;
}
.modal-content {
	color: #000;
	// padding: 2em;
	border-radius: 1em;
	background: #fffffff5;
	animation: content 0.5s forwards ease;
	z-index: 10000;
	overflow: hidden;
}

.modal-exit {
	font-size: 2em;
	display: inline-block;
	text-decoration: none;
	padding: 1em;
	position: absolute;
	color: #0b87dc;
	top: 0;
	right: 0;
	cursor: pointer;
	z-index: 100000;
}

@keyframes content {
	from {
		transform: scale(0.7);
	}
	to {
		transform: scale(1);
	}
}

@media (max-width: 520px) {
	.modal-content {
		border-radius: 0;
	}
}

@media (max-width: 400px) {
	.modal-exit {
		padding: 0.4em;
		// top: 79px;
	}
	.modal-content {
		height: 100%;
		display: flex;
		align-items: center;
	}
}
</style>
