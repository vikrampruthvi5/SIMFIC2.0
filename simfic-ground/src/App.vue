<template>
  <v-app>
    <v-content class="red">
     <router-view />
    </v-content>

    
  </v-app>
</template>

<script>
export default {
  name: "App",
  components: {
  },
  created() {
    
  },
  data() {
    return {
      
    };
  },
  methods: {
    
  },
  
};
</script>


<style>

html ::-webkit-scrollbar { width: 0 !important }  

html { overflow: -moz-scrollbars-none; }

html { -ms-overflow-style: none; }

html, body {
   scrollbar-width: none;
}

</style>
