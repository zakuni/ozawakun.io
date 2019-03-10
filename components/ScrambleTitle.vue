<template>
  <span class="scrambleTitle uk-link-reset">
    <span>o</span>
    <span>z</span>
    <span>a</span>
    <span>w</span>
    <span>a</span>
    <span class='space'>&nbsp;</span>
    <span>k</span>
    <span>u</span>
    <span>n</span>
    <span class='period'>.</span>
    <span>i</span>
    <span>o</span>
    <style jsx>{`
      :global(.space) {
        font-size: 0.1rem;
      }
      @media screen and (max-width: 519px) {
        :global(.period) {
          font-size: 1rem;
        }
      }
      @media screen and (min-width: 520px) {
        :global(.period) {
          font-size: 0.9rem;
        }
      }
    `}</style>
  </span>
</template>

<script>
</script>

<style>
.scrambleTitle {
  font-family: 'Georgia';
}
</style>
