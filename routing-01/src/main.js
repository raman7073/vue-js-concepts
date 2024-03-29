import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import NotFound from './components/nav/NotFound.vue';
import TeamsFooter from './components/teams/TeamsFooter.vue';
import UsersFooter from './components/users/UsersFooter.vue';
const router = createRouter({
    history: createWebHistory(),
    routes: [
        // { path: '/', redirect: '/teams' },
        { 
            name:'teams',
            path: '/teams', 
            components: {default:TeamsList,footer:TeamsFooter},
            alias: '/',
            children: [
                {
                    //passing props through routes
                  name:'team-members',  path: ':teamId', component: TeamMembers, props: true
                }
            ]
        },
        {
            path: '/users',
            components: {
                default:UsersList,
                footer:UsersFooter
        }},
        {
            path: '/:notFound(.*)', component: NotFound
        }
    ],
    //overriding name of default active class for styling purpose
    linkActiveClass: 'active',
    scrollBehavior(to,from,savedPosition){
        console.log(to,from,savedPosition);
        if(savedPosition){
            return savedPosition;
        }
        return {left:0 , top:0};   
    }
});
router.beforeEach(function(to,from,next){
  console.log(to,from);
  next();
});
const app = createApp(App);
app.use(router);
app.mount('#app');