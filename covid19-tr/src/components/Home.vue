<template>
  <div id="app">
    <div class="home-general">
      <div class=home-card>
        <section class="container-1">
          <div class="dropdown">
            <select name="one" class="dropdown-select" v-model="province">
              <option disabled value="">--İl Seçin</option>
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
        <router-link to="/about"><p class="about">Hakkında</p></router-link>
        <div class="container-2">
          <a class="" href="https://apps.apple.com/tr/app/acil-numaralar-destek-hatlar%C4%B1/id1506957322" target="blank_"><img src="../assets/icon_/appstore.png"></a>
          <a class="" href="https://play.google.com/store/apps/details?id=com.mobilegion.sba.acil.numaralar" target="blank_"><img src="../assets/icon_/googleplay.png"></a>
        </div>
        <div class="container">
          <a class="card" href="tel:155">
            <div class="icon">
              <img src="../assets/icon_/tum_ihtiyaclar.svg">
            </div>
            <div class="text-number">155</div>
            <div class="text-title">Polis İmdat</div>
            <div class="text-thin">Emniyet</div>
            <div class="check">
              <img src="../assets/icon_/star.svg">
            </div>
          </a>
          <a class="card" href="tel:153">
            <div class="icon">
              <img src="../assets/icon_/manav.svg">
            </div>
            <div class="text-number">153</div>
            <div class="text-title">Alo Zabıta</div>
            <div class="text-thin">Genel Çağrı Merkezi</div>
            <div class="check">
              <img src="../assets/icon_/star.svg">
            </div>
          </a>
          <a class="card" href="tel:112">
            <div class="icon">
              <img src="../assets/icon_/faturalar.svg">
            </div>
            <div class="text-number">112</div>
            <div class="text-title">Acil Servis</div>
            <div class="text-thin">Sağlık</div>
            <div class="check">
              <img src="../assets/icon_/star.svg">
            </div>
          </a>
          <a class="card" href="tel:156">
            <div class="icon">
              <img src="../assets/icon_/alisveris.svg">
            </div>
            <div class="text-number">156</div>
            <div class="text-title">Jandarma İmdat</div>
            <div class="text-thin">Emniyet</div>
            <div class="check">
              <img src="../assets/icon_/star.svg">
            </div>
          </a>
          <a class="card" href="tel:187">
            <div class="icon">
              <img src="../assets/icon_/Koordinasyon.svg">
            </div>
            <div class="text-number">187</div>
            <div class="text-title">Gaz Arıza</div>
            <div class="text-thin">Emniyet</div>
            <div class="check">
              <img src="../assets/icon_/star.svg">
            </div>
          </a>
          <a class="card" href="tel:110">
            <div class="icon">
              <img src="../assets/icon_/psikolojikdestek.svg">
            </div>
            <div class="text-number">110</div>
            <div class="text-title">İtfaiye</div>
            <div class="text-thin">Emniyet</div>
            <div class="check">
              <img src="../assets/icon_/star.svg">
            </div>
          </a>
        </div>
      </div>
    </div>

    <div class="section-down">
      <div class="number-section">
        <p class="number-section-text">Ülke Geneli</p>
        <div v-for="data in datasGlobalPhone">
          <a :href="`tel:${ data.phone }`">
            <div class="section-down-card">
              <div class="card-info">
                <p class="info-p">{{ data.name }}</p>
                <p class="info2-p">{{ data.phone }}</p>
              </div>
            </div>
          </a>
        </div>
      </div>
      <div class="country-section" v-if="datasMajorPhone">
        <p class="country-section-text" style="margin-top: 5%">Numaralar</p>
        <div v-for="data in datasMajorPhone">
          <a :href="`tel:${ data.phone }`">
            <div class="section-down-card">
              <div class="card-info">
                <p class="info-p">{{ data.name }}</p>
                <p class="info2-p">{{ data.phone }}</p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
    <router-link to="/privacy-policy"><p class="privacy">Pandemi Savaşçıları Gizlilik Politikası ve Kullanım Koşulları</p></router-link>
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
        datasGlobalPhone: {},
        datasMajorPhone: {},
        datasPublicPhone: {},
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
        this.optionsDistricts = [];
        for (let i = 0; i <= this.datasProvince.length - 1; i++) {
          if (this.datasProvince[i].name == this.province) {
            this.id = i;
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
        axios.get('https://api.covidacil.com/api/v0/provinces')
          .then(response => {
            this.datasProvince = response.data.data;
            for (let i = 0; i <= this.datasProvince.length - 1; i++) {
              this.optionsProvince.push(this.datasProvince[i].name);
            }
          });
      },

      getDistricts() {
        axios.get('https://api.covidacil.com/api/v0/districts/' + this.id)
          .then(response => {
            this.datasDistricts = response.data.data;
            for (let i = 0; i <= this.datasDistricts.length - 1; i++) {
              this.optionsDistricts.push(this.datasDistricts[i].name);
            }
          });
      },

      getNeighborhoods() {
        axios.get('https://api.covidacil.com/api/v0/neighborhoods/' + this.id)
          .then(response => {
            this.datasNeighborhoods = response.data.data;
            for (let i = 0; i <= this.datasNeighborhoods.length - 1; i++) {
              this.optionsNeighborhoods.push(this.datasNeighborhoods[i].name);
            }
          });
      },

      getNumber() {
        if (this.id <= 81 && this.id >= 1) {
          this.url = "https://api.covidacil.com/api/v0/phones/id?province_id=" + this.id;
        } else if (this.id <= 2103 && this.id >= 1101) {
          this.url = "https://api.covidacil.com/api/v0/phones/id?district_id=" + this.id;
        } else {
          this.url = "https://api.covidacil.com/api/v0/phones/id?neighborhood_id=" + this.id;
        }
        axios.get(this.url)
          .then(response => {
            this.datasGlobalPhone = response.data.data.globalPhones;
            this.datasMajorPhone = response.data.data.majorPhones;
            this.datasPublicPhone = response.data.data.publicPhones;
          });
      }
    }
  }
</script>

<style scoped>
  .about {
    color: #f2f2f2;
    font-size: 20px;
    text-align: center;
    margin-top: 15px;
    font-weight: bold;
  }

  .about:hover {
    font-size: 26px;
  }

  .appLogo {
      display: block;
      margin-left: auto;
      margin-right: auto;
      width: 50%;
  }

  .privacy {
    font-size: 20px;
    text-align: center;
    margin-top: 5%;
    margin-bottom: 5%;
    font-weight: bold;
  }
</style>
