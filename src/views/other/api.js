const baseUrl = "https://uat-ops.xixingjia.com"
import axios from "axios"
// 查询情况总览
export function selectAxsUsageView(data) {
    return axios.post(baseUrl + "/api/ops/9810/axsDpzs/selectAxsUsageView", data)
}

// 备课情况
export function queryAxsLessonPreparation(data) {
    return axios.post(baseUrl + "/api/ops/9810/axsDpzs/queryAxsLessonPreparation", data)
}

// 上课情况
export function queryAxsClassBegins(data) {
    return axios.post(baseUrl + "/api/ops/9810/axsDpzs/queryAxsClassBegins", data)
}

// 老师使用情况
export function selectAxsTeacherUsage() {
    return axios.get(baseUrl + "/api/ops/9810/axsDpzs/selectAxsTeacherUsage")
}

// 最近三节课备课时长
export function queryAxsLessonPreparationTime() {
    return axios.post(baseUrl + "/api/ops/9810/axsDpzs/queryAxsLessonPreparationTime")
}

// 最近三节课互动情况
export function queryAxsClassInteractionNum() {
    return axios.post(baseUrl + "/api/ops/9810/axsDpzs/queryAxsClassInteractionNum")
}

// 最近三节课反思情况
export function queryAxsReflectTime() {
    return axios.post(baseUrl + "/api/ops/9810/axsDpzs/queryAxsReflectTime")
}

// 全校使用分布情况
export function selectAxsSchoolUsageView() {
    return axios.get(baseUrl + "/api/ops/9810/axsDpzs/selectAxsSchoolUsageView")
}

// 最近三节课使用率
export function queryAxsClassUseingNum() {
    return axios.post(baseUrl + "/api/ops/9810/axsDpzs/queryAxsClassUseingNum")
}
