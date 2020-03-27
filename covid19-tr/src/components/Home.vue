<template>
  <div id="app">
    <!--    <div class="container">
          <br><br>
          <h1>Covid Acil!</h1>
          <hr>
          <label>İli Seç</label>
          <v-select :options="optionsProvince" v-model="province" placeholder="Zorunlu"></v-select>
          <br>
          <label>İlçeyi Seç</label>
          <v-select :options="optionsDistricts" v-model="districts" placeholder="Zorunlu Değil"></v-select>
          <br>
          <label>Mahalleyi Seç</label>
          <v-select :options="optionsNeighborhoods" v-model="neighborhoods" placeholder="Zorunlu Değil"></v-select>
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
        </div>-->

    <div class="home-general">
      <div class=home-card>
        <section class="container-1">
          <div class="dropdown">
            <select name="one" class="dropdown-select" v-model="province">
              <option disabled value="">İl Seçin</option>
              <option v-for="option in optionsProvince">{{ option }}</option>
            </select>
          </div>

          <div id="district" class="dropdown">
            <select name="two" class="dropdown-select" v-model="districts">
              <option disabled value="">İlçe Seçin</option>
              <option v-for="option in optionsDistricts">{{ option }}</option>
            </select>
          </div>
        </section>
        <div class="container">
          <div class="card">
            <div class="icon">
              <img src="../assets/icon_/tum_ihtiyaclar.svg">
            </div>
            <div class="text-number">444 44 44</div>
            <div class="text-title">Tüm İhtiyaçlar</div>
            <div class="text-thin">Büyükşehir Belediye</div>
            <div class="text-thin">Genel Çağrı Merkezi</div>
            <div class="check">
              <img src="../assets/icon_/star.svg">
            </div>
          </div>
          <div class="card">
            <div class="icon">
              <img src="../assets/icon_/manav.svg">
            </div>
            <div class="text-number">444 44 44</div>
            <div class="text-title">Manav</div>
            <div class="text-thin">Çamlık</div>
            <div class="text-thin">SMO</div>
            <div class="check">
              <img src="../assets/icon_/star.svg">
            </div>
          </div>
          <div class="card">
            <div class="icon">
              <img src="../assets/icon_/faturalar.svg">
            </div>
            <div class="text-number">444 44 44</div>
            <div class="text-title">Maaş ve Faturalar</div>
            <div class="text-thin">Tüm Mahalleler</div>
            <div class="text-thin">Emniyet</div>
            <div class="check">
              <img src="../assets/icon_/star.svg">
            </div>
          </div>
          <div class="card">
            <div class="icon">
              <img src="../assets/icon_/alisveris.svg">
            </div>
            <div class="text-number">444 44 44</div>
            <div class="text-title">Alışveris</div>
            <div class="text-thin">Tüm Mahalleler</div>
            <div class="text-thin">Belediye</div>
            <div class="check">
              <img src="../assets/icon_/star.svg">
            </div>
          </div>
          <div class="card">
            <div class="icon">
              <img src="../assets/icon_/Koordinasyon.svg">
            </div>
            <div class="text-number">444 44 44</div>
            <div class="text-title">Koordinasyon</div>
            <div class="text-thin">Tüm Mahalleler</div>
            <div class="text-thin">Yerel İnisiyatif</div>
            <div class="check">
              <img src="../assets/icon_/star.svg">
            </div>
          </div>
          <div class="card">
            <div class="icon">
              <img src="../assets/icon_/psikolojikdestek.svg">
            </div>
            <div class="text-number">444 44 44</div>
            <div class="text-title">Psikolojik Destek</div>
            <div class="text-thin">Tüm Mahalleler</div>
            <div class="text-thin">İlçe Sağlık Müdürlüğü</div>
            <div class="check">
              <img src="../assets/icon_/star.svg">
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="section-down">
      <div class="country-section">
        <p class="country-section-text">Ülke Geneli</p>
        <a href="tel:182">
          <div class="section-down-card">
            <div class="card-info">
              <p class="info-p">Corona Danışma Hattı</p>
              <p class="info2-p">Tüm Türkiye</p>
            </div>
            <div class="card-number">
              <p class="number-left">182</p>
            </div>
          </div>
        </a>

        <a href="tel:112">
          <div class="section-down-card">
            <div class="card-info">
              <p class="info-p">Acil</p>
              <p class="info2-p">Tüm Türkiye</p>
            </div>
            <div class="card-number">
              <p class="number-left">112</p>
            </div>
          </div>
        </a>

        <a href="tel:155">
          <div class="section-down-card">
            <div class="card-info">
              <p class="info-p">Emniyet GM</p>
              <p class="info2-p">Tüm Türkiye</p>
            </div>
            <div class="card-number">
              <p class="number-left">155</p>
            </div>
          </div>
        </a>
      </div>
      <div class="number-section">
        <p class="number-section-text">Numaralar</p>
        <div v-for="data in datasPhone">
          <a :href="`tel:+${ data.no }`">
            <div class="section-down-card">
              <div class="card-info">
                <p class="info-p">{{ data.name }}</p>
                <p class="info2-p">{{ data.no }}</p>
              </div>
              <div class="card-number">
                <p class="number-left">{{ data.category.name }}</p>
              </div>
            </div>
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
        datasNeighborhoods: {},
        datasPhone: {},
        province: "",
        districts: "",
        neighborhoods: "",
        optionsProvince: [],
        optionsDistricts: [],
        optionsNeighborhoods: [],
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
            this.getNumber();
          }
        }
      },
      districts() {
        for (let i = 0; i <= this.datasDistricts.length - 1; i++) {
          if (this.datasDistricts[i].name == this.districts) {
            this.id = this.datasDistricts[i].id;
            this.getNeighborhoods();
            this.getNumber();
          }
        }
      },
      neighborhoods() {
        for (let i = 0; i <= this.datasNeighborhoods.length - 1; i++) {
          if (this.datasNeighborhoods[i].name == this.neighborhoods) {
            this.id = this.datasNeighborhoods[i].id;
            this.getNumber();
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

      getNeighborhoods() {
        axios.get('https://rocky-reef-05857.herokuapp.com/api/v0/neighborhoods/' + this.id)
          .then(response => {
            this.datasNeighborhoods = response.data.data;
            for (let i = 0; i <= this.datasNeighborhoods.length - 1; i++) {
              this.optionsNeighborhoods.push(this.datasNeighborhoods[i].name);
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

</style>
