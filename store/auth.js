// Copyright (c) 2021 Steffen Stein <mail@steffenstein.com> For LICENSE see docs/LICENSE




export const state = () => ({

 loggedIn: process.server ? '' : !!localStorage.getItem('user')
}

  )
  

  export const mutations = {

    loginSuccess(state, user) {
      state.loggedIn = true;
    },
    loginFailure(state) {
      state.loggedIn = false;
    },
    logout(state) {
      state.loggedIn = false;
    },
    registerSuccess(state) {
      state.loggedIn = false;
    },
    registerFailure(state) {
      state.loggedIn = false;
    }
  }
  export const actions = {
    login({ commit }, user) {
    return this.$axios
      .$post( 'api/auth/login', {
        username: user.username,
        password: user.password
      })
      .then(response => {
        localStorage.setItem('user', JSON.stringify(response));
        commit('loginSuccess');
      })
      .catch(error => {
        console.log(error)
          commit('loginFailure');
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
    return this.$axios
      .$post( 'api/auth/register', {
        username: user.username,
        password: user.password,
        email: user.email,
        invitecode: user.invitecode

      })
      .then(response => {
          commit('registerSuccess');
          return Promise.resolve(response.data);
      })
      .catch(error => {
        console.log(error)
          commit('registerFailure');
          return Promise.reject(error);
      });
    }
  }

