<template>
  <div id="app">
    <SiteHeader></SiteHeader>
    <router-view/>
  </div>
</template>

<script>
import SiteHeader from '@/components/SiteHeader'
export default {
  components: {
    SiteHeader
  },
  name: 'App'
};
</script>
<style lang="scss">
$blue: rgb(35,46,86);
$yellow: rgb(255,166,17);
$white_bg: #f7f7f7;

$font-family: 'Roboto', sans-serif;

* {
    font-family: $font-family;
    font-weight: 400;
}
</style>