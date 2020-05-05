import Vue from "vue";
import Vuex from "vuex";

import * as types from './mutation-types';
import homeStore from "./modules/homeStore";
import appStore from "./modules/appStore";
import bracketStore from "./modules/bracketStore";
import axios from 'axios';

const SERVER_URL = 'http://localhost:3000';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        currentUser: {},
        popoutMenuActive: false
    },
    mutations: {
        [types.TOGGLE_POPOUT_MENU](state) {
            state.popoutMenuActive = !state.popoutMenuActive;
        }
    },
    actions: {
        [types.SET_CURRENT_USER]({ state }) {
            axios.get(`${SERVER_URL}/db/users/1`)
                .then(({ data }) => {
                    state.currentUser = data;
                }, () => {
                    console.error('Something went wrong when assigning the current user.');
                });
        }
    },
    modules: {
        homeStore,
        appStore,
        bracketStore
    }
});
