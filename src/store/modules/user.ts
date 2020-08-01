import { Module } from 'vuex';
import httpClient from '@/utils/httpClient';

export interface UserState {
  userProf: UserProfile | null;
  isSignedIn: boolean;
}

export const userModule: Module<UserState, any> = {
  namespaced: true,
  state: () => ({
    userProf: null,
    isSignedIn: false,
  }),
  getters: {
    isSignedIn(state) {
      return state.isSignedIn;
    },
  },
  mutations: {
    setProfile(state, payload: UserProfile) {
      state.userProf = payload;
      state.isSignedIn = !!payload;
    },
  },
  actions: {
    async fetchProfile({ commit }) {
      const res = await httpClient.get<UserProfile>('/user');
      commit('setProfile', res.data);
    },
  },
};
