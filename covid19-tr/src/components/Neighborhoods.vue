<template>
  <div id="app">
    <div class="container">
      <h1>Neighborhoods</h1>
      <div v-for="data in datas">
        <router-link :to="{ name: 'Neighborhoods', params: { id: data.id } }">{{ data.name }}</router-link>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from "axios";

  export default {
    name: "Neighborhoods",

    data() {
      return {
        id: this.$route.params.id,
        datas: {},
      }
    },

    watch: {
      '$route'(to, from) {
        this.id = to.params.id;
      },
    },

    created() {
      this.getNeighborhoods();
    },

    methods: {
      getNeighborhoods() {
        axios.get('https://rocky-reef-05857.herokuapp.com/api/v0/neighborhoods/' + this.id)
          .then(response => {
            this.datas = response.data;
          });
      }
    }
  }
</script>

<style scoped>

</style>
