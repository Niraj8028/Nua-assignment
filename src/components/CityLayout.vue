<!-- <div class="city-grid">
    <CityItem />
    <CityItem />
    <CityItem />
    <CityItem />
    <CityItem />
    <CityItem />
    <CityItem />
    <CityItem />
    <CityItem />
    <CityItem />

  </div> -->
  <template>
    <div>
      <h1 class="heading">City List</h1>
      <div class="toggle-buttons">
        <button @click="toggleView('cards')" :class="{ active: viewMode === 'cards' }">City Cards</button>
        <button @click="toggleView('records')" :class="{ active: viewMode === 'records' }">City Records</button>
      </div>
      <div class="city-grid" v-show="viewMode === 'cards'">
        <CityItem />
    <CityItem />
    <CityItem />
    <CityItem />
    <CityItem />
    <CityItem />
      </div>
      <div  class="city-list" v-show="viewMode === 'records'">
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
              <td>{ city.name }</td>
              <td>{ city.country }</td>
              <td>{ city.region }</td>
              <td>{ city.latitude }</td>
              <td>{ city.longitude }</td>
              <td>{ city.population }</td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- <div v-else>
        <p>Loading...</p>
      </div> -->
      <div class="pagination">
        <button @click="fetchCities(currentPage - 1)" :disabled="currentPage === 0" class="pagination-button">Previous</button>
        <button @click="fetchCities(currentPage + 1)" :disabled="!hasMore" class="pagination-button">Next</button>
      </div>
    </div>
  </template>
  
  <script>
//   import { mapGetters, mapActions } from 'vuex';
  import CityItem from './CityItem.vue';
  
  export default {
    name: 'CityGrid',
    components: {
      CityItem
    },
    data() {
      return {
        viewMode: 'cards' // Default view mode
      };
    },
    // computed: {
    //   ...mapGetters(['cities', 'currentPage', 'hasMore'])
    // },
    methods: {
    //   ...mapActions(['fetchCities']),
      toggleView(mode) {
        this.viewMode = mode;
      }
    },
    // mounted() {
    //   this.fetchCities(0);
    // }
  };
  </script>
  
  <style>
  .heading {
    text-align: center;
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
  
  .city-list th, .city-list td {
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
    transition: background-color 0.3s, color 0.3s;
  }
  
  .pagination-button:hover {
    background-color: #ddd;
  }
  
  .pagination-button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
</style>
  