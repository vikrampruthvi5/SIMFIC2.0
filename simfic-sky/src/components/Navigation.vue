<template>
    <v-toolbar dark dense flat height="80">
      <v-toolbar-title class="white--text pa-5 text-center" color="white" to="/home" style="font-family: 'Roboto', cursive; font-size: 40px">SIMFIC 2.0<span class="pl-5" color="white">Sky</span></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn small light color="primary" class="ml-1" to='/home'><v-icon small left>house</v-icon><span class="py-auto"><b>Home</b></span></v-btn>
      <tour></tour>
      <!-- <v-btn small light color="primary" class="ml-1" target='__blank__' href='https://simfic-feed.firabaseapp.com'><v-icon small left>feedback</v-icon><span class="py-auto"><b>Feedback</b></span></v-btn> -->

    </v-toolbar>
</template>


<script>

import navi from '@/assets/images/abg.png';
import tour from '@/components/tour.vue';
    export default {
        name: "Navigation",
        computed: {
          
        },
        data() {
          return {
            navi: navi
          }
        },
        components: {
          tour
        }
    }
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Yellowtail&display=swap');

</style>