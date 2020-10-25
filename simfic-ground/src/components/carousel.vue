<template>
  <v-carousel
    height="400"
    width="800"
    hide-delimiter-background
    hide-delimiters
    show-arrows-on-hover
  >
    <v-carousel-item
      v-for="(slide, i) in slides"
      :key="i"
    >
      <v-sheet
        :color="colors[i]"
        height="100%"
      >
        <v-row
          class="fill-height"
          align="center"
          justify="center"
        >
            <img :src="`${slide}`" alt="Image loading failed" width="100%">
          <!-- <div class="display-3">{{ slide }} Slide</div> -->
        </v-row>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
import car1 from '@/assets/images/carousels/car1.png';
import car2 from '@/assets/images/carousels/car2.png';
import car3 from '@/assets/images/carousels/car3.png';
  export default {
    data () {
      return {
        colors: [
          'indigo',
          'indigo',
          'indigo',
        ],
        slides: [
          car1,
          car2,
          car3,
        ],
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>