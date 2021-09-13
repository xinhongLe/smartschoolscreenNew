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
                name: "educationOverview",
                component: () => import("@/views/Home/EducationOverview")
            },

            {
                path: "studentData",
                name: "studentData",
                component: () => import("@/views/Home/StudentData")
            },

            {
                path: "teacherData",
                name: "teacherData",
                component: () => import("@/views/Home/TeacherData")
            },

            {
                path: "classTeach",
                name: "classTeach",
                component: () => import("@/views/Home/ClassTeach")
            },

            {
                path: "teachingData",
                name: "teachingData",
                component: () => import("@/views/Home/TeachingData")
            },

            {
                path: "school",
                name: "school",
                component: () => import("@/views/Home/School")
            },

            {
                path: "resources",
                name: "resources",
                component: () => import("@/views/Home/Resources")
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
