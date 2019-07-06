<template>
  <div :class="[currentTheme == 'Dark'? 'has-background-black has-text-light' : '']">
    <div class="columns is-mobile has-padding-20 has-text-centered">
      <div class="column">Hire</div>
      <div class="column">
        <i class="fas fa-angle-right"></i>
      </div>
      <div class="column">
        <i class="fab fa-facebook-square"></i>
      </div>
      <div class="column">
        <i class="fab fa-instagram"></i>
      </div>
      <div class="column">
        <i class="fab fa-twitter-square"></i>
      </div>
      <div class="column">
        <i class="fab fa-linkedin"></i>
      </div>
      <div class="column">
        <i class="fas fa-angle-left"></i>
      </div>
      <div class="column">Contact</div>
    </div>
  </div>
</template>
<script>
export default {
  props:['currentTheme']
}
</script>

<style lang="scss" scoped>
.footer {
  position: fixed;
  bottom: 0;
  width: 100vw;
  height: 5rem;
  background: #f2f2f2;
}
</style>

