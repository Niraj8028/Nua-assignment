<template>
    <div class="city-card" @click="handleClick">
      <h2>{{ city.name }}</h2>
      <p><strong>Country:</strong> {{ city.country }}</p>
      <p><strong>Region:</strong> {{ city.region }}</p>
      <p><strong>Latitude:</strong> {{ city.latitude }}</p>
      <p><strong>Longitude:</strong> {{ city.longitude }}</p>
      <p><strong>Population:</strong> {{ city.population }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'CityItem',
    props: {
      city: {
        type: Object,
        
      }
    },
    methods: {

    handleClick() {
      console.log(this.city.id)
      this.$emit('city-clicked', this.city.id);
    }
  }
  };
  </script>
  
  <style>
  .city-card {
    border: 1px solid #ccc;
    padding: 16px;
    margin: 8px;
    border-radius: 12px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    background-color: #f9f9f9;
    transition: transform 0.3s;
    display: flex; /* Use flexbox for vertical layout */
    flex-direction: column; /* Layout children in a column */
    height: 200px; /* Set the height */
    width: 250px; /* Set the width */
  }
  
  .city-card:hover {
    transform: translateY(-5px);
  }
  
  h2 {
    margin-bottom: 10px;
  }
  
  p {
    margin-bottom: 5px;
  }
  </style>
  
  