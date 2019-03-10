<template>
  <span class="scrambleTitle uk-link-reset">
    <Scramble>o</Scramble><Scramble>z</Scramble><Scramble>a</Scramble><Scramble>w</Scramble><Scramble>a</Scramble><Scramble class='space'>&nbsp;</Scramble><Scramble>k</Scramble><Scramble>u</Scramble><Scramble>n</Scramble><Scramble class='period'>.</Scramble><Scramble>i</Scramble><Scramble>o</Scramble>
  </span>
</template>

<script>
import Scramble from '~/components/Scramble.vue'

export default {
  components: {
    Scramble
  }
}
</script>

<style>
.scrambleTitle {
  font-family: 'Georgia';
}
</style>
