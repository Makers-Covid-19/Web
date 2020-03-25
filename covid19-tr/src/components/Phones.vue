<template>
  <div id="app">
    <div class="container">
      <br><br>
      <h1>Phones</h1>
      <h5>Aramak İstediğiniz Numaraya Tıklayın</h5>
      <div v-for="data in datas">
        <div class="card">
          <a :href="`tel:+${ data.no }`">
            <p>{{ data.name }}</p>
            <p>{{ data.no }}</p>
            <p>{{ data.category.name }}</p>
            <p>{{ data.province.name }}</p>
          </a>
        </div>
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
        url: "",
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
        if (this.id <= 81 && this.id >= 1) {
          this.url = "https://rocky-reef-05857.herokuapp.com/api/v0/phones/id?province_id=" + this.id;
        } else if (this.id <= 2103 && this.id >= 1101) {
          this.url = "https://rocky-reef-05857.herokuapp.com/api/v0/phones/id?district_id=" + this.id;
        } else {
          this.url = "https://rocky-reef-05857.herokuapp.com/api/v0/phones/id?neighborhood_id=" + this.id;
        }
        axios.get(this.url)
          .then(response => {
            this.datas = response.data;
          });
      }
    }
  }
</script>

<style scoped>
  p {
    color: black;
  }
  .card {
    width: 160px;
    height: 160px;
    background-color: seagreen;
    border-radius: 10px;
  }
</style>
