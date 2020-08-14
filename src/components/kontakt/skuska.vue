<template>
	<v-container fluid>
		<v-row align="center">
			<v-col class="d-flex" cols="12" sm="6">
				<v-select :items="items" label="Standard" :dark="true"></v-select>
			</v-col>

			<v-col class="d-flex" cols="12" sm="6">
				<v-select :items="items" filled label="Filled style"></v-select>
			</v-col>

			<v-col class="d-flex" cols="12" sm="6">
				<v-select :items="items" label="Outlined style" outlined></v-select>
			</v-col>

			<v-col class="d-flex" cols="12" sm="6">
				<v-select background-color="yellow" :items="items" label="Solo field" solo></v-select>
			</v-col>
		</v-row>
		<v-parallax src="https://cdn.vuetifyjs.com/images/parallax/material.jpg">
			<h1>HELOOOOOOOOOOU</h1>
		</v-parallax>
	</v-container>
</template>

<script>
export default {
	data() {
		return {
			items: ['Foo', 'Bar', 'Fizz', 'Buzz']
		}
	}
}
</script>
