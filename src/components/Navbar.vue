<template>
  <header class="bg-white shadow h-16 flex flex-row justify-between items-center px-4">
    <router-link
      :to="{ name: 'home' }"
      class="inline-flex items-center text-xl  font-bold mr-3 md:ml-4"
      style="color: #FF9F66;"
    >
      Home
    </router-link>
    <div class="flex flex-col md:flex-row items-center md:gap-4">
      <select
        v-model="selectedCountry"
        @change="handleCountryChange"
        class="rounded-md border-2 bg-white border-gray-200 px-2 md:px-3 py-1 md:py-2 text-md md:text-lg
         font-bold mb-4 md:mb-0 w-full md:w-auto text-primary"
      >
        <option value="" disabled>Select a country</option>
        <option v-for="country in countries" :key="country.code" :value="country.code">
          {{ country.name }}
        </option>
      </select>
      <input
        type="text"
        v-model="keyword"
        class="rounded-md border-2 bg-white border-gray-200 px-2 md:px-3 py-1 md:py-2 text-md md:text-lg font-bold w-full md:w-auto"
        placeholder="Search for cities"
        @blur="handleSearch"
      />
    </div>
  </header>
</template>

<script>
export default {
  name: 'CityLayout',
  data() {
    return {
      keyword: '',
      selectedCountry: '',
      countries: [
        { name: 'United States', code: 'US' },
        { name: 'India', code: 'IN' },
        { name: 'Canada', code: 'CA' },
        { name: 'China', code: 'CN' },
      ],
    };
  },
  methods: {
    async handleSearch() {
      this.isLoading = true
      try {
        this.$router.push({ name: 'SearchResults', query: { q: this.keyword } })
      } catch (error) {
        console.error('Error searching cities:', error)
      } finally {
        this.isLoading = false
      }
    },
    handleCountryChange() {
      this.$router.push({ name: 'SearchResults', query: { countryCode: this.selectedCountry } })
    }
  }
}
</script>
<style scoped>

@media (min-width: 350px) {
  .md\:flex {
    display: flex;
  }
  .md\:flex-row {
    flex-direction: row;
  }
  .md\:justify-between {
    justify-content: space-between;
  }
  .md\:items-center {
    align-items: center;
  }
  .md\:gap-4 {
    gap: 1rem;
  }
  .md\:mb-0 {
    margin-bottom: 0;
  }
  .md\:mr-4 {
    margin-right: 1rem;
  }
}
@media (max-width: 600px) {
  select {
    font-size: 16px;
  }
}

</style>
