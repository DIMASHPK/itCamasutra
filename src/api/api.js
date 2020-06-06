import * as axios from "axios";

const instance  = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "089b9c13-41ca-4c7b-b82b-fa6bc7d12363"
    }
})

export const api = {
    authMe: () => {
        return instance.get("auth/me").then(res => res.data)
    },
    login: (email, password, rememberMe = false) => {
        return instance.post('auth/login', {email, password, rememberMe})
    },
    logout: () => {
        return instance.delete('auth/login')
    },
    followUser: (id, type) => {
        return instance[type](`follow/${id}`).then(res => res.data);
    },
     pageChange: (counter, pageSize) => {
        return  instance
            .get(`users?page=${counter}&count=${pageSize}`).then(res => res.data);
    },
    getUsers: () => {
        return instance
            .get("users?page=1&count=10").then(res => res.data)
    },
    getUser: (userId) => {
        return instance.get(`profile/${userId}`)
    },
    getStatus: (userId) => {
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus: (status) => {
        return instance.put(`profile/status`, {status}).then(res => res.data)
    },

}
