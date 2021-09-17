<template>
    <div id="app">
        <div class="container">
            <Title :title="`*州市教育信息化数据大屏`" :style="{position: ['teacherPersonal','teachingEvaluation','evaluationData','schoolBasic', 'areaResource', 'schoolSecurity', 'lessonData', 'educationData', 'areaEducationData', 'teacherBasic', 'studentBasic','behavior','comprehensive','homework','studies','exam'].indexOf($route.name) > -1 ? 'relative' : 'absolute'}" />
            <div class="route-content">
                <router-view />
            </div>
            <Header />
        </div>
    </div>
</template>

<script>
import Title from "@/views/Home/Header/title";
import Header from "@/views/Home/Header";
export default {
    name: "home",
    components: {
        Header,
        Title
    },

    data() {
        return {
            sort: 0,
            list: [],
            timer: null
        }
    },

    watch: {
        $route() {
            this.sort = this.list.findIndex(item => {
                return item.name == this.$route.name;
            })
        }
    },

    mounted() {
        const allList = this.$router.getRoutes();
        this.list = allList.filter(item => {
            return item.path.indexOf('/studentData/') > -1 || item.path.indexOf('/teacherData/') > -1 || item.path.indexOf('/schoolData/') > -1 || item.path.indexOf('/areaData/') > -1
        })

        // this.startCount();
    },

    methods: {
        startCount() {
            // clearInterval(this.timer);
            // this.timer = setInterval(() => {
            //     if (this.sort < 17) {
            //         this.$router.push({
            //             name: this.list[this.sort + 1].name
            //         })
            //     } else {
            //         this.$router.push({
            //             name: this.list[0].name
            //         })
            //     }
            // }, 60000);
        }
    }
};
</script>

<style>
.container {
    overflow: hidden;
    height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: #000916;
}

.route-content {
    flex: 1;
    min-height: 0;
    display: flex;
}

body {
    margin: 0;
    overflow: hidden;
}

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
</style>
