<template>
  <div id="app">
    <div class="settings-general">
      <div class="settings-general-sm">

        <p class="settings-title">Hakkında</p>

        <div class="settings-share-div">
          <a class="share-a" href="#">Arkadaşlarınıza bizi tavsiye edin</a>
          <img src="../assets/icon_/Shape.svg">
        </div>

        <div class="settings-social-media">
          <p class="settings-social-media-title">TAKİP EDİN</p>
          <p class="settings-social-media-title-thin">Ayvalık Yerel İnisiyatif</p>
          <div class="settings-social-media-icon">
            <img src="../assets/icon_/social.svg">
            <img src="../assets/icon_/Shape-2.svg">
            <img src="../assets/icon_/insta.svg">
            <img src="../assets/icon_/ws.svg">
          </div>
        </div>

        <div class="settings-social-media social-media-down">
          <p class="settings-social-media-title-thin">Ayvalık Yerel İnisiyatif</p>
          <div class="settings-social-media-icon">
            <img src="../assets/icon_/social.svg">
            <img src="../assets/icon_/ws.svg">
          </div>
        </div>

        <div class="settings-footer">
          <div class="settings-footer-left">
            <p>from</p>
            <img src="../assets/icon_/left-footer.svg">
          </div>

          <div class="settings-footer-right">
            <p>from</p>
            <a class="link" href="https://github.com/Makers-Covid-19">
              <img class="gh" src="../assets/icon_/gh_Vector.png">
              <img src="../assets/icon_/pandemi_savascilari.png">
            </a>
          </div>
        </div>

      </div>

    </div>
  </div>
</template>

<script>
  export default {
    name: "About"
  }
</script>

<style scoped>
  .gh {
    position: absolute;
  }

  .link:hover{
    background-color: #85e6fa;
  }
</style>
