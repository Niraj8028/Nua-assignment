<template>
  <header class="bg-white shadow h-16 flex justify-between items-center px-4">
    <router-link
      :to="{ name: 'home' }"
      class="inline-flex items-center text-xl text-orange-500 font-bold"
    >
      Home
    </router-link>
    <div class="flex items-center gap-4">
      <select
        v-model="selectedCountry"
        @change="handleCountryChange"
        class="rounded-lg border-2 bg-white border-gray-200 px-3 py-2 text-lg font-bold"
      >
        <option value="" disabled>Select a country</option>
        <option v-for="country in countries" :key="country.code" :value="country.code">
          {{ country.name }}
        </option>
      </select>
      <input
        type="text"
        v-model="keyword"
        class="rounded-lg border-2 bg-white border-gray-200 px-3 py-2 text-lg font-bold"
        placeholder="Search for cities"
        @blur="handleSearch"
      />
    </div>
  </header>
</template>

<script>
export default {
  name: 'CityLayout',
  // Your existing code
  data() {
    return {
      keyword: '',
      selectedCountry: '',
      countries: [
        { name: 'United States', code: 'US' },
        { name: 'India', code: 'IN' },
        { name: 'Canada', code: 'CA' },
        { name: 'China', code: 'CN' },
        // Add more countries as needed
      ],
    };
  },
  methods: {
    async handleSearch() {
      this.isLoading = true // Start loading
      try {
        this.$router.push({ name: 'SearchResults', query: { q: this.keyword } })
      } catch (error) {
        console.error('Error searching cities:', error)
      } finally {
        this.isLoading = false // End loading
      }
    },
    handleCountryChange() {
      this.$router.push({ name: 'SearchResults', query: { countryCode: this.selectedCountry } })
      console.log('Selected country:', this.selectedCountry);
      // Implement logic to handle country change if needed
    }
  }
}
</script>
