import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        redirect: "/home"
    },

    {
        path: "/home",
        name: "Home",
        component: () => import("@/views/Home"),
        redirect: "/home/educationOverview",
        children: [
            {
                path: "educationOverview",
                name: "EducationOverview",
                component: () => import("@/views/Home/EducationOverview")
            }
        ]
    }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;
