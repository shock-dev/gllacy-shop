import Vue from 'vue'
import Vuex from 'vuex'

import hits from "@/store/modules/hits";
import products from "@/store/modules/products";

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    hits,
    products
  }
})
