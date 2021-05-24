import { createStore } from 'vuex'
import highlights from '../store/modules/highlights'

const store = createStore({
    modules: {
        highlights,
    },
})

export default store
