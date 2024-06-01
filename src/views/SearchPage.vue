<template>
  <Navbar />
  <div class="flex ">
    <div>
      <p class="text-center text-lg mt-5 font-bold">Showing search results... {{ query }}</p>
      <div class="flex justify-center gap-6 flex-wrap m-4">
        <div v-for="city in cities" :key="city.id" class="city-card">
          <p>{{ city.name }}</p>
          <p class="text-primary"><strong>Region:</strong> {{ city.region }}</p>
          <p class="text-primary"><strong>Latitude:</strong> {{ city.latitude }}</p>
          <p class="text-primary"><strong>Longitude:</strong> {{ city.longitude }}</p>
          <p class="text-primary"><strong>Population:</strong> {{ city.population }}</p>
        </div>
      </div>
      <div v-if="loading" class="flex justify-center items-center bg-gray-300 bg-opacity-75 absolute inset-0 ">
          <p>Loading...</p>
        </div>
        <div v-else class="text-center my-6">
          <button @click="goBack" class="pagination-button">Go Back</button>
        </div>
    </div>
  </div>
</template>

<script>
// import CityItem from '@/components/CityItem.vue';
import { searchCity, citiesInRegion } from '@/api/countries.api'
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'SearchResults',
  components: {
    Navbar
  },
  props: ['query', 'countryCode'],
  data() {
    return {
      cities: [],
      loading: true
    }
  },
  watch: {
    countryCode: 'fetchCities',
    query: 'fetchCities'
  },
  methods: {
    async fetchCities() {
      try {
        this.loading = true;
        if (this.query) {
          const response = await searchCity(this.query)
          this.cities = response.data
        } else if (this.countryCode) {
          const response = await citiesInRegion(this.countryCode)
          this.cities = response.data
        }
      } catch (error) {
        console.error('Error fetching search results:', error)
      } finally {
        this.loading = false;
      }
    },
    goBack(){
      this.$router.go(-1);
    }
  },
  async created() {
    await this.fetchCities()
  }
}
</script>
<style scoped>
.city-card {
  width: 250px;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
}

@media (max-width: 750px) {
  .city-card {
    width: calc(50% - 1rem);
  }
}
</style>
