import Vue from 'vue'
import Vuex from 'vuex'

import hits from "@/store/modules/hits";

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    hits
  }
})
