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
html,
body {
  background: #fbfbfb;
  font-family: Georgia, 'Times New Roman', Times, serif;
}

b {
  font-weight: 500;
}

h2,
h3,
h4 {
  font-family: Georgia, 'Times New Roman', Times, serif;
}

h2 {
  font-weight: 450;
}
h5 {
  font-weight: 500;
}

#about {
  font-family: Georgia, 'Times New Roman', Times, serif;
  color: #333;
}

article > p {
  font-family: Georgia, 'Times New Roman', Times, serif;
}

.uk-h3,
.uk-h4 {
  font-family: Georgia, 'Times New Roman', Times, serif;
}
.uk-icon-button {
  background: #fbfbfb;
}
</style>
