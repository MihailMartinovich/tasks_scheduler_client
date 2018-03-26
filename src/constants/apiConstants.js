import config from '../../config/';

const HOST = config.dev.host;
const API_PORT = config.dev.apiPort;
const API_PATH = `http://${HOST}:${API_PORT}/api`;

export default {
  SIGN_IN: `${API_PATH}/auth/signin`,
  SIGN_UP: `${API_PATH}/auth/signup`,
  BOARD: `${API_PATH}/board`,
  TASK: `${API_PATH}/task`
};
