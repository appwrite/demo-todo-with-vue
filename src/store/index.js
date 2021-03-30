import { createStore } from 'vuex';
import todos from './modules/todos';
import account from './modules/account'


/** Global store */
const state = {
    error : {}
}

const getters = {
    getError: (state) => state.error
}

const actions = {

}

const mutations = {
    setError: (state, error) => state.error = error
}

const store = createStore({
    state, 
    getters,
    actions,
    mutations,
    modules: {
        todos,
        account
    }
});

// Create Store
export default store;
