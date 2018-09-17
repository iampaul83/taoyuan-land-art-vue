<template>
  <div>
    <nuxt-child />
    <v-card>
      <v-img src="/images/top-static.jpg" height="300" position="left bottom">
        <v-container fill-height fluid>
          <v-layout column fill-height align-end justify-center>
            <div class="text-xs-center">
              <h1 class="display-1 mb-3 font-weight-black">品藝術</h1>
              <h1 class="headline font-weight-light grey--text text--darken-2">ARTWORKS</h1>
            </div>
          </v-layout>
        </v-container>
      </v-img>
    </v-card>
    
    
    <v-container>
      <!-- <h1>TODO: filter</h1> -->
      <v-container fluid grid-list-xl style="padding: 0;">
        <v-layout row wrap>
          <v-flex
            v-for="(data, n) in artworks"
            :key="n"
            xs12 sm6 md4
          >
            <v-card tile dark :to="`/art/${data.id}`">
              <v-img :src="data.img" height="300">
                <v-container fill-height fluid style="padding: 0;">
                  <v-layout column fill-height justify-end style="margin:0;">
                    <div style="background-color: rgba(0, 0, 0, .3); padding: 10px;">
                      <div class="headline">{{ data.title }}</div>
                      <div>{{data.type}} / {{data.author}}</div>
                    </div>
                  </v-layout>
                </v-container>
              </v-img>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-container>
  </div>
  
</template>

<script>
export default {
  head: {
    title: '品藝術 | 2018桃園地景藝術節',
  },
  data () {
    return {
      artworks: [
        { id: 1, title: '富岡幸福筆記', type: '慢遊富岡', author: '銀濟春', img: 'http://www.taoyuanlandart.com.tw/images/art/1-1.jpg' },
        { id: 2, title: '富岡奇幻綠道', type: '慢遊富岡', author: '陳姵含', img: 'http://www.taoyuanlandart.com.tw/images/art/2-1.jpg' },
        { id: 3, title: '富岡生活 富岡燈', type: '慢遊富岡', author: '都市酵母', img: 'http://www.taoyuanlandart.com.tw/images/art/3-1.jpg' },
        { id: 3, title: '家園', type: '慢遊富岡', author: '林舜龍', img: 'http://www.taoyuanlandart.com.tw/images/art/6-1.jpg' },
      
      ],
    }
  }
}
</script>

<style>
</style>

