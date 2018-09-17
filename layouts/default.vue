<template>
  <v-app v-scroll="onScroll">
    <v-navigation-drawer
      :mini-variant.sync="miniVariant"
      :clipped="clipped"
      v-model="drawer"
      fixed
      app
      temporary
    >
      <img src="/images/logo@2x.png" style="display: block; width: 100%" class="px-3">
      <v-list>
        <!-- active-class="nav-active" :ripple="false" -->
        <v-list-tile
          router
          :to="link.to"
          :key="i"
          v-for="(link, i) in links"
          exact
          :disabled="!link.to"
        >
          <v-list-tile-content>
            <v-list-tile-title>{{ link.text }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar v-if="$vuetify.breakpoint.mdAndUp" color="#fff" :height="toolbarHeight" fixed app :clipped-left="clipped">
      <v-container style="min-height: unset; height: 100%; margin: auto; padding: 0;">
        <v-layout style="height: 100%;">
          <nuxt-link to="/" style="margin-right: 30px; padding: 5px 0;" :style="{height: toolbarHeight}" class="toolbar-img">
            <img src="/images/logo@2x.png" style="display: block; height: 100%">
          </nuxt-link>
          <!-- <v-toolbar-items class="hidden-sm-and-down"> -->
          <v-toolbar-items class="hidden-sm-and-down" style="height: 60px; align-self: flex-end;">
            <v-btn
              v-for="(link, index) in links" :key="index"
              :disabled="!link.to"
              flat :to="link.to" active-class="nav-active" :ripple="false" class="font-weight-black">
              {{ link.text }}
            </v-btn>
          </v-toolbar-items>
        </v-layout>
      </v-container>
    </v-toolbar>
    <v-toolbar v-else color="#fff" fixed app>
      <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>2018桃園地景藝術節</v-toolbar-title>
    </v-toolbar>
    <v-content>
      <nuxt />
    </v-content>
    <v-footer :fixed="fixed">
      <span>2018 桃園地景藝術節© Taoyuan Land Art Festival. All Rights Reserved.</span>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        toolbarHeight: '100px',
        clipped: false,
        drawer: false,
        fixed: false,
        items: [
          { icon: 'apps', title: 'Welcome', to: '/' },
          { icon: 'bubble_chart', title: 'Inspire', to: '/inspire' }
        ],
        miniVariant: false,
        right: true,
        rightDrawer: false,
        title: 'Vuetify.js',
        links: [
          { text: '關於藝術節', to: '/about' },
          { text: '活動地圖', to: '/map' },
          { text: '品藝術', to: '/art' },
          { text: '玩地景', to: '' },
          { text: '看表演', to: '' },
          { text: '樂踩街', to: '' },
          { text: '旅行趣', to: '' },
          { text: '如何抵達', to: '' },
          { text: '下載專區', to: '' },
        ]
      }
    },
    mounted () {
      
    },
    methods: {
      onScroll (e) {
        const top = window.pageYOffset || document.documentElement.scrollTop
        this.toolbarHeight = top < 10 ? '100px' : '60px'
      }
    }
  }
</script>

<style>
.nav-active {
  color: #1ABC9C !important;
}
.application.theme--light {
  background-color: #fff;
}
.toolbar-img {
  transition: height .4s ease;
}
.v-toolbar__content {
  transition: height .4s ease;
}
.v-btn:hover:before {
  background-color: unset;
}
</style>
