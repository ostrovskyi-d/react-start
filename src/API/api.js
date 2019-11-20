import * as axios from 'axios'

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0",
    headers: {
        "API-KEY": "3deece36-1a9f-4527-9a42-03c4ade7f957"
    }
});


export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data);
    },

    unFollowUser(id) {
        return instance.delete(`/follow/${id}`).then(response => response.data)
    },
    followUser(id){
        return instance.post(`/follow/${id}`, {}).then(response => response.data)
    },
    getUserProfileById (userId) {
        console.warn("Obsolete method. Please, use profileApi object.");
        return profileAPI.getUserProfileById(userId)
    },
};
export const profileAPI = {
    getUserProfileById (userId) {
        return instance.get(`/profile/${userId}`)
    },
    getStatus(userId)  {
        return instance.get(`/profile/status/${userId}`)
    },
    updateStatus(status){
        return instance.put(`profile/status/`, {status: status})
    }
};

export const loginAPI = {
    login (data) {
        return instance.post(`auth/login`, {
            email : data.login,
            password: data.password,
            rememberMe: data.rememberMe,
            captcha: data.captcha
        })
    },
    logOut () {
        return instance.delete(`auth/login`);
    }
};
export const authAPI = {
    getMyUserData () {
        return instance.get(`/auth/me`).then(response => response.data)
    },
};
export const securityAPI = {
    getCaptchaUrl () {
        return instance.get(`security/get-captcha-url`)
    }
};