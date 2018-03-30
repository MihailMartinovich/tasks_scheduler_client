import axios from './axiosWrapper';

import Api from '@/constants/apiConstants';

class AuthApiService {
  static async createBoard (data) {
    return axios.post(Api.BOARD, data);
  }

  static async deleteBoard (id) {
    return axios.delete(Api.BOARD + `/${id}`);
  }

  static async getBoard (data) {
    return axios.get(Api.BOARD);
  }

  static async updateBoard (data) {
    return axios.put(Api.BOARD, data);
  }
}

export default AuthApiService;
