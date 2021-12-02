// Copyright (c) 2021 Steffen Stein <mail@steffenstein.com> For LICENSE see docs/LICENSE

import axios from 'axios';

const API_URL = '/api/auth/';

class AuthService {


  logout() {
    localStorage.removeItem('user');
  }

  resetPassword(user) {
    return axios.post(API_URL + 'reset-password', {
      email: user.email,
    });
  }
}

export default new AuthService();
