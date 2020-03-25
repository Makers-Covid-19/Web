<template>
  <div id="app">
    <div class="container">
      <br><br>
      <h1>Covid Acil!</h1>
      <hr>
      <!--      <v-select :options="options" v-model="province"></v-select>
            <br>
            <button class="btn btn-danger" @click="runProvince">Şehri Seç</button>-->
      <br><br>
      <div v-for="data in datas">
        <router-link :to="{ name: 'Districts', params: { id: data.id } }">{{ data.name }}</router-link>
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
        datas: {},
        province: "",
        options: [],
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
            for (let i = 0; i <= this.datas.length-1; i++) {
              this.options.push(this.datas[i].name);
            }
          });
      },
    }
  }
</script>

<style scoped>

</style>
