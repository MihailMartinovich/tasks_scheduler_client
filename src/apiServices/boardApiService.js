import axios from './axiosWrapper';

import Api from '@/constants/apiConstants';

class BoardApiService {
  static async createBoard (data) {
    return axios.post(Api.BOARD, data);
  }

  static async deleteBoard (id) {
    return axios.delete(Api.BOARD + `/${id}`);
  }

  static async getAllBoards () {
    return axios.get(Api.BOARD);
  }

  static async getBoard (id) {
    return axios.get(Api.BOARD + `/${id}`);
  }

  static async updateBoard (data) {
    return axios.put(Api.BOARD, data);
  }
}

export default BoardApiService;
