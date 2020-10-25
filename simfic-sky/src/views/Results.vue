<template>
    <div class="Results">
        <Navigation></Navigation>

        <v-fab-transition>
            <v-btn color="primary darken-3" dark fab fixed bottom right v-show="showFab" @click="$vuetify.goTo('#app', {duration: 500, offset: 0})">
                <v-icon>keyboard_arrow_up</v-icon>
            </v-btn>
        </v-fab-transition>
        
        <v-card dark class="ma-auto pa-2 text-center" color="transparent" flat>
            <!-- <p>Searched Book : {{sele}} {{ this.selectedBook }}</p> -->
            <!-- <br> -->
            <p>Our book recommendations for the book <span class="font-italic">"{{ this.selectedBook }}"</span></p>
            <p>Factor(s) responsible for the retrieval of the list of books displayed below:                

            <v-tooltip v-for="item in finFeat" :key="item.id" bottom color="black white--text" max-width="250">
                <template v-slot:activator="{ on, attrs }">
                    <v-chip light 
                    small
                    class="primary px-3 mx-3" 
                    v-bind="attrs"
                    @mouseenter= "getData(item)"
                    v-on="on"><v-icon small class="white--text" left>mdi-information</v-icon>  {{item}}</v-chip>
                </template>
                <span>{{locExp}}</span>
            </v-tooltip>
            </p>
            
        </v-card>
        <FloatingButton />
        <v-container fluid grid-list-xs class="px-12 mx-xl-10">
        <v-layout row wrap>
            <v-flex flat xs12 md8 lg8 class="grey--text ma-auto pa-2">
                <v-card flat light v-for="(book, index) in finRes" :key="index" style="border-left-color: red">
                    <v-layout row wrap flat class="mb-1">
                        <v-flex xs6 sm1 md1 class="pa-2 justify-center align-center">
                            <img :src="`${ book.image }`" height="100" alt="" class="text-center ma-auto justify-center align-center">
                        </v-flex>
                        <v-flex xs6 sm1 md1 lg3 order-sm2 light class="pa-2 pl-2 ma-auto justify-center text-center">
                            <a @click="test1('tu'+index, index, book)"><v-icon large color="green lighten-4" :class="`pd-3 pr-5 tu${index} like`" :id="`tu${index}`">thumb_up</v-icon><span class="pa-2" left>Like</span></a><br>
                            <a @click="test1('td'+index, index, book)"><v-icon large color="red lighten-4" :class="`pd-3 pr-5 td${index} dislike`" :id="`td${index}`">thumb_down</v-icon><span>Dislike</span></a><br>
                            <a @click="test1('cs'+index, index, book)"><v-icon x-small color="grey lighten-4" :class="`pd-3 pr-5 cs${index} clear`" :id="`cs${index}`">c</v-icon><span class="grey--text">Clear selection</span></a><br>


                        </v-flex>
                        <v-flex xs10 sm9 md8 class="pa-2 pl-6">
                            <span hidden>{{ index }}</span>
                            <h3 class="px-2" >{{ book.title }}</h3>
                            
                            <h5 class="px-2 mx-1  grey--text font-italic">by {{ book.author }}</h5>
                            <h5  class="px-2 mx-1 grey--text"> -->
                                <!-- <span v-text="searchBookName"></span> -->
                                <!-- <span>Searched book and {{ book.title }} have similar </span> -->
                                <span> Searched book and this book have similar </span>
                            

                                <!-- TOOL TIP FOR EXPLANATION -->
                                <v-tooltip right class="pa-5" color="black" max-width="500">
                                    <template v-slot:activator="{ on, attrs }">
                                        <v-chip small light class="primary" v-bind="attrs"
                                        @mouseenter="getData(finLoc[index])"
                                        v-on="on"><v-icon small class="white--text" left>mdi-information</v-icon> {{finLoc[index]}}</v-chip>
                                    </template>
                                    <span>
                                        {{locExp}} <br>
                                        <table class="pa-4">
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <img :src="`${ book.image }`" height="200" alt="" class="red text-center ma-auto justify-center align-center">
                                                    </td>
                                                    <td>
                                                        <img :src="`${ arrow }`" height="200" alt="" class="text-center ma-auto justify-center align-center">
                                                    </td>
                                                    <td>
                                                        <img :src="`${ sBookimg }`" height="200" alt="" class="text-center ma-auto justify-center align-center">
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    
                                        </span>
                                </v-tooltip>

                                <br>
                            </h5>
                            <v-btn text small target="__blank__" :href="`${ book.readLink }`" class="blue--text">
                                <v-icon text left small class="blue--text">menu_book</v-icon><span >Read now</span></v-btn>
                            <v-expansion-panels flat>
                                <v-expansion-panel>
                                    <v-expansion-panel-header disable-icon-rotate hide-actions class="px-2 primary--text" ripple><span><v-icon small class="primary--text">description</v-icon>Description</span></v-expansion-panel-header>
                                    <v-expansion-panel-content class="px-2">
                                        {{ book.desc }}
                                    </v-expansion-panel-content>
                                </v-expansion-panel>
                            </v-expansion-panels>
                        </v-flex>
                        <v-divider></v-divider>
                    </v-layout>
                </v-card>
            </v-flex>
            <!-- <v-flex xs12 md4 class="mx-auto pa-2"> -->
                <!-- <v-data-table
                    :headers="headers"
                    :items="finRes"
                    :items-per-page="5"
                ></v-data-table> -->
            <!-- </v-flex> -->
            
        </v-layout>
        
       </v-container>
       
    </div>
</template>

<script>
/* eslint-disable */
import Navigation from "@/components/Navigation.vue";
import FloatingButton from '@/components/FloatingButton.vue';
import db from '@/components/firebase'
import explanations from '@/assets/Data/explanations.json';
import arrow from '@/assets/images/1885.png';
    
    export default {
        name : "Results",
        components: {
            Navigation,
            FloatingButton
        },
        data() {
            let searchBookName = ''
            return {
                test: [],
                panel: [0, 1],
                disabled: false,
                readonly: false,
                explanations: explanations,
                headers: [
                    { text: 'Book Name', value: 'title' }
                ],
                finRes: [],
                finFeat: [],
                finLoc: [],
                sele : '',
                selectedBook : '',
                searchBookName : '',
                locExp : '',
                arrow : arrow, 
                sBookimg : '',
                offsetTop: 0
            }
        },
        methods: {
            searchBook_name(){
                this.searchBookName = 'love is love...'
                return this.searchBookName
            },
            onScroll() {
                this.offsetTop = window.pageYOffset || document.documentElement.scrollTop;
            },
            getData(id){
                let searchedBook = this.$store.getters.getTodoByIdBook(this.$store.state.SelectedBook)
                this.sBookimg = searchedBook['image']
                explanations.forEach(element => {
                    if (element['id'].toLowerCase() === id.toLowerCase()){
                        this.locExp = element['value']
                    }
                }); 
            },
            postToDB(rank, book, like){
                let searchId = sessionStorage.getItem('searchId')
                let sessionId = sessionStorage.getItem('SessionId')
                let searchedBook = this.$store.getters.getTodoByIdBook(this.$store.state.SelectedBook)
                let SearchBookName = searchedBook.title
                let resultBookRank = rank
                let resultBookName = book.title
                let today = new Date()
                let now = today.getUTCFullYear()+''+today.getUTCMonth()+''+today.getUTCDay()+''+today.getHours()+''+today.getMilliseconds()
                
                // ADDING TO DATABASE
                db.collection('simfic-db').add({
                    sessionId: sessionId,
                    searchId: searchId,
                    searchBookId: this.$store.state.SelectedBook,
                    SearchBookName : SearchBookName,
                    resultBookRank : resultBookRank,
                    resultBookName : resultBookName,
                    timeStamp : now,
                    liked: like
                }).then(docRef => {
                    console.log(docRef)
                })
                .catch(error => console.log('Database error : ' + error))

            },
            test1(index, rank, book){
                let x = document.getElementById(index)
                let cList = x.classList
                let id = cList[8].substring(2, 3)
                let liked = cList[9]
                let col = cList[5].split('lighten-')[1]
                
                
                if (liked=='like' && col==4){
                    let tu = document.getElementById('tu'+id)
                    let td = document.getElementById('td'+id)
                    tu.className = 'v-icon notranslate material-icons theme--light green--text text--lighten-0 pd-3 pr-5 tu'+ id +' like'
                    td.className = 'v-icon notranslate material-icons theme--light red--text text--lighten-4 pd-3 pr-5 tu'+ id +' dislike'
                    this.postToDB(rank, book, liked)
                }
                else if(liked=='dislike' && col==4){
                    let tu = document.getElementById('tu'+id)
                    let td = document.getElementById('td'+id)
                    tu.className = 'v-icon notranslate material-icons theme--light green--text text--lighten-4 pd-3 pr-5 tu'+ id +' like'
                    td.className = 'v-icon notranslate material-icons theme--light red--text text--lighten-0 pd-3 pr-5 tu'+ id +' dislike'
                    this.postToDB(rank, book, liked)
                }
                else if(liked=='clear'){
                    let tu = document.getElementById('tu'+id)
                    let td = document.getElementById('td'+id)
                    tu.className = 'v-icon notranslate material-icons theme--light green--text text--lighten-4 pd-3 pr-5 tu'+ id +' like'
                    td.className = 'v-icon notranslate material-icons theme--light red--text text--lighten-4 pd-3 pr-5 td'+ id +' dislike'
                    this.postToDB(rank, book, liked)
                    console.log(cList)
                }

            },
            fetchResults(){
                let results = this.$store.state.SelectedBook
                let intRFesults = this.$store.getters.getTodoById(results)
                this.selectedBook = this.$store.getters.getTodoByIdBook(results).title
                this.searchBookName = this.selectedBook
                console.log(this.searchBookName)
                let finRes = new Array()
                intRFesults['books'].forEach(element => {
                    finRes.push(this.$store.getters.getTodoByIdBook(element))
                });
                this.finRes = finRes

                intRFesults['features'].forEach(element => {
                    let current = element;
                    current = current.replace("F", "");
                    current = current.replace("GF", "");
                    current = current.replace("G", "");
                    let val = parseInt(current);

                    if(val==1) {
                        element = "Female oriented";
                    }
                    else if(val==2) {
                        element = "Male oriented";
                    }
                    else if(val>=0 && val<=5 || val>=9 && val<=14) {
                        element = "Author's Writing Style";
                    }
                    else if(val>=6 && val<=8) {
                        element = "Sentence Complexity";
                    }
                    else if(val==15) {
                        element = "Rural or Urban Setting";
                    }
                    else if(val>=16 && val<=18) {
                        element = "Sentiment";
                    }
                    else if(val==19) {
                        element = "Ease of readability";
                    }
                    else if(val==20) {
                        element = "Plot complexity";
                    }
                    else if(val==21) {
                        element = "Lexical richness";
                    }
                    else if(val>=22 && val<=41) {
                        element = "Content Based Genre";
                    }
                    else if(val==42) {
                        element = "Dialog interaction";
                    }
                    else if(val==43) {
                        element = "Main character";
                    }
                    else if(val>=44 && val<=46) {
                        element = "Emotions";
                    }

                    this.finFeat.push(element)
                });			

                this.finFeat = new Set(this.finFeat)

                intRFesults['loc'].forEach(element => {
                    let current = element;
                    current = current.replace("F", "");
                    current = current.replace("GF", "");
                    current = current.replace("G", "");
                    let val = parseInt(current);

                    if(val==1) {
                        element = "Female oriented";
                    }
                    else if(val==2) {
                        element = "Male oriented";
                    }
                    else if(val>=0 && val<=5 || val>=9 && val<=14) {
                        element = "Author's Writing Style";
                    }
                    else if(val>=6 && val<=8) {
                        element = "Sentence Complexity";
                    }
                    else if(val==15) {
                        element = "Rural or Urban Setting";
                    }
                    else if(val>=16 && val<=18) {
                        element = "Sentiment";
                    }
                    else if(val==19) {
                        element = "Ease of readability";
                    }
                    else if(val==20) {
                        element = "Plot complexity";
                    }
                    else if(val==21) {
                        element = "Lexical richness";
                    }
                    else if(val>=22 && val<=41) {
                        element = "Content Based Genre";
                    }
                    else if(val==42) {
                        element = "Dialog interaction";
                    }
                    else if(val==43) {
                        element = "Main character";
                    }
                    else if(val>=44 && val<=46) {
                        element = "Emotions";
                    }

                    this.finLoc.push(element)
                });
                
            }
        },
        created() {
            this.fetchResults()
            this.sele = this.$store.state.SelectedBook
        },
        computed: {
        showFab() {
            return this.offsetTop == 0;
        }
  }
    }
</script>


<style scoped>
.Results{
    background-color: white;
    background-image: url("../assets/images/fin_bg.jpg");
    background-size: cover;
    height: 100%;
}

</style>