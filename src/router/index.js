import Vue from 'vue';
import Router from 'vue-router';

import BoardListContainer from '@/components/task/boardList/BoardListContainer';
import LoginContainer from '@/components/login/LoginContainer';
import RegisterContainer from '@/components/register/RegisterContainer';
import store from '@/store/index';
import Routes from '@/constants/routeConstants';

Vue.use(Router);

const beforeEachHandler = (to, from, next) => {
  const isAuthenticated = store.state.auth.isAuthenticated;

  if (Object.values(Routes.AUTH_ROUTES).includes(to.fullPath) && isAuthenticated) {
    if (from.name === null) {
      next(Routes.PROTECTED_ROUTES.HOME);
    }

    next(false);
  }

  if (Object.values(Routes.PROTECTED_ROUTES).includes(to.fullPath) && !isAuthenticated) {
    if (from.name === null) {
      next(Routes.AUTH_ROUTES.LOG_IN);
    }

    next(false);
  }

  next();
};

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: Routes.PROTECTED_ROUTES.HOME,
      name: 'Home',
      component: BoardListContainer
    },
    {
      path: Routes.AUTH_ROUTES.LOG_IN,
      name: 'Login',
      component: LoginContainer
    },
    {
      path: Routes.AUTH_ROUTES.REGISTER,
      name: 'Register',
      component: RegisterContainer
    }
    // {
    //   path: '*',
    //   name: 'NotFound',
    //   component: NotFound
    // }
  ]
});

router.beforeEach(beforeEachHandler);

export default router;
