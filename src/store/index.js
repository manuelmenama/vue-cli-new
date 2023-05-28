import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios';



Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    singleWord: "",
    arrayOfWord: [

    ]

  },
  getters: {},
  mutations: {
  },
  actions: {
    addWord(){
      

      axios.get("https://flynn.boolean.careers/exercises/api/random/word")
        .then((result) => {
            
            console.log(result.data);
        }).catch((err) => {
            console.log(err);
        });

      
    },
  },
  modules: {},
});
