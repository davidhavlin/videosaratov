<template>
	<div class="burger-bg">
		<div class="burger" @click="openMobileMenu()">
			<i class="fas fa-bars"></i>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		closeBurger: {
			type: Boolean
		}
	},
	data() {
		return {
			open: false,
			burgerVisible: false
		}
	},

	methods: {
		openMobileMenu() {
			this.open = true

			this.$emit('openMenu', this.open)
		}
	}
}
</script>

<style lang="scss" scoped>
.burger {
	width: 80px;
	display: block;
	font-size: 2em;
	color: #ffffff;
	padding: 0.8rem;
	cursor: pointer;
	transition: transform 0.5s ease;

	&:hover {
		transform: scale(0.9);
	}
}
.burger-bg {
	position: fixed;
	background: #35069f;
	width: 65px;
	border-radius: 50%;
	z-index: 20;
	display: flex;
	top: 0.2rem;
	right: 0.4rem;
	justify-content: center;
	align-items: center;
}

[data-scroll-dir-y='1'] .burger-bg {
	animation: burger 0.5s forwards cubic-bezier(0.68, -0.75, 0.265, 1.75);
}
[data-scroll-dir-y='-1'] .burger-bg {
	animation: burgerOut 0.5s forwards cubic-bezier(0.68, -0.75, 0.265, 1.75);
}

@keyframes burger {
	from {
		transform: translateX(0);
		opacity: 1;
	}
	to {
		transform: translateX(100px);
		opacity: 0;
	}
}

@keyframes burgerOut {
	from {
		transform: translateX(100px);
		opacity: 0;
	}
	to {
		transform: translateX(0);
		opacity: 1;
	}
}
</style>