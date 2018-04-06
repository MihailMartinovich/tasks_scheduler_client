import axios from './axiosWrapper';

import Api from '@/constants/apiConstants';

class TaskApiService {
  static async createTask (data) {
    return axios.post(Api.TASK, data);
  }

  static async deleteTask (id) {
    return axios.delete(Api.TASK + `/${id}`);
  }

  static async getTasks (data) {
    return axios.get(Api.TASK);
  }

  static async getTask (id) {
    return axios.get(Api.TASK + `/${id}`);
  }

  static async updateTask (id, data) {
    return axios.put(Api.TASK + `/${id}`, data);
  }

  static async updateTasks (data) {
    return axios.put(Api.TASK, data);
  }
}

export default TaskApiService;
