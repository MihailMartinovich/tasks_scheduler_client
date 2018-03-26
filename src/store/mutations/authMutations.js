import MutationTypes from '@/constants/mutationTypesConstants';
import AuthState from '../state/authState';

export default {
  [MutationTypes.SET_AUTH_DATA]: (state, data) => {
    state.auth.token = data.token;
    state.auth.username = data.username;
    state.auth.isAuthenticated = true;
  },
  [MutationTypes.RESET_AUTH_DATA]: (state) => {
    state = Object.assign(state, {
      auth: {
        token: '',
        username: '',
        isAuthenticated: false
      }
    });
  }
};
