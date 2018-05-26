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
