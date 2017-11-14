import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        counter: 0,
        dog: 22
    },
    getters: {
        doubleCounter: state => {
            return state.counter * 2;
        },
        stringCounter: state => {
            return state.counter + ' Click';
        }
    },
    mutations: {
        increment: state => {
            state.counter++;
        },
        decrement: state => {
            state.counter--;
        }
    },
    actions: {
        increment: ({commit}) => {
            console.log('increment');
            commit('increment');
        },
        decrement: ({commit}) => {
            console.log('decrement');
            commit('decrement');
        },
        asyncIncrement: ({commit}) => {
            setTimeout(() => {
                commit('increment');
            }, 1000);
        },
        asyncDecrement: ({commit}) => {
            setTimeout(() => {
                commit('decrement');
            }, 1000);
        }
    }
});