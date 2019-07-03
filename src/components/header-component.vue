<template>
  <div class="header">
    <div class="columns has-padding-10">
      <div class="column has-text-dark">
        <div class="level">
          <div class="level-left is-size-3">
            <i class="fab fa-github has-margin-right-10"></i>
            <span class="has-text-weight-bold">GitCard</span>
          </div>
          <div class="level-right is-size-7 is-italic">Generate Shareable GitHub cards</div>
        </div>
      </div>
      <div class="column is-size-4 has-text-centered">
        {{<input class="input is-half-width" type="text" placeholder="GitHub user name"/>}}
      </div>
      <div class="column has-text-dark">
        <div class="level">
          <div class="level-left is-size-7 is-italic">Made with GitHub,Vue and Bulma by</div>
          <div class="level-right is-size-3">
            <span class="has-text-weight-bold">Vinita</span>
            <figure class="image is-32x32 has-margin-left-10">
  <img class="is-rounded" src="https://bulma.io/images/placeholders/32x32.png">
</figure>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.header {
  height: 5rem;
  background: #f2f2f2;
}
input::placeholder{
  color: black;
  font-family: "Roboto Mono", monospace;

  }

</style>
