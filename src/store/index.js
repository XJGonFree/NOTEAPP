import * as Vuex from "vuex";

const store = Vuex.createStore({
    state() {
        return {
            content: ""
        }
    },
    mutations: {
        updateContent:(state,content)=>{
            state.content = content;
        }
    }
});

export default store;