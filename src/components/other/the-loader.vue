<template>
	<div class="loading">
		<div class="loader"></div>
		<div class="loader2"></div>
	</div>
</template>

<script>
export default {
	name: 'theLoader'
}
</script>

<style lang="scss" scoped>
.loading {
	position: relative;
	font-size: 70%;
	grid-column: span 3;
	justify-self: center;
	height: 100px;
	// transform: translateX(-20px);
}

.loader,
.loader2 {
	position: absolute;
	top: 50%;
	margin-top: -40px;
	border-radius: 50%;
	width: 40px;
	height: 40px;
	background: #3e0b93;
	animation: loader reverse 1s infinite ease;
}
.loader2 {
	background: rgb(106, 0, 206);
	animation: loader 1s infinite ease;
}

@keyframes loader {
	0% {
		transform: scale(1);
	}
	50% {
		transform: scale(0.1);
	}
	100% {
		transform: scale(1);
	}
}

// @media only screen and (max-width: 930px) {
// 	.loading {
// 		grid-column: span 2;
// 	}
// }

// @media only screen and (max-width: 500px) {
// 	.loading {
// 		grid-column: span 1;
// 	}
// }
</style>
