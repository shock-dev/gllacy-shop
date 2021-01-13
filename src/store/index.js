import Vue from 'vue'
import Vuex from 'vuex'

import hits from "@/store/modules/hits";
import products from "@/store/modules/products";
import cart from "@/store/modules/cart";
import helpers from "@/store/modules/helpers";

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    hits,
    products,
    cart,
    helpers
  }
})
