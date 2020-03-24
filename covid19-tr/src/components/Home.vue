<template>
  <div id="app">
    <div class="container">
      <br><br>
      <h1>Covid Acil!</h1>
      <hr>
      <div v-for="data in datas">
        <router-link :to="{ name: 'Districts', params: { id: data.id } }">{{ data.name }}</router-link>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    name: 'Home',
    data() {
      return {
        datas: {},
      }
    },

    created() {
      this.getProvinces()
    },

    methods: {
      getProvinces() {
        axios.get('https://rocky-reef-05857.herokuapp.com/api/v0/provinces')
          .then(response => {
            this.datas = response.data;
          });
      }
    }
  }
</script>

<style scoped>

</style>
