<template>
  <div>
    <TopBar />
    <nuxt />
    <Footer />
  </div>
</template>

<script>
import TopBar from '~/components/TopBar.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    TopBar,
    Footer
  }
}
</script>

<style>
</style>
