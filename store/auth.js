// Copyright (c) 2021 Steffen Stein <mail@steffenstein.com> For LICENSE see docs/LICENSE

import AuthService from '~/services/auth.service';
let user = {}
console.log(user)
if (process.browser) {
  user = JSON.parse(localStorage.getItem('user'));
console.log(user)
}
const initialState = user
  ? { status: { loggedIn: true }, user }
  : { status: { loggedIn: false }, user: null };

export const state = () => ({
    initialState
  })

  export const mutations = {

    loginSuccess(state, user) {
      state.status.loggedIn = true;
      state.user = user;
    },
    updatedProfile(state, user) {
      state.user.username = user.username;
      state.user.email = user.email;
      state.user.profile_image = user.profile_image;
    },
    loginFailure(state) {
      state.status.loggedIn = false;
      state.user = null;
    },
    logout(state) {
      state.status.loggedIn = false;
      state.user = null;
    },
    registerSuccess(state) {
      state.status.loggedIn = false;
    },
    registerFailure(state) {
      state.status.loggedIn = false;
    }
  }
  export const actions = {


    login({ commit }, user) {
    return this.$axios
      .$post( '/api/auth/login', {
        username: user.username,
        password: user.password
      })
      .then(response => {
          localStorage.setItem('user', JSON.stringify(response.data));
          commit('loginSuccess', user);
          return Promise.resolve(user);
      })
      .catch(error => {
        console.log(error.response.data.error)
          commit('loginFailure');
          return Promise.reject(error);
      });
    },
    logout({ commit }) {
      AuthService.logout();
      commit('logout');
    },
    updateProfile({ commit },updateUser) {
      commit('updatedProfile',updateUser);
    },
    register({ commit }, user) {
      return AuthService.register(user).then(
        response => {
          commit('registerSuccess');
          return Promise.resolve(response.data);
        },
        error => {
          commit('registerFailure');
          return Promise.reject(error);
        }
      );
    }
  }

