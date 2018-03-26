import axios from 'axios';

import ActionTypes from '@/constants/actionTypesConstants';
import MutationTypes from '@/constants/mutationTypesConstants';
import Api from '@/constants/apiConstants';
import Routes from '@/constants/routeConstants';

export default {
  [ActionTypes.LOG_IN_USER]: (context, data) => {
    axios.post(Api.SIGN_IN, data)
      .then(response => {
        context.commit(MutationTypes.SET_AUTH_DATA, response.data);
        context.dispatch(ActionTypes.REDIRECT_TO, Routes.PROTECTED_ROUTES.HOME);
      })
      .catch(err => {
        console.log(err);
      });
  },
  [ActionTypes.REGISTER_USER]: (context, data) => {
    axios.post(Api.SIGN_IN, data)
      .then(response => {
        context.commit(MutationTypes.SET_AUTH_DATA, response.data);
        context.dispatch(ActionTypes.REDIRECT_TO, Routes.PROTECTED_ROUTES.HOME);
      })
      .catch(err => {
        console.log(err);
      });
  },
  [ActionTypes.LOG_OUT_USER]: (context) => {
    context.commit(MutationTypes.RESET_AUTH_DATA);
    context.dispatch(ActionTypes.REDIRECT_TO, Routes.AUTH_ROUTES.LOG_IN);
  }
};
