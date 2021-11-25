// Copyright (c) 2021 Steffen Stein <mail@steffenstein.com> For LICENSE see docs/LICENSE

import axios from 'axios';

const API_URL = '/api/auth/';

class AuthService {
  login(user) {
    return $axios
      .post(API_URL + 'login', {
        username: user.username,
        password: user.password
      })
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem('user', JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem('user');
  }

  register(user) {
    return axios.post(API_URL + 'signup', {
      username: user.username,
      email: user.email,
      invitecode: user.invitecode
    });
  }
  resetPassword(user) {
    return axios.post(API_URL + 'reset-password', {
      email: user.email,
    });
  }
}

export default new AuthService();
