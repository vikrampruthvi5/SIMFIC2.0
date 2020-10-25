import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import books from "@/assets/Data/extracted_info.json"
import results from "@/assets/Data/results.json"
import explanations from '@/assets/Data/explanations.json';

export default new Vuex.Store({
  state: {
    resultsStore: [],
    allbooks:books["books"],
    SelectedBook : "",
    results : results,
    locEx : "",
    explanations: explanations,
    books: [
      {"id": "108", "title": "The Return of Sherlock Holmes", "genre": "Detective and Mystery", "language": "en", "author": "Arthur Conan Doyle", "image": "http://books.google.com/books/content?id=xgnTteuZ694C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api", "readLink": "http://www.gutenberg.org/files/108/108-h/108-h.htm", "desc": "In 1891, the great detective, Sherlock Holmes, disappeared in Switzerland while working on a dangerous case. Everyone thought he was dead, but three years later he returned to England. Holmes and his friend, Dr Watson, had many more adventures together. Three of his most interesting cases feature in this book."},
      {"id": "730", "title": "Oliver Twist", "genre": "Literary", "language": "en", "author": "Charles Dickens", "image": "http://books.google.com/books/content?id=1bMXAAAAYAAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api", "readLink": "http://www.gutenberg.org/files/730/730-h/730-h.htm", "desc": "At the heart of Charles Dickens's second novel, first published in 1838, is a story as much about crime and poverty as it is about justice and charity. Orphaned at birth, Oliver Twist grows up under the loveless, relentless watch of a workhouse. He runs away with hopes for a better life in London, only to become--at the hands of the unforgettable Artful Dodger--a guileless pawn in a gang of pickpockets and robbers working for Fagin, one of Dickens's most controversial villains. Full of ingenious plot twists, at turns thrilling, tragic, tender, and sharp-eyed, The Adventures of Oliver Twist is among Dickens's most enduring classics. This is a free digital copy of a book that has been carefully scanned by Google as part of a project to make the world's books discoverable online. To make this print edition available as an ebook, we have extracted the text using Optical Character Recognition (OCR) technology and submitted it to a review process to ensure its accuracy and legibility across different screen sizes and devices. Google is proud to partner with libraries to make this book available to readers everywhere."},
      {"id": "14876", "title": "The Forest Runners", "genre": "Childrens", "language": "en", "author": "Joseph Altsheler", "image": "http://books.google.com/books/content?id=kxV9DwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api", "readLink": "http://www.gutenberg.org/files/14876/14876-h/14876-h.htm", "desc": "Excerpt from The Forest Runners: A Story of the Great War Trail in Early Kentucky Paul stopped now and then to listen. He would have uttered the long forest shout, as a signal to his comrade, but even that was forbidden. Henry had seen signs in the forest that indicated more than once to his infallible eye the presence of roving warriors from the north, and no risk must be taken. But, as usual, it was only the note of the wilderness that came to his ears. He stopped also once or twice, not to listen, but to look at the splendid country, and to think What a great land it would surely be. About the Publisher Forgotten Books publishes hundreds of thousands of rare and classic books. Find more at www.forgottenbooks.com This book is a reproduction of an important historical work. Forgotten Books uses state-of-the-art technology to digitally reconstruct the work, preserving the original format whilst repairing imperfections present in the aged copy. In rare cases, an imperfection in the original, such as a blemish or missing page, may be replicated in our edition. We do, however, repair the vast majority of imperfections successfully; any imperfections that remain are intentionally left to preserve the state of such historical works."},
      {"id": "27220", "title": "Himmelsvolk", "genre": "Fantasy fiction", "language": "de", "author": "Waldemar Bonsels", "image": "http://books.google.com/books/content?id=twtJAQAAMAAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api", "readLink": "http://www.gutenberg.org/files/27220/27220-h/27220-h.htm", "desc": "HimmelsvolkEin Buch von Blumen, Tieren und GottWaldemar Bonsels"},
      {"id": "41522", "title": "Die Weltensegler Drei Jahre auf dem Mars", "genre": "Science fiction", "language": "de", "author": "Albert Daiber", "image": "http://books.google.com/books/content?id=rJyLDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api", "readLink": "http://www.gutenberg.org/files/41522/41522-h/41522-h.htm", "desc": "Description currently un available"}, 
      {"id": "15559", "title": "Robur der Sieger", "genre": "Science fiction", "language": "de", "author": "Jules Verne", "image": "http://books.google.com/books/content?id=G-5tBAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api", "readLink": "http://www.gutenberg.org/files/15559/15559-h/15559-h.htm", "desc": "\"Robur der Eroberer\" (auch \"Robur der Sieger\", \"Robur der Flieger\", fr. \"Robur-le-conqu\u00e9rant\") ist ein Roman des franz\u00f6sischen Autors Jules Verne. Der Roman wurde erstmals als Buch 1886 von dem Verleger Pierre-Jules Hetzel ver\u00f6ffentlicht. Eine Vorab-Ver\u00f6ffentlichung erfolgte im \"Journal des D\u00e9bats politiques et litt\u00e9raires\" in der Zeit vom 29. Juni bis zum 18. August 1886. Die erste deutschsprachige Ausgabe erschien 1887 unter dem Titel \"Robur der Sieger\"."},
      {"id": "21701", "title": "The Settler and the Savage", "genre": "Children", "language": "en", "author": "Robert Michael Ballantyne", "image": "http://books.google.com/books/content?id=4cJDAQAAMAAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api", "readLink": "http://www.gutenberg.org/files/21701/21701-h/21701-h.htm", "desc": "This is a pre-1923 historical reproduction that was curated for quality. Quality assurance was conducted on each of these books in an attempt to remove books with imperfections introduced by the digitization process. Though we have made best efforts - the books may have occasional errors that do not impede the reading experience. We believe this work is culturally important and have elected to bring the book back into print as part of our continuing commitment to the preservation of printed works worldwide."}, 
      {"id": "21706", "title": "Twice Bought", "genre": "Children", "language": "en", "author": "Robert Michael Ballantyne", "image": "http://books.google.com/books/content?id=HpyLDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api", "readLink": "http://www.gutenberg.org/files/21706/21706-h/21706-h.htm", "desc": "This work has been selected by scholars as being culturally important and is part of the knowledge base of civilization as we know it. This work is in the public domain in the United States of America, and possibly other nations. Within the United States, you may freely copy and distribute this work, as no entity (individual or corporate) has a copyright on the body of the work. Scholars believe, and we concur, that this work is important enough to be preserved, reproduced, and made generally available to the public. To ensure a quality reading experience, this work has been proofread and republished using a format that seamlessly blends the original graphical elements with text in an easy-to-read typeface. We appreciate your support of the preservation process, and thank you for being an important part of keeping this knowledge alive and relevant."}, 
    ]
  },
  mutations: {
    setlocEx(state, id){
      state.locEx = id
    },
    selectedSearchBook(state, id){
      state.SelectedBook = id
    },
    EmptySearchResultAdd(state){
      state.resultsStore = []
    },
    searchResultAdd(state, dat){
      state.resultsStore.push(dat)
    }
  },
  actions: {},
  modules: {},
  getters: {
    germanBooks: state => {
      return state.allbooks.filter(book => {
        if(book.language==="de"){
          return true;
        }
        else{
          return false;
        }
      })
    },
    englishBooks: state => {
      return state.allbooks.filter(book => {
        if(book.language==="en"){
          return true;
        }
        else{
          return false;
        }
      })
    },
    getTodoById: (state) => (id) => {
      return state.results.find(result => result.id === id)
    },
    getexplanationByFeature: (state) => () => {
      explanations.forEach(element => {
          if (element['id'] === state.locEx){
            return element['value']
          }
          else{
            return 'Unable to find'
          }
      }); 
      
    },
    getTodoByIdBook: (state) => (id) => {
      return state.allbooks.find(book => book.id === id)
    },
  },
  
});
