<template>
  <div class="home">
    <div class="d-flex justify-content-center">
      <div class="my-4">
        <div class="my-2">
          <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="Search" v-model="location"/>
            <div class="input-group-append">
              <button class="btn btn-secondary" type="submit" @click="updateLocation">Search</button>
            </div>
          </div>
        </div>

        <div class="card text-white bg-secondary mb-3" style="max-width: 20rem;" v-if="forecast">
          <div class="card-header">Current Weather in {{ address }}</div>
          <div class="card-body">
            <h4 class="card-title">{{ forecast.currently.summary }}</h4>
            <p class="card-text temp">{{ Math.floor((forecast.currently.temperature - 32)/1.8) }} &#176;C</p>
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
      forecast: null,
      location: localStorage.location || '',
      address: localStorage.address || '',
    };
  },
  mounted() {
    this.loadWeather(localStorage.lat || '40.730610',localStorage.lng || '-73.935242');
  },
  methods : {
    loadWeather(lat,lng) {
      localStorage.lat = lat;
      localStorage.lng = lng;
      
      API.getAddress(lat,lng).then(result => {
        this.address = [result.name,result.street].join(' ');
        localStorage.address = this.address;
      });
      
      API.getForeCast(lat,lng).then(result => {
        this.forecast = result;
      });
    },

    updateLocation() {
      localStorage.location = this.location; 
      API.getCoordinates(this.location).then(result => 
        this.loadWeather(result.latitude,result.longitude)
      );
    }
  }
};
</script>

<style scoped>
.temp {
  font-size: 2em;
}
</style>