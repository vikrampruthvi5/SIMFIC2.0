<template>
  <div class="pa-0">
    <v-dialog v-model="dialog" scrollable max-width="900px">

      <template v-slot:activator="{ on, attrs }">
        <v-btn small light color="primary" class="ml-1" v-bind="attrs" v-on="on">
          <v-icon small left>extension</v-icon>
          <span class="py-auto"><b>Take tour</b></span>
        </v-btn>

      </template>
      <v-card>
        <v-card-title>SIMFIC quick tour</v-card-title>
        <v-divider></v-divider>
        <v-card-text style="height: 100%;">
          <carousel></carousel>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
          <!-- <v-btn color="blue darken-1" text @click="dialog = false">Save</v-btn> -->
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import carousel from '@/components/carousel.vue';
  export default {
      name: "tour",
      components: {
        carousel,
      },
    data () {
      return {
        dialogm1: '',
        dialog: false,
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>