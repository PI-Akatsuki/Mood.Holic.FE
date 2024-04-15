import { createRouter, createWebHistory } from 'vue-router';

import LogIn from "@/components/MainPage/LogIn/LogIn.vue";
import SignUp from "@/components/MainPage/SighUp/SignUp.vue";
import BeforeLogInMain from "@/components/MainPage/BeforeLogInMain/BeforeLogInMain.vue";
import Card from "@/components/Profile/AIrecommended/Card/Card.vue";
import List from "@/components/Profile/AIrecommended/List/List.vue";


const routes = [
    {   // 로그인
        path: '/login',
        component: LogIn
    },
    {   // 회원가입
        path: '/signup',
        component: SignUp
    },
    {   // 비회원 메인
        path: '/',
        component: BeforeLogInMain
    },
    {
        path: '/card',
        component: Card
    },
    {
        path: '/list',
        component: List
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
