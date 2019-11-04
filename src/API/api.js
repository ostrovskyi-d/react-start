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

    getUserProfileById (userId) {
        return instance.get(`/profile/${userId}`)
    },
    unFollowUser(id) {
        return instance.delete(`/follow/${id}`).then(response => response.data)
    },
    followUser(id){
        return instance.post(`/follow/${id}`, {}).then(response => response.data)
    },
};
export const authAPI = {
    getMyUserData () {
        return instance.get(`/auth/me`).then(response => response.data)
    },
};