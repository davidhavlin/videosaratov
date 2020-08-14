<template>
	<div class="container">
		<div class="number">404</div>
		<div class="ups">Ups, stránku sme nenašli..</div>
		<router-link class="home-btn" :to="{ name: 'Home'}">Domov</router-link>
	</div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.container {
	height: 30em;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}

.number {
	font-weight: bold;
	text-shadow: -3px -2px 0px #352b7e;
	color: #2c2065;
	font-size: 14em;
}

.home-btn {
	text-decoration: none;
	padding: 0.6em 0.9em;
	color: #0c85da;
	font-weight: 500;
	background: #322674;
	border-radius: 10px;
	border: 1px solid #413da3;
	margin-top: 1em;
	box-shadow: 5px 5px 8px #0e061c1c;
}
</style>