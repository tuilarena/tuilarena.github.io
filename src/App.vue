<template>
  <div id="app">
    <SiteHeader></SiteHeader>
    <router-view/>
    <SiteFooter></SiteFooter>
  </div>
</template>

<script>
import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'
export default {
  components: {
    SiteHeader,
    SiteFooter
  },
  name: 'App'
};
</script>
<style lang="scss">
// Import custom font from Google
@import url('https://fonts.googleapis.com/css?family=Roboto:100,300,400,700,900');

@import './assets/styles/variables.scss';
@import '../node_modules/bootstrap/scss/bootstrap.scss';
// $blue: rgb(35,46,86);
// $yellow: rgb(255,166,17);
// $white_bg: #f7f7f7;

// $font-family: 'Roboto', sans-serif;

// * {
//     font-family: $font-family;
//     font-weight: 400;
// }
</style>