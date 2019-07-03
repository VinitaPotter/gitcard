<template>
  <div class="main-body">
    <div v-if="!gitcard" class="is-size-3 has-text-centered has-margin-auto">
      <p>` Generate Sharable GitHub Profile Cards `</p>
      <img src="../assets/icard.png" clas="image" style="height:300px;width:300px;" />
      <p>{ { Copy of <a href="https://shubhaemk.github.io/gitcard/" target="_blank">
          Shubham Kamath's</a> project in Vue } }</p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      gitcard: false
    };
  }
};
</script>

<style lang="scss" scoped>
.main-body {
  display: flex;
  height: 82vh;
  background-color: #e6e6e6;
  align-items: center;
}
</style>


