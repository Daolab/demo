import { Module } from 'vuex/types'

import Root from '@/store/modules/root'

export interface Account {
    username?: string;
    projects: string[];
}

export const account: Module<Account, Root> = {
    namespaced: true,
    state: {
        username: '',
        projects: []
    },
    getters: {
        color(state: Account): string {
            return '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
        }
    },
    mutations: {
        set_username(state: Account, username: string) {
            state.username = username;
        }
    },
    actions: {
        login({commit}, username: string) {
            commit('set_username', username)
        }
    }
}