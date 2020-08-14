<template>
	<footer>
		<main>
			<fieldset>
				<legend style="padding: 1em 1em ">
					<h2>Company</h2>
				</legend>
				<p>
					© 2018 VideoSaratov
					<br />VR VideoSaratov - mini VR box
					<br />
					<br />
					<strong>Rezervácie email:</strong> vrvideosaratov@gmail.com
					<br />
					<strong>mobil:</strong> 0903 459 516
				</p>
			</fieldset>
			<fieldset>
				<legend style="padding: 1em 1em ">
					<h2>Learn more</h2>
				</legend>
				<p>
					Požičiavanie a predaj DVD / Blue Ray. Lorem ipsum dolor sit
					amet, consectetur adipiscing elit, sed do eiusmod tempor
					incididunt ut labore et dolore magna aliqua.
				</p>
				<a href="#" class="web">Videosaratov web stránka</a>
			</fieldset>
			<fieldset>
				<legend style="padding: 1em 1em ">
					<h2>Connect with us</h2>
				</legend>

				<ul>
					<li>
						<a href="#">
							<i class="fab fa-facebook-square icon"></i> Facebook
						</a>
					</li>
					<li>
						<a href="#">
							<i class="fab fa-google-plus-square icon"></i>
							Google+
						</a>
					</li>
					<li>
						<a href="#">
							<i class="fab fa-twitter-square icon"></i> Twitter
						</a>
					</li>
					<li>
						<a href="#">
							<i class="fas fa-envelope-square icon"></i> Email
						</a>
					</li>
				</ul>
			</fieldset>
		</main>
		<h3>
			Made by
			<strong>David Havlín</strong>
		</h3>
	</footer>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.fa-facebook-square {
	color: rgb(8, 77, 238);
}
.fa-google-plus-square {
	color: rgb(240, 51, 3);
}
.fa-twitter-square {
	color: rgb(7, 173, 233);
}
.fa-envelope-square {
	color: rgb(238, 119, 8);
}
.icon {
	margin-bottom: 0.3em;
	font-size: 1.7em;
	transition: all 0.3s ease;
	box-shadow: 3px 3px 4px #0e061c63;
}

.web {
	text-decoration: underline;
	display: block;
	margin-top: 1em;
}

footer {
	width: 100%;
	margin: 8em 0;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}

main {
	max-width: 1000px;
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	justify-content: center;
	gap: 10px;
	padding: 0 1em;
}

fieldset {
	color: #ffffffb8;
	font-size: 0.9em;
	text-align: center;
	border: 2px dashed rgba(84, 89, 193, 0.1);
	border-radius: 1rem;
	padding: 2em;
}
legend {
	text-align: left;
}

p {
	margin: 0;
	margin-top: -2em;
}

h2 {
	color: #fff;
	font-size: 1.3em;
}

h3 {
	margin-top: 8em;
	color: rgba(14, 6, 28, 1);
	font-weight: 500;
}

a {
	text-decoration: none;
	color: #fff;
}

a:hover {
	color: rgba(84, 89, 193, 1);
	text-decoration: underline;
}
a:hover .icon {
	transform: translateY(-7px);
}

ul {
	display: flex;
	margin: 0;
	padding: 0;
}

li {
	width: fit-content;
	display: block;
	list-style-type: none;
	margin-right: 0.5em;
}
li:last-child {
	margin-right: 0;
}

@media only screen and (max-width: 860px) {
	main {
		grid-template-columns: 1fr 1fr;
		justify-content: center;
	}
	fieldset {
		max-width: 320px;

		padding: 2em;
	}
}

@media only screen and (max-width: 570px) {
	main {
		grid-template-columns: 1fr;
	}
	fieldset {
		max-width: 320px;
		padding: 2em;
	}
}
</style>
