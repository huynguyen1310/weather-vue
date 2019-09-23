<template>
	<div class="home">
		<div class="d-flex justify-content-center">
			<div class="my-4">
				<div
					class="card text-white bg-secondary mb-3"
					style="max-width: 20rem;"
				>
					<div class="card-header">Current Weather</div>
					<div class="card-body">
						<h4 class="card-title">{{ forecast.currently.summary }}</h4>
						<p class="card-text temp">
							{{ forecast.currently.icon }}
							{{ forecast.currently.temperature }} &#176;F
						</p>
						<p class="card-text">
							{{ forecast.currently.precipProbability }}% change of
							precipitation
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import API from "@/lib/api";
export default {
	name: "home",

	data() {
		return {
      forecast: {},
    }
	},

	mounted() {
		API.getForeCast().then(result => {
			this.forecast = result;
		});
	}
};
</script>

<style scoped>
  .temp {
    font-size: 2em;
  }
</style>