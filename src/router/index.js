import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        redirect: "/studentData"
    },

    {
        path: "/studentData",
        name: "studentData",
        component: () => import("@/views/studentData"),
        redirect: "/studentData/comprehensive",
        children: [
            {
                path: "comprehensive",
                name: "comprehensive",
                component: () => import("@/views/studentData/comprehensive")
            },

            {
                path: "behavior",
                name: "behavior",
                component: () => import("@/views/studentData/behavior")
            },

            {
                path: "studies",
                name: "studies",
                component: () => import("@/views/studentData/studies/index.vue")
            },

            {
                path: "exam",
                name: "exam",
                component: () => import("@/views/studentData/exam")
            },

            {
                path: "homework",
                name: "homework",
                component: () => import("@/views/studentData/homework")
            },

            {
                path: "studentBasic",
                name: "studentBasic",
                component: () => import("@/views/Home/StudentData")
            }
        ]
    },

    {
        path: "/teacherData",
        name: "teacherData",
        component: () => import("@/views/teacherData"),
        redirect: "/teacherData/teachingEvaluation",
        children: [
            {
                path: "teachingEvaluation",
                name: "teachingEvaluation",
                component: () => import("@/views/teacherData/teachingEvaluation")
            },

            {
                path: "teacherPersonal",
                name: "teacherPersonal",
                component: () => import("@/views/teacherData/teacherPersonal")
            },

            {
                path: "teacherBasic",
                name: "teacherBasic",
                component: () => import("@/views/Home/TeacherData")
            }
        ]
    },

    {
        path: "/schoolData",
        name: "schoolData",
        component: () => import("@/views/schoolData"),
        redirect: "/schoolData/schoolBasic",
        children: [
            {
                path: "schoolBasic",
                name: "schoolBasic",
                component: () => import("@/views/schoolData/schoolBasic")
            },

            {
                path: "lessonData",
                name: "lessonData",
                component: () => import("@/views/schoolData/lessonData")
            },

            {
                path: "classData",
                name: "classData",
                component: () => import("@/views/schoolData/classData")
            },

            {
                path: "schoolSecurity",
                name: "schoolSecurity",
                component: () => import("@/views/schoolData/schoolSecurity")
            }
        ]
    },

    {
        path: "/areaData",
        name: "areaData",
        component: () => import("@/views/areaData"),
        redirect: "/areaData/educationData",
        children: [
            {
                path: "educationData",
                name: "educationData",
                component: () => import("@/views/Home/EducationOverview")
            },

            {
                path: "evaluationData",
                name: "evaluationData",
                component: () => import("@/views/areaData/evaluationData")
            },

            {
                path: "areaEducationData",
                name: "areaEducationData",
                component: () => import("@/views/Home/TeachingData")
            },

            {
                path: "areaSecurity",
                name: "areaSecurity",
                component: () => import("@/views/areaData/areaSecurity")
            },

            {
                path: "areaResource",
                name: "areaResource",
                component: () => import("@/views/areaData/areaResource")
            }
        ]
    }

    // {
    //     path: "/home",
    //     name: "Home",
    //     component: () => import("@/views/Home"),
    //     redirect: "/home/educationOverview",
    //     children: [
    //         {
    //             path: "educationOverview",
    //             name: "educationOverview",
    //             component: () => import("@/views/Home/EducationOverview")
    //         },

    //         {
    //             path: "studentData",
    //             name: "studentData",
    //             component: () => import("@/views/Home/StudentData")
    //         },

    //         {
    //             path: "teacherData",
    //             name: "teacherData",
    //             component: () => import("@/views/Home/TeacherData")
    //         },

    //         {
    //             path: "classTeach",
    //             name: "classTeach",
    //             component: () => import("@/views/Home/ClassTeach")
    //         },

    //         {
    //             path: "teachingData",
    //             name: "teachingData",
    //             component: () => import("@/views/Home/TeachingData")
    //         },

    //         {
    //             path: "school",
    //             name: "school",
    //             component: () => import("@/views/Home/School")
    //         },

    //         {
    //             path: "resources",
    //             name: "resources",
    //             component: () => import("@/views/Home/Resources")
    //         }
    //     ]
    // }
];

const router = new VueRouter({
    mode: "hash",
    base: process.env.BASE_URL,
    routes
});

export default router;
