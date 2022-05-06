import Vue from 'vue'
import Vuex, {StoreOptions} from 'vuex'
import  { RootState } from './types'
import { sidebar } from './modules/sidebar/index';


Vue.use(Vuex)

const store: StoreOptions<RootState> = {
    state: {
        version: '1.0.0'
    },
    modules: {
      sidebar: sidebar,
    },
    devtools: false
}

export default new Vuex.Store<RootState>(store)