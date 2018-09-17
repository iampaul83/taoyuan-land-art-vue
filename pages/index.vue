<template>
  <div>
    <v-container fluid style="padding: 0;">
      <v-parallax src="/images/home.jpg" height="600" style="width:100%;">
        <v-layout
          align-end
          column
          justify-end
          class="font-weight-black"
          style="margin-bottom: 30px;"
        >
          <h1 class="display-1 mb-3 font-weight-black">9月14日 (五) ～ 9月30日 (日)</h1>
          <h4 class="subheading font-weight-black">楊梅/富岡 中壢/老街溪/青塘園</h4>
        </v-layout>
      </v-parallax>
    </v-container>

    <!-- <v-container>
      <h1>最新 訊息 快報</h1>
      <v-container fluid grid-list-xl style="padding: 0;">
        <v-layout row wrap>
          <v-flex
            v-for="(data, n) in news"
            :key="n"
            xs12 sm6 md4
          >
            <v-card tile :to="data.to" style="height: 150px;">
              <v-card-text>
                <h2>{{ data.title }}</h2>
                <p>{{ data.date}} {{ data.tag }}</p>
                <a>Read More</a>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>

      <v-divider class="my-5"></v-divider>

      <h1>活動 現況 快報</h1>
      <v-container fluid grid-list-xl style="padding: 0;">
        <v-layout row wrap>
          <v-flex
            v-for="(data, n) in mediaNews"
            :key="n"
            xs12 sm6 md4
          >
            <v-card tile :to="data.to">
              <v-img :src="data.img" height="200"></v-img>
              <v-card-title primary-title>
                <div class="headline">{{ data.title }}</div>
              </v-card-title>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
      
      <v-divider class="my-5"></v-divider>

      <h1>活動 日曆 公告</h1>

    </v-container> -->
    
  </div>
</template>

<script>
export default {
  data () {
    return {
      news: [
        { title: '百魚遊富岡 大魚小魚熱鬧滾滾', date: '2018-09-15', tag: '活動快報', to: '/' },
        { title: '遊覽車富岡展區行車動線公告', date: '2018-09-15', tag: '活動快報', to: '/' },
        { title: '手作體驗 來和藝術家一起創作', date: '2018-09-15', tag: '活動快報', to: '/' },
        { title: '2018桃園地景藝術節在青塘園重現水上劇場！', date: '2018-09-15', tag: '活動快報', to: '/' },
        { title: '快報！玩地景 主題活動時間調整', date: '2018-09-15', tag: '活動快報', to: '/' },
        { title: '來地景 過卡抽好禮', date: '2018-09-15', tag: '活動快報', to: '/' },
        { title: '地景藝術節—廣場藝術表演 就！在！週！日！精彩呈現！', date: '2018-09-15', tag: '活動快報', to: '/' },
        { title: '「2018地景藝術節」街頭藝人活動', date: '2018-09-15', tag: '活動快報', to: '/' },
      ],
      mediaNews: [
        { title: '百魚遊富岡', img: 'http://www.taoyuanlandart.com.tw/images/big5/propic/small/20180915001_XPRO5533.JPG', to: '/' },
      ]
    }
  }
}
</script>

<style>
.my-p {
  height: 100vh;
  margin-top: -100px;
  padding-top: 100px;
}
</style>

