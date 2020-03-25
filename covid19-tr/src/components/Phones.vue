<template>
  <div id="app">
    <div class="container">
      <h1>Phones</h1>
      <div v-for="data in datas">
        {{ data }}
      </div>
    </div>
  </div>
</template>

<script>
  import axios from "axios";

  export default {
    name: "Phones",
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
        axios.get('https://rocky-reef-05857.herokuapp.com/api/v0/phones/id?province_id=' + this.id)
          .then(response => {
            this.datas = response.data;
          });
      }
    }
  }
</script>

<style scoped>

</style>
