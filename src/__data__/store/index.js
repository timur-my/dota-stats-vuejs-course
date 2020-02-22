import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

import * as types from '../constants/mutation-types'
import { API_URLS } from '../constants/api-urls'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        players: []
    },
    actions: {
        async getProPlayers({commit}) {
            try {
                const res = await axios.get(API_URLS.PRO_PLAYERS, {
                    params: {}
                });
                
                if(res){
                    commit(types.GET_PRO_PLAYERS, res.data);
                }
            } catch (e) {
                console.log(e)
            }
                
        }
    },
    mutations: {
        [types.GET_PRO_PLAYERS](state, results) {
            state.players = results;
        }
    },
    getters: {
        getProPlayers: (state) => state.players,

        getProPlayersSlice: (state) => lenght => {
            return state.players.slice(0, lenght)
        }
    }
})