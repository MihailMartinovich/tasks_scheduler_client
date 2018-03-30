import axios from './axiosWrapper';

import Api from '@/constants/apiConstants';

class AuthApiService {
  static async signInUser (data) {
    return axios.post(Api.SIGN_IN, data);
  };

  static async signUpUser (data) {
    return axios.post(Api.SIGN_UP, data);
  }
}

export default AuthApiService;
