// store/index.js
import Vue from 'vue';
import Vuex from 'vuex';
import { getAllCities, getNearbyCities, searchCity, citiesInRegion } from '@/api/countries.api';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    citiesData: [],
    nearbyCities: [],
    searchedCities: [],
    currentPage: 1,
    offset: 0,
    viewMode: 'cards',
  },
  mutations: {
    setCitiesData(state, cities) {
      state.citiesData = cities;
    },
    setNearbyCities(state, cities) {
      state.nearbyCities = cities;
    },
    setCurrentPage(state, page) {
      state.currentPage = page;
    },
    setViewMode(state, mode) {
      state.viewMode = mode;
    },
    setSearchedCities(state, mode) {
      state.viewMode = mode;
    }
  },
  actions: {
    async fetchCities({ commit, state }) {
      try {
        const response = await getAllCities(10, state.offset);
        commit('setCitiesData', response.data);
      } catch (error) {
        console.error('Error fetching cities:', error);
      }
    },
    async showNearbyCities({ commit }, cityId) {
      try {
        const response = await getNearbyCities(cityId);
        commit('setNearbyCities', response.data);
      } catch (error) {
        console.error('Error fetching nearby cities:', error);
      }
    },
    async getCitiesInRegion({ commit }, { query, countryCode }) {
      try {
        let response;
        if (query) {
          response = await searchCity(query);
        } else if (countryCode) {
          response = await citiesInRegion(countryCode);
        }
        commit('setSearchedCities', response.data);
      } catch (error) {
        console.error('Error fetching search results:', error);
      } 
    }
  },
  getters: {
    cities: state => state.citiesData,
    nearbyCities: state => state.nearbyCities,
    currentPage: state => state.currentPage,
    viewMode: state => state.viewMode,
    offset: state => state.offset,
    searchedCities: state => state.offset,
  },
});
