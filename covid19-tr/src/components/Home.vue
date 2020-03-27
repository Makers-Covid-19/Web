<template>
  <div id="app">
    <div class="container">
      <br><br>
      <h1>Covid Acil!</h1>
      <hr>
      <label>İli Seç</label>
      <v-select :options="optionsProvince" v-model="province" placeholder="Zorunlu"></v-select>
      <br>
      <label>İlçeyi Seç</label>
      <v-select :options="optionsDistricts" v-model="districts" placeholder="Zorunlu Değil"></v-select>
      <br>
      <button class="btn btn-danger" @click="getNumber">Onay</button>
      <br><br>
      <div v-for="data in datasPhone">
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
  import axios from 'axios';
  import "vue-select/dist/vue-select.css";

  export default {
    name: 'Home',
    data() {
      return {
        datasProvince: {},
        datasDistricts: {},
        datasPhone: {},
        province: "",
        districts: "",
        optionsProvince: [],
        optionsDistricts: [],
        id: 0,
        url: "",
      }
    },

    watch: {
      province() {
        for (let i = 0; i <= this.datasProvince.length - 1; i++) {
          if (this.datasProvince[i].name == this.province) {
            this.id = i + 1;
            this.getDistricts();
          }
        }
      },
      districts() {
        for (let i = 0; i <= this.datasDistricts.length - 1; i++) {
          if (this.datasDistricts[i].name == this.districts) {
            this.id = i + 1;
            console.log(this.id);
          }
        }
      }
    },

    created() {
      this.getProvinces();
    },

    methods: {
      getProvinces() {
        axios.get('https://rocky-reef-05857.herokuapp.com/api/v0/provinces')
          .then(response => {
            this.datasProvince = response.data.data;
            for (let i = 0; i <= this.datasProvince.length - 1; i++) {
              this.optionsProvince.push(this.datasProvince[i].name);
            }
          });
      },

      getDistricts() {
        axios.get('https://rocky-reef-05857.herokuapp.com/api/v0/districts/' + this.id)
          .then(response => {
            this.datasDistricts = response.data.data;
            for (let i = 0; i <= this.datasDistricts.length - 1; i++) {
              this.optionsDistricts.push(this.datasDistricts[i].name);
            }
          });
      },

      getNumber() {
        if (this.id <= 81 && this.id >= 1) {
          this.url = "https://rocky-reef-05857.herokuapp.com/api/v0/phones/id?province_id=" + this.id;
        } else if (this.id <= 2103 && this.id >= 1101) {
          this.url = "https://rocky-reef-05857.herokuapp.com/api/v0/phones/id?district_id=" + this.id;
        } else {
          this.url = "https://rocky-reef-05857.herokuapp.com/api/v0/phones/id?neighborhood_id=" + this.id;
        }
        axios.get(this.url)
          .then(response => {
            this.datasPhone = response.data.data;
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
