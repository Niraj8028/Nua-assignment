<template>
    <div class="city-card" @click="handleClick">
      <h2 class="text-primary">{{ city.name }}</h2>
      <p class="text-primary"><strong>Country:</strong> {{ city.country }}</p>
      <p class="text-primary"><strong>Region:</strong> {{ city.region }}</p>
      <p class="text-primary"><strong>Latitude:</strong> {{ city.latitude }}</p>
      <p class="text-primary"><strong>Longitude:</strong> {{ city.longitude }}</p>
      <p class="text-primary"><strong>Population:</strong> {{ city.population }}</p>
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
  @import 'tailwindcss/tailwind.css';
  .city-card {
    border: 1px solid #ccc;
    padding: 16px;
    border-radius: 12px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    background-color: #f9f9f9;
    transition: transform 0.3s;
    display: flex;
    flex-direction: column; 
    width: 275px; 
  }
  @media (max-width: 750px) {
  .city-card {
    width: calc(50% - 1rem);
  }
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
  
  