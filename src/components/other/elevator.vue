<template>
	<transition name="elevator"
				enter-active-class="animate__animated animate__bounceIn"
				leave-active-class="animate__animated animate__bounceOut">
		<div class="elevator"
			 v-show="showElevator"
			 @click="jumpTo()">
			<div class="fill"></div>
			<i style="display: block"
			   class="fas fa-chevron-circle-up"></i>
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
	color: #fc1269;
	z-index: 99;
	position: fixed;
	font-size: 3.6em;
	height: 71px;
	width: 69px;
	right: 2%;
	bottom: 20%;
	cursor: pointer;
	transition: all 0.3s ease;
	// background: #220955;
	border-radius: 50%;
}

.fill {
	position: absolute;
	top: 9px;
	transform: translateX(-50%);
	left: 41%;
	width: 44px;
	height: 42px;
	background: #210854;
	z-index: -1;
	border-radius: 50%;
	box-shadow: -4px -1px 14px 7px #0f061d42;
}

.elevator:hover {
	transform: translateY(-5px);
}
</style>
