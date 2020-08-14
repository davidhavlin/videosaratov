<template>
	<transition
		name="elevator"
		enter-active-class="animate__animated animate__bounceIn"
		leave-active-class="animate__animated animate__bounceOut"
	>
		<div class="elevator" v-show="showElevator" @click="jumpTo()">
			<div class="fill"></div>
			<i class="fas fa-chevron-circle-up"></i>
		</div>
	</transition>
</template>

<script>
export default {
	props: {
		showElevator: {
			type: Boolean
		}
	},
	data() {
		return {}
	},
	methods: {
		jumpTo() {
			window.scrollTo(0, 0)
		}
	}
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_colors.scss';
.elevator {
	color: #1079fa;
	z-index: 99;
	position: fixed;
	font-size: 3.6em;
	height: 71px;
	width: 69px;
	right: 2%;
	bottom: 20%;
	cursor: pointer;
	transition: all 0.3s ease;
	background: #220955;
	border-radius: 50%;
}

.elevator:hover {
	color: #0c5ec2;
	transform: translateY(-5px);
}
</style>
