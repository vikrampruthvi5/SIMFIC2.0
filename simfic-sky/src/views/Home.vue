<template>
  <div class="home">
    <Navigation class="nav nav-extended"></Navigation>
    <v-container fluid>
    <v-layout fill-height row>
      <v-flex xs12 md6 order-xs1 class="hidden-sm-and-down">
        <v-card light tile flat color="transparent">
          <h2 class="orange--text pl-3 pt-5">Quick searches</h2>
            <LeftPane />
        </v-card>
      </v-flex>
      <v-flex xs12 md6 >
        <v-card light tile flat color="transparent">
            <RightPane></RightPane>
        </v-card>
      </v-flex>
    </v-layout>
    </v-container>
  </div>
</template>

<script>
// Dependencies import
// import axios from "axios";
// @ is an alias to /src
import Navigation from '@/components/Navigation.vue';
import LeftPane from '@/components/LeftPane.vue';
import RightPane from '@/components/RightPane.vue';
// import tour from '@/components/tour.vue';

export default {
  name: "Home",
  components: {
    LeftPane,
    RightPane,
    Navigation,
    // tour,
  },
  data() {
    return {
        response: null,
    }
  },
  created() {
  },
};
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Yellowtail&display=swap');
  .home{
    background-color: #eceff0;
    /* background-image: url("https://material-crypto.vuetifyjs.com/img/blob-top-min.3a5c5dfb.png"); */
    background-image: url("../assets/images/fin_bg.jpg");
    /* background-image: url("../assets/images/bg.jpg"); */
    background-size: cover;
    height: 100%;
  }
</style>

