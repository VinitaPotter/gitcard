<template>
  <div class="main-body" :class="[theme == 'Dark'? 'has-background-dark has-text-light' : '']">
    <div
      v-if="!Object.keys(userData).length"
      class="is-size-3 is-size-6-mobile has-margin-top-50-mobile has-text-centered has-margin-auto"
      :class="[theme == 'Dark'? 'has-text-light' : '']"
    >
      <p>` Generate Sharable GitHub Profile Cards `</p>
      <img src="../assets/icard.png" clas="image" style="height:300px;width:300px;" />
      <p>
        Copy of
        <a href="https://shubhaemk.github.io/gitcard/" target="_blank">Shubham Kamath's</a> project in Vue
      </p>
    </div>
    <div v-else>
      <div class="columns has-margin-top-60-mobile has-padding-20-mobile">
        <div class="column is-7-desktop is-offset-1-desktop user-card">
          <div
            class="card box"
            :class="[theme == 'Dark'? 'has-background-black has-text-light' : '']"
          >
            <div class="card-body">
              <article class="media card-content columns is-multiline">
                <div class="avatar column is-3-desktop">
                  <p
                    class="image has-margin-right-20 has-margin-bottom-10 is-2by2 is-hidden-mobile"
                  >
                    <img :src="userData.avatar_url" style="borderRadius:10px" />
                  </p>
                  <p>@{{userData.login}}</p>
                  <p class="is-size-7">
                    <i class="fas fa-briefcase has-margin-right-5-mobile has-margin-10-desktop"></i>
                    {{userData.company}}
                  </p>
                  <p class="is-size-7">
                    <i
                      class="fas fa-map-marker-alt has-margin-right-5-mobile has-margin-10-desktop"
                    ></i>
                    {{userData.location}}
                  </p>
                  <p
                    class="is-size-7 is-hidden-desktop"
                    :class="[userData.bio ? 'has-text-grey-light' : '']"
                  >
                    <i class="fas fa-book-reader has-margin-right-5-mobile has-margin-10-desktop"></i>
                    {{userData.bio ? userData.bio : '*Bio not available'}}
                  </p>
                </div>
                <div class="media-content column is-6-desktop">
                  <div class="content">
                    <p
                      class="is-size-4 is-size-6-mobile"
                    >{{reposToShow == 1 ? 'Latest Repository' : ' Repositories'}}</p>
                    <div class="columns is-grouped is-multiline has-margin-right-50">
                      <div
                        v-for="repo in userRepos.slice(0, reposToShow)"
                        :key="repo.id"
                        class="column is-6"
                      >
                        <p
                          class="is-marginless"
                          :class="[reposToShow == 1? 'level is-mobile' : '']"
                        >
                          <i
                            class="fas fa-code-branch has-margin-right-5"
                            :class="[reposToShow == 1? 'level-left' : '']"
                          ></i>
                          <span :class="[reposToShow == 1? 'level-right' : '']">{{repo.name}}</span>
                        </p>
                        <small
                          class="is-size-7 has-text-grey"
                          :class="[reposToShow == 1? 'level is-mobile' : '']"
                        >
                          <i
                            class="fas fa-code has-margin-right-5-mobile"
                            :class="[reposToShow == 1? 'level-left' : '']"
                          ></i>
                          <span :class="[reposToShow == 1? 'level-left'  : '']">{{repo.language}}</span>
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="column is-3-desktop is-barcode has-text-centered">
                  <barcode v-bind:value="barcodeValue">Show this if the rendering fails.</barcode>
                </div>
              </article>
            </div>
          </div>
        </div>
        <div class="column is-4" :class="[theme == 'Dark'? 'has-text-light' : '']">
          <p class="is-size-3 is-invisible-mobile">Theme your card!</p>
          <input
            type="radio"
            id="one"
            value="White"
            v-model="theme"
            @change="$emit('themeChanged', theme)"
          />
          <label for="one" class="has-margin-right-20">White</label>
          <input
            type="radio"
            id="two"
            value="Dark"
            v-model="theme"
            @change="$emit('themeChanged', theme)"
          />
          <label for="two">Dark</label>
          <br />
          <span>Selected theme: {{ theme }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import VueBarcode from "vue-barcode";
export default {
  props: ["userData", "userRepos"],
  components: {
    barcode: VueBarcode
  },
  data() {
    return {
      gitcard: false,
      barcodeValue: "test",
      theme: "White",
      reposToShow: 0
    };
  },
  created() {
    innerWidth <= 425 ? (this.reposToShow = 1) : (this.reposToShow = 4);
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

.avatar {
  img {
    width: 75%;
  }
}

@media only screen and (max-width: 600px) {
  .user-card {
    max-width: 100vw;
    max-height: 50vh;
  }
  .avatar {
    img {
      width: 25%;
    }
  }
}
</style>


