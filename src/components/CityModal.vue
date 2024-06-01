<!-- components/CityModal.vue -->
<template>
  <div v-if="visible" class="modal-overlay" @click.self="closeModal">
    <div class="modal-content">
      <button class="close-button" @click="closeModal">&times;</button>
      <h2 class="text-center font-bold mb-3">Nearby Cities</h2>
      <div v-if="isLoading" class="loading">Loading...</div>
      <div v-else class="city-cards">
        <div v-for="city in cities" :key="city.id" class="city-card">
          <p class="text-primary">
            <strong>{{ city.name }}</strong>
          </p>
          <p class="text-primary"><strong>Country:</strong> {{ city.country }}</p>
          <p class="text-primary"><strong>Region:</strong> {{ city.region }}</p>
          <p class="text-primary"><strong>Latitude:</strong> {{ city.latitude }}</p>
          <p class="text-primary"><strong>Longitude:</strong> {{ city.longitude }}</p>
          <p class="text-primary"><strong>Population:</strong> {{ city.population }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CityModal',
  props: {
    cities: {
      type: Array,
      required: true
    },
    visible: {
      type: Boolean,
      required: true
    },
    isLoading: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    closeModal() {
      this.$emit('close')
    }
  }
}
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal-content {
  position: relative;
  background: white;
  padding: 20px;
  border-radius: 8px;
  width: 80%;
  max-width: 800px;
}
.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  font-size: 24px;
  cursor: pointer;
}
.city-cards {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}
.city-card {
  padding: 10px;
  background-color: #f0f0f0;
  text-align: center;
}
</style>
