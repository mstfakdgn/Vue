import { createRouter, createWebHistory } from 'vue-router';

import TeamList from './pages/TeamsList.vue';
import UserList from './pages/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import NotFound from './pages/NotFound.vue';
import UsersFooter from './pages/UsersFooter.vue';
import TeamsFooter from './pages/TeamsFooter.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
      {
        path: '/',
        redirect: '/teams'
      },
      {
        name: 'teams',
        path: '/teams',
        meta: { needsAuth: true },
        components: {
          default: TeamList,
          footer: TeamsFooter
        },
        children: [
          {
            name: 'team-members',
            path: ':teamId',
            component: TeamMembers,
            props: true
          }
        ]
        //   alias: '/'
      },
      {
        path: '/users',
        components: {
          default: UserList,
          footer: UsersFooter
        },
        beforeEnter(to, from, next) {
          // console.log(to, from);
          next();
        }
      },
      {
        path: '/:notFound(.*)',
        component: NotFound
      }
    ],
    //   linkActiveCLass: 'active',
    scrollBehavior(to, from, savedPosition) {
      // console.log(to, from, savedPosition);
      if (savedPosition) {
        return savedPosition;
      }
      return {
        left: 0,
        top: 0
      };
    }
  });
  
  router.beforeEach(function(to, from, next) {
    // console.log(to, from);
    if (to.meta.needsAuth) {
        console.log('Needs Auth!');
        next();
    }
    next();
    // if (to.name === 'team-members') {
    //     next()
    // } else {
    //     next({name:'router_name', params:{ teamId: 't2' }});
    // }
  });
  
  router.afterEach(function (to, from) {
   console.log(to,from);
  });

  export default router;