import axios from 'axios';

import ActionTypes from '@/constants/actionTypesConstants';
import MutationTypes from '@/constants/mutationTypesConstants';
import Api from '@/constants/apiConstants';
import Router from '@/router';

export default {
  [ActionTypes.REDIRECT_TO]: (context, path) => {
    Router.replace({ path })
  }
};
