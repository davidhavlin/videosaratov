<template>
	<div class="table">
		<h1>Tabuľka cien</h1>
		<table>
			<tr>
				<th>Čas</th>
				<th>Cena</th>
			</tr>
			<tr>
				<td>5 min</td>
				<td>1 x zadarmo</td>
			</tr>
			<tr>
				<td>10 min</td>
				<td>4€</td>
			</tr>
			<tr>
				<td>30 min</td>
				<td>11€</td>
			</tr>
			<tr>
				<td>60 min</td>
				<td>20€</td>
			</tr>
			<tr>
				<td>90 min</td>
				<td>29€</td>
			</tr>
			<tr>
				<td>120 min</td>
				<td>35€</td>
			</tr>

			<tr>
				<td>180 min</td>
				<td>50€</td>
			</tr>

			<tr>
				<td>240 min</td>
				<td>65€</td>
			</tr>
		</table>
	</div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
h1 {
	margin-top: 0;
	color: #0b87dc;
}
.table {
	// margin: 2em auto;
	padding: 2em;
	max-width: 500px;
	border-radius: 0.5em;
	overflow: hidden;
	background: transparent;
	transition: all 1s ease;
}
table {
	border-collapse: collapse;
	width: 100%;
	border: 2px dashed rgba(84, 89, 193, 0.1);
	border-radius: 1rem;
}
td,
th {
	padding: 0.7em 1em;
	color: #b4a6ff;
}
th {
	color: #fff;
	background: #170732;
}
tr {
	border: 2px dashed rgba(84, 89, 193, 0.1);
}

@media (max-width: 860px) {
	.table {
		width: 80%;
		padding: 2em 0;
	}
}
@media (max-width: 580px) {
	.table {
		width: 100%;
		padding: 2em 0;
	}
}
</style>
