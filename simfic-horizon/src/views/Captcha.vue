<template>
  <div class="Captcha">
    <v-container
          class="fill-height"
          fluid
        >
          <v-row
            align="center"
            justify="center"
          >
            <v-col
              cols="12"
              sm="8"
              md="4"
            >
    <v-card
      dark
      max-width=500
      raised
      shaped
      class="mx-auto pa-3"
    >
    <v-progress-linear
        indeterminate
        color="orange"
        active
    ></v-progress-linear>
    <v-card-title orange--text>
      <h2 class="orange--text text-center justify-center align-center mx-auto">Welcome to SIMFIC 2.0</h2>
    </v-card-title>
    <blockquote class="grey--text px-8 font-italic" small>“If you don’t like to read, you haven’t found the right book.”<p class="text-right caption ">- - J.K. Rowling</p></blockquote>
      <p class="px-3 justify-center caption"></p>
    <v-card-text>
      <v-text-field
        name="name"
        :label="`what is ${x} + ${y}`"
        id="answer"
        class="ma-auto px-8"
        @keyup="enter"
        type="number"
        autocomplete="off"
      >
      </v-text-field>
    <p class="red--text" :hidden="isHidden"><v-icon small left class="red--text">error</v-icon>Please check your answer</p>
    <!-- <v-container>
      <v-row justify="center">
        <v-col md="4">
          <v-btn small color="orange" light>
          <v-icon left small>refresh</v-icon>
          Refresh</v-btn>
        </v-col>
        <v-col md="4">
          <v-btn @click="enter" class="justify-center align-center" small color="orange" light>
          <v-icon left small>exit_to_app</v-icon>
          Enter site</v-btn>
        </v-col>
      </v-row>
    </v-container> -->
    <p class="px-8 grey--text font-italic caption">(Answer correctly to login to the site)</p>
      
    </v-card-text>
    </v-card>
            </v-col>
          </v-row>
    </v-container>
  </div>
</template>

<script>
  
  // Check session ID now
  let sessSet = sessionStorage.getItem('SessionId')
  if(sessSet==null){
    var currentDate = new Date();
    let sessionId = currentDate.getMonth().toString()+currentDate.getDate().toString()+currentDate.getSeconds().toString()+currentDate.getMilliseconds().toString()
    sessionStorage.setItem('SessionId', sessionId)
    sessionStorage.setItem('searchId', 0)
  }
  

  export default {
    data() {
      return {
        x: Math.floor((Math.random() * 10) + 1),
        y: Math.floor((Math.random() * 10) + 1),
        isHidden: true,
      }
    },
    methods: {
      refresh(){
        
      },
      enter(e){
        if((this.x+this.y).toString()===e.target.value){
          this.isHidden = true;
         this.$router.push('/home');
        }
        else{
         this.isHidden = false; 
        }
      }
    },
  }
</script>

<style scoped>
  .Captcha{
    width: 100%;
    height: 100%;
    background-image: url("../assets/images/t2.png");
    background-color: rgb(19, 19, 19);
    background-size: cover;
  }
</style>