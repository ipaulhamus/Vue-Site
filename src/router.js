import { createWebHistory, createRouter } from "vue-router";
//Router to fake page changes
import Home from "@/components/Home.vue";
import GuessingGame from "@/components/GuessingGame.vue";
import Info from "@/components/Info.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', name: 'Home', component: Home },
        { path: '/Info', name: 'Info', component: Info },
        { path: '/GuessingGame', name: 'GuessingGame', component: GuessingGame }
    ]
});

export default router;