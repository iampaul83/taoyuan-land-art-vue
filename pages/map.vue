<template>
  <div>
    <v-card>
      <v-img src="/images/top-static.jpg" height="300" position="left bottom">
        <v-container fill-height fluid>
          <v-layout column fill-height align-end justify-center>
            <div class="text-xs-center">
              <h1 class="display-1 mb-3 font-weight-black">活動地圖</h1>
              <h1 class="headline font-weight-light grey--text text--darken-2">MAP</h1>
            </div>
          </v-layout>
        </v-container>
      </v-img>
    </v-card>
    
    <v-container>
      <h1>活動地圖</h1>
      <a href="/images/chm001.jpg" target="_blank">
        <v-img :src="`/images/${$vuetify.breakpoint.xs ? 'm' : 'd'}/chm001.jpg`" lazy-src="/images/chm001_tn.jpg"></v-img>
      </a>
      <a href="/images/chm002.jpg" target="_blank">
        <v-img :src="`/images/${$vuetify.breakpoint.xs ? 'm' : 'd'}/chm002.jpg`" lazy-src="/images/chm002_tn.jpg"></v-img>
      </a>
      <a href="/images/chm003.jpg" target="_blank">
        <v-img :src="`/images/${$vuetify.breakpoint.xs ? 'm' : 'd'}/chm003.jpg`" lazy-src="/images/chm003_tn.jpg"></v-img>
      </a>
    </v-container>
  </div>
  
</template>

<script>
export default {
  head: {
    title: '活動地圖 | 2018桃園地景藝術節',
  },
}
</script>

<style>
</style>

