<!-- views/SearchResults.vue -->
<template>
  <Navbar/>
  <div>
    <p class="text-center text-lg mx-2 font-bold">Showing results for: {{ query }}</p>
    <div class="flex mx-4">
          <div
            v-for="city in cities"
            :key="city.id"
            class="city-card"
          >
            {{ city.name }}
          <p><strong>Region:</strong> {{ city.region }}</p>
          <p><strong>Latitude:</strong> {{ city.latitude }}</p>
          <p><strong>Longitude:</strong> {{ city.longitude }}</p>
          <p><strong>Population:</strong> {{ city.population }}</p>
          </div>
        </div>
  </div>
</template>

<script>
// import CityItem from '@/components/CityItem.vue';
import { searchCity, citiesInRegion } from '@/api/countries.api';
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'SearchResults',
  components: {
    Navbar,
  },
  props: ['query', 'countryCode'],
  data() {
    return {
      cities: []
    };
  },
  watch: {
    countryCode: 'fetchCities',
    query: 'fetchCities'
  },
  methods: {
    async fetchCities(){
      try {
        if(this.query){
          const response = await searchCity(this.query);
          this.cities = response.data; 
        } else if(this.countryCode){
          const response = await citiesInRegion(this.countryCode);
          this.cities = response.data;
        }
        } catch (error) {
          console.error('Error fetching search results:', error);
        }
    }
  },
  async created() {
    await this.fetchCities();
  },
};
</script>

