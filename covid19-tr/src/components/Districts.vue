<template>
  <div id="app">
    <div class="container">
      <h1>List</h1>
      {{ datas[id] }}
    </div>
  </div>
</template>

<script>
  import axios from "axios";

  export default {
    name: "List",

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
      this.getDistricts();
    },

    methods: {
      getDistricts() {
        axios.get('https://rocky-reef-05857.herokuapp.com/api/v0/districts/' + this.id)
          .then(response => {
            this.datas = response.data;
          });
      }
    }
  }
</script>

<style scoped>

</style>
