
<template>
  <div>
    <div class="toggle-buttons">
      <button @click="toggleView('cards')" :class="{ active: viewMode === 'cards' }">City Cards</button>
      <button @click="toggleView('records')" :class="{ active: viewMode === 'records' }">City Records</button>
    </div>
    <div class="city-grid" v-show="viewMode === 'cards'">
      <CityItem v-for="city in cities" 
        :key="city.id" 
        @city-clicked="showNearbyCities"
        :city="city" />
    </div>
    <div class="city-list" v-show="viewMode === 'records'">
      <table>
        <thead>
          <tr>
            <th>City Name</th>
            <th>Country</th>
            <th>Region</th>
            <th>Latitude</th>
            <th>Longitude</th>
            <th>Population</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="city in cities" :key="city.id">
            <td>{{ city.name }}</td>
            <td>{{ city.country }}</td>
            <td>{{ city.region }}</td>
            <td>{{ city.latitude }}</td>
            <td>{{ city.longitude }}</td>
            <td>{{ city.population }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- <div v-else>
      <p>Loading...</p>
    </div> -->
    <div v-if="viewMode == 'cards'" class="pagination">
      <button
        @click="prevPage()"
        :disabled="currentPage === 0"
        class="pagination-button"
      >
        Previous
      </button>
      <button @click="nextPage()" class="pagination-button">
        Next
      </button>
    </div>
    <div v-if="selectedCity" class="modal">
      <div class="modal-content">
        <span class="close" @click="selectedCity = null">&times;</span>
        <!-- <h2>Nearby Cities for {{ selectedCity.name }}</h2> -->
        <table>
          <thead>
            <tr>
              <th>City</th>
              <th>Distance</th>
              <th>Region</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="nearbyCity in getNearbyCities()" :key="nearbyCity.city.id">
              <td>{{ nearbyCity.city.name }}</td>
              <td>{{ nearbyCity.distance.toFixed(2) }} km</td>
              <td>{{ nearbyCity.city.region }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <CityModal
      :cities="nearbyCities"
      :visible="showCityModal"
      :isLoading="isLoading"
      @close="showCityModal = false"
    />
  </div>
</template>

<script>
import CityItem from './CityItem.vue'
import CityModal from './CityModal.vue'
import { getAllCities, getNearbyCities, searchCity } from '@/api/countries.api';

export default {
  name: 'CityGrid',
  components: {
    CityItem,
    CityModal
  },
  data() {
    return {
      viewMode: 'cards',
      selectedCity: false,
      currentPage: 1,
      limit: 10,
      offset: 0,
      citiesData: [],
      nearbyCities: [],
      showCityModal: false,
      isLoading: false,
      cityName: ''
    }
  },
  computed: {
    cities() {
      return this.citiesData;
    }
  },
  methods: {
    toggleView(mode) {
      this.viewMode = mode
    },
    async showNearbyCities(cityId) {
      this.showCityModal = true;
      this.isLoading = true;
      try {
        const response = await getNearbyCities(cityId);
        this.nearbyCities = response.data; 
      } catch (error) {
        console.error('Error fetching nearby cities:', error);
      } finally {
        this.isLoading = false;
      }
    },
    async handleSearch() {
      this.isLoading = true; // Start loading
      try {
        const response = await searchCity(this.cityName);
        this.citiesData = response.data; // Adjust this based on the actual response structure
      } catch (error) {
        console.error('Error searching cities:', error);
      } finally {
        this.isLoading = false; // End loading
      }
    },
    nextPage() {
      this.currentPage++;
      this.offset+=10;
      this.fetchCities();
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
        this.offset-= 10;
        this.fetchCities();
      }
    },
    async fetchCities() {
      try {
        const response = await getAllCities(10, this.offset);
        this.citiesData = response.data;
      } catch (error) {
        console.error('Error fetching cities:', error);
      }
    }
  },
  mounted() {
    this.fetchCities();
  }
}
</script>

<style>
.heading {
  text-align: center;
}
.modal {
  display: block;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0,0,0,0.4);
}

.modal-content {
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
  max-width: 600px;
}
.toggle-buttons {
  text-align: center;
  margin-bottom: 20px;
}

.toggle-buttons button {
  margin-right: 10px;
  padding: 5px 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f9f9f9;
  cursor: pointer;
}

.toggle-buttons button.active {
  background-color: #ddd;
}

.city-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

.city-list table {
  width: 100%;
  border-collapse: collapse;
}

.city-list th,
.city-list td {
  border: 1px solid #ddd;
  padding: 8px;
}

.pagination {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.pagination-button {
  padding: 10px 20px;
  margin: 0 5px;
  background-color: #f9f9f9;
  color: #333;
  border: 1px solid #ccc;
  border-radius: 5px;
  cursor: pointer;
  transition:
    background-color 0.3s,
    color 0.3s;
}

.pagination-button:hover {
  background-color: #ddd;
}

.pagination-button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>
