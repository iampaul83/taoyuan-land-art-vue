<template>
  <v-dialog v-model="open" max-width="1000px" transition="slide-y-transition">
    <v-card style="min-height: 500px;">
      <v-card-text>
        <v-layout row wrap>
          <v-flex md8 xs12 class="pr-3">
            <v-carousel id="example-custom-transition" class="mb-4" :style="{ height: $vuetify.breakpoint.smAndDown ? '300px' : undefined}">
              <v-carousel-item
                v-for="(image, i) in images"
                :key="i"
                :src="image"
                transition="fade" reverse-transition="fade"
              ></v-carousel-item>
            </v-carousel>
          </v-flex>
          <v-flex md4 xs12>
            <h2 class="mb-3">富岡幸福筆記</h2>
            <p>女孩是熱愛旅行的畫家，在旅行途中用彩筆留下每一個令她懷念的場景，畫筆將為這幸福筆記本繪出旅行的序曲。男孩是常透過鐵道旅行的鐵道迷，沿途看見富岡美麗的陂塘景色以及體驗老街的歷史人文。</p>
            
            <div class="my-2">
              <v-icon size="16" class="mr-2">gavel</v-icon> 作品材質：{{ material }}
            </div>
            <div class="my-2">
              <v-icon size="16" class="mr-2">crop</v-icon> 作品尺寸：{{ size }}
            </div>
            <div class="my-2">
              <v-icon size="16" class="mr-2">place</v-icon> 展示地點：{{ showPlace }}
            </div>
            <div style="background: url(/images/map.png); height: 150px;">
              <iframe v-if="loadMap" style="border:0; width: 100%; height: 100%" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14471.721228809472!2d121.083056!3d24.934444!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34682ff7dabd848d%3A0xb02ba0a5ef1fe6d5!2z5a-M5bKh6ICB6KGX!5e0!3m2!1szh-TW!2stw!4v1537108300557" frameborder="0" allowfullscreen></iframe>
            </div>

            <v-divider class="my-3"></v-divider>

            <div class="my-2">
              <v-icon size="16" class="mr-2">person</v-icon>  創作者：{{ author }}
            </div>

            <p>「Anadou木作」是銀濟春在2012年成立的創作品牌，源自於魯凱族對於「樹」的稱呼「Anadou」，魯凱族人尊敬樹並相信樹是存在著靈性。</p>

            <v-img :src="authorPhoto"></v-img>
            
          </v-flex>
        </v-layout>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data () {
    return {
      open: true,
      loadMap: false,
      showMap: false,
      material: '木材',
      size: '0.4✕4✕5m，共4組',
      showPlace: '慢遊富岡',
      images: [
        'http://www.taoyuanlandart.com.tw/images/art/1-1.jpg',
        'http://www.taoyuanlandart.com.tw/images/art/1-2.jpg',
        'http://www.taoyuanlandart.com.tw/images/art/1-3.jpg',
        'http://www.taoyuanlandart.com.tw/images/art/1-4.jpg',
        'http://www.taoyuanlandart.com.tw/images/art/1-5.jpg',
      ],
      authorPhoto: 'http://www.taoyuanlandart.com.tw/images/art/1-0.jpg',
      author: '銀濟春'
    }
  },
  mounted () {
    setTimeout(() => {
      this.loadMap = true
    }, 1000);
  },
  watch: {
    open (value) {
      if (!value) {
        this.$router.push('/art')
      }
    }
  }
}
</script>

<style lang="stylus">
#example-custom-transition
  .fade
    &-enter-active, &-leave-active, &-leave-to
      transition: .3s ease-out
      position: absolute
      top: 0
      left: 0

    &-enter, &-leave, &-leave-to
      opacity: 0
</style>

