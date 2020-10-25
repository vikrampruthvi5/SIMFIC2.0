<template>
    <div dark class="pa-3 justify-center align-center ma-auto">
        <v-card class="justify-center align-center ma-auto pane" dark flat color="transparent">
            <div min-height="100"></div>
            <v-form class="px-5 panell">
                <h1 class="orange--text lighten-5">Welcome to SIMFIC 2.0</h1>
                <v-combobox
                
                    v-model="selectgenre"
                    :items="genre"
                    id="genrecb"
                    label="Select by Genre"
                    class="orange--text"
                    eager
                    clearable
                    @change="GenreChange"
                    hide-selected
                ></v-combobox>
                <v-combobox
                
                    v-model="selectauthor"
                    :items="author"
                    id="authorcb"
                    label="Select by Author"
                    clearable
                    @change="AuthorChange"
                    hide-selected
                ></v-combobox>
                <v-combobox
                
                    v-model="selecttitle"
                    :items="title"
                    id="titlecb"
                    label="Select a Book"
                    clearable
                ></v-combobox>
                <v-radio-group v-model="radios" row>
                    <v-radio  label="English" value="english" class="black--text" @change="langChange('english')"></v-radio>
                    <v-radio label="German" value="german" class="black--text" @change="langChange('germany')"></v-radio>
                </v-radio-group>
                <v-btn dark color="gray darken-2" @click="fetchResults()">Search</v-btn>
                <span class="pl-4 red--text" :hidden="errHidden">* Select a book to search</span>
            </v-form>
        </v-card>
    </div>
</template>

<script>
// import axios from 'axios'
    export default {
        data() {
            return {
                expand: false,
                selectgenre: '',
                selectauthor: '',
                selecttitle: '',
                genre: [],
                author: [],
                title: [],
                keys: [],
                radios: 'english',
                books: null,
                dumm1 : null,
                errHidden : true
            }
        },
        methods: {
            fetchResults(){
                if(this.selecttitle!=''){
                    for (let [key, value] of Object.entries(this.books)) {
                        if(value.title === this.selecttitle){
                            this.dumm1=key
                            this.$store.commit('selectedSearchBook', value.id)
                            sessionStorage.setItem('searchId', parseInt(sessionStorage.getItem('searchId'))+1)
                            this.$router.push('/results')
                        }
                    }
                }
                else{
                    this.errHidden=false
                }
            },
            updateDropDowns(){
                this.keys = []
                this.genre = []
                this.keys = []
                this.author = []
                this.title = []
                for (let [key, value] of Object.entries(this.books)) {
                    this.keys.push(key)
                    this.genre.push(value.genre.trim())
                    this.author.push(value.author.trim())
                    this.title.push(value.title)
                }
            },
            langChange(radioLanguage){
                if(radioLanguage==='english'){
                    this.books = this.$store.getters.englishBooks
                    this.updateDropDowns()
                }
                else{
                    this.books = this.$store.getters.germanBooks
                    this.updateDropDowns()
                }
            },
            GenreChange(){
                this.keys = []
                this.author = []
                this.title = []
                try{
                    this.selectgenre.length
                    for (let [key, value] of Object.entries(this.books)) {
                        if(value.genre===this.selectgenre){
                            this.keys.push(key)
                            this.author.push(value.author)
                            this.title.push(value.title)
                        }
                    }
                }
                catch{
                    this.updateDropDowns()
                }
            },
            AuthorChange(){
                this.keys = []
                this.title = []
                try{
                    this.selectauthor.length
                    for (let [key, value] of Object.entries(this.books)) {
                        if(value.author===this.selectauthor){
                            this.keys.push(key)
                            this.title.push(value.title)
                        }
                    }
                }
                catch{
                    this.updateDropDowns()
                }
            },
        },

        created() {
            this.books = this.$store.getters.englishBooks
            this.updateDropDowns();
        },
    }
</script>

<style scoped>
.RightPane{
    padding: 3px;
}

.v-input__slot{
    width: 50%;
}

.pane{
    width: 70%;
    
}

@media only screen and (max-width: 300px) {
    .panell {
        margin: 0 !important;  
    }
  }

</style>