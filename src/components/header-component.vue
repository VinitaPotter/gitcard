<template>
  <div class="header" :class="[currentTheme == 'Dark'? 'has-background-black has-text-light' : '']">
    <div class="columns is-mobile is-multiline has-padding-10">
      <div class="column has-text-dark is-4-mobile">
        <div class="level">
          <div class="level-left is-size-3 is-size-6-mobile">
            <i class="fab fa-github has-margin-right-10" :class="[currentTheme == 'Dark'? 'has-text-light' : '']"></i>
            <span class="has-text-weight-bold" :class="[currentTheme == 'Dark'? 'has-text-light' : '']">GitCard</span>
          </div>
          <div class="level-right is-size-7 is-italic is-hidden-mobile" :class="[currentTheme == 'Dark'? 'has-text-light' : '']">Generate Shareable GitHub cards</div>
        </div>
      </div>

      <div class="column is-size-4  is-8-mobile has-text-centered">
        <span class="is-hidden-mobile" :class="[currentTheme == 'Dark'? 'has-text-light' : '']">{ { </span>
        <input class="input is-half-width-tablet is-full-mobile" type="text" v-model="inputName" placeholder="GitHub user name" @keyup.enter="$emit('inputAdded', inputName)"/>
        <span class="is-hidden-mobile" :class="[currentTheme == 'Dark'? 'has-text-light' : '']"> } } </span>
      </div>
      <div class="column is-12-mobile has-text-dark has-margin-bottom-20-mobile">
        <div class="level is-mobile">
          <div class="level-left is-size-7 is-italic" :class="[currentTheme == 'Dark'? 'has-text-light' : '']">Made with GitHub,Vue and Bulma by</div>
          <div class="level-right is-mobile is-size-3-desktop is-size-7-mobile">
            <span class="has-text-weight-bold  is-3" :class="[currentTheme == 'Dark'? 'has-text-light' : '']">Vinita</span>
            <figure class="image is-32x32 is-64x64-mobile has-margin-left-10">
              <img class="is-rounded " src="../assets/girl.jpg" >
            </figure>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['currentTheme'],
  data(){
    return {
      inputName: null,
    }
  },
  
};
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
