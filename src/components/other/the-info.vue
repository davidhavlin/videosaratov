<template>
	<div class="info">
		<i class="fas fa-info-circle"></i>
		<p>Táto stránka slúži len na ukážku.</p>
	</div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.info {
	text-align: left;
	position: absolute;
	font-weight: bold;
	width: 150px;
	background: #fff;
	color: #0f0d22;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 1em;
	border-radius: 1rem;
	z-index: 10000000;

	p {
		margin: 0;
		margin-top: 0.5rem;
	}

	.fa-info-circle {
		font-size: 1.6em;
	}
}
</style>