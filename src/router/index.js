import Vue from 'vue'
import Router from 'vue-router'
import TaskListContainer from '@/components/task/taskList/taskListContainer'
import LoginContainer from '@/components/login/loginContainer'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: TaskListContainer
    },
    {
      path: '/login',
      name: 'LoginContainer',
      component: LoginContainer
    }
    // {
    //   path: '*',
    //   name: 'NotFound',
    //   component: NotFound
    // }
  ]
})
