<template>
	<div class="coupone-section">
		<h3>Možnosť kúpiť darčekové poukazy.</h3>
		<a href="#" class="btn" @click.prevent="modal = true">Kúpiť</a>
		<img src="@/assets/img/undraw_happy.svg" alt />
		<svg class="shape">
			<path
				fill="#FF0066"
				d="M58.1,-19C67.1,9,60.7,41.9,43.5,52.8C26.2,63.7,-1.9,52.5,-23.5,35.9C-45.1,19.4,-60.2,-2.5,-55.2,-24.9C-50.2,-47.3,-25.1,-70.2,-0.3,-70.1C24.5,-70,49,-46.9,58.1,-19Z"
				transform="translate(100 100)"
			/>
		</svg>

		<transition name="modal">
			<TheModal v-if="modal" @closeModal="modal = $event">
				<price-giftcard @closeModal="modal = $event" />
			</TheModal>
		</transition>
	</div>
</template>

<script>
import TheModal from '@/components/other/the-modal.vue'
import PriceGiftcard from '@/components/cennik/price-giftcard.vue'
export default {
	components: {
		TheModal,
		PriceGiftcard
	},
	data() {
		return {
			modal: false
		}
	}
}
</script>

<style lang="scss" scoped>
.coupone-section {
	position: relative;
}
.btn {
	background: #bf1052;
	color: #fdfdff;
	transition: all 0.5s ease;
}
.btn:hover,
.btn:active {
	// background: #352c7f;
	transform: scale(1.1);
}

img {
	opacity: 0.3;
	position: absolute;
	width: 330px;
	height: auto;
	bottom: -130px;
	z-index: -2;
	transform: translate(-40px, -80px) rotate(10deg);
	transition: all 1s cubic-bezier(0.68, -0.75, 0.265, 1.75);
}

.btn:hover ~ img {
	opacity: 1;
	transform: translate(-40px, -80px) rotate(10deg) scale(1.1);
}
.btn:hover ~ .shape {
	transform: translateX(23px) scale(1.3);
}

.shape {
	position: absolute;
	height: 161px;
	transform: translateX(23px) scale(1.6);

	bottom: -66px;
	z-index: -3;
	opacity: 0.1;
	transition: all 1s cubic-bezier(0.68, -0.75, 0.265, 1.75);

	path {
		fill: #280d56;
	}
}
</style>
