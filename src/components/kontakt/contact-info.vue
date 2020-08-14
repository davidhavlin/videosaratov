<template>
	<div class="top-info">
		<div>
			<h3>Kontakt:</h3>
			<p>
				Adresa: Saratovská 6/C, Rustica, 84102 Bratislava
				<br />Tel číslo: 0903 459 516
				<br />email:
				<strong>vrvideosaratov@gmail.com</strong>
			</p>
		</div>
		<div class="contact-hours">
			<h3>Otváracie hodiny:</h3>
			<p>
				Pondelok - 12:00 - 21:00
				<br />Utorok - 12:00 - 21:00
				<br />Streda - 12:00 - 21:00
				<br />Štvrtok - 12:00 - 21:00
				<br />Piatok - 12:00 - 21:00
				<br />Sobota - 13:00 - 21:00
				<br />Nedeľa - Zatvorené
			</p>
		</div>
	</div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
h3 {
	color: #5b0bff;
	margin: 0;
}

p {
	color: #b4a6ff;
	margin-top: 0.7em;
}

strong {
	color: #da0241;
}

.contact-hours {
	text-align: left;
}

.top-info {
	display: flex;
	flex-direction: column;
	text-align: left;
	justify-content: flex-start;
}

@media (max-width: 920px) {
	.top-info {
		flex-direction: row;
		justify-content: space-between;
		margin-top: 2em;
	}

	.contact-hours {
		margin-left: 2em;
	}
}
@media (max-width: 670px) {
	.top-info {
		flex-direction: column;
		justify-content: flex-start;
		margin-top: 4em;
		align-items: center;
		text-align: center;
	}
	.contact-hours {
		margin-left: 0;
		margin-top: 2em;
		text-align: center;
	}
}
</style>