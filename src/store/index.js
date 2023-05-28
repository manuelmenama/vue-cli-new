import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios';



Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    baseUrl: "https://flynn.boolean.careers/exercises/api/random/word",
    singleWord: "",
    arrayOfWord: [

    ]

  },
  getters: {},
  mutations: {
    SET_WORD(state, word) {
      state.singleWord = post;
    }
  },
  actions: {
    addWord(){
      
      axios.get(this.state.baseUrl)
        .then((result) => {
            console.log(result.data.response);
            let word = result.data.response;
            commit("SET_WORD", word)
        }).catch((err) => {
            console.log(err);
        });

    },
  },
  modules: {},
});
