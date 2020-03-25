<template>
  <div id="app">
    <div class="container">
      <br><br>
      <h1>Districts</h1>
      <h4>
        Şehir seçmeden devam etmek için butona tıkla.
      </h4>
      <router-link class="btn btn-danger" :to="{ name: 'Phones', params: { id: id } }">Numaraları Göster</router-link>
      <br><br>
      <div v-for="data in datas">
        <router-link :to="{ name: 'Neighborhoods', params: { id: data.id } }">{{ data.name }}</router-link>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from "axios";

  export default {
    name: "Districts",

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
      },
    }
  }
</script>

<style scoped>

</style>
