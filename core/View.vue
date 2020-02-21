<template>
  <v-content id="pages">
    <!-- <v-img :src="src" gradient="to top, rgba(0, 0, 0, .5), rgba(0, 0, 0, .5)" min-height="100%"> -->
    <v-img :src="src" gradient="to top, rgba(0, 0, 0, .5), rgba(0, 0, 0, .5)" min-height="100vh">
      <nuxt keep-alive />
    </v-img>
  </v-content>
</template>

<script>

export default {
  data: () => ({
    srcs: {
      "/login": "login.jpg",
      "/register": "register.jpg"
    }
  }),
 
  computed: {
    src() {
      let url = "";
      const _route = this.$route.path;
      if (
        _route.indexOf("/login") !== -1 ||
        _route.indexOf("/register") !== -1
      ) {
        url = require(`~/assets/${this.srcs[_route]}`);
      }
      return url;
    }
  }
};
</script>
<style lang='scss' scoped>
#pages {
  background-color: #eee;
}
// #pages {
//   // .v-responsive__sizer {
//   //   display: none;
//   // }
// }
// @import '~vuetify/src/styles/styles.sass';

// $grid-breakpoints: (
//   'xs': 600px,
//   'sm': 768px,
//   'md': 960px - 16px,
//   'lg': 1280px - 16px,
//   'xl': 1300px
// );

// $container-max-widths:(
//   (
//     'xs': map-get($grid-breakpoints, 'xs') * 0.9375,
//     'sm': map-get($grid-breakpoints, 'sm') * 0.9375,
//     'md': map-get($grid-breakpoints, 'md') * 0.9375,
//     'lg': map-get($grid-breakpoints, 'lg') * 0.9375,
//     'xl': map-get($grid-breakpoints, 'xl') * 1
//   )
// );

// @media #{map-get($display-breakpoints, 'md-and-down')}
//   .custom-class
//     display: none
@media (min-width: 1400px) {
  .container {
    background-color: #fff;
    max-width: 1280px;
  }
}
// xs: 600,
// sm: 768,
// md: 960,
// lg: 1280,
// xl: 1300

// {
//   xs: '480px',
//   sm: '576px',
//   md: '768px',
//   lg: '992px',
//   xl: '1280px',
//   xxl: '1300px',
// }
</style>
