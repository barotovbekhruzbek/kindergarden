import {defineStore} from 'pinia'
import {ref} from 'vue'
import cookies from 'vue-cookies'
import router from '../../router'
import { useApiStore } from '../helpers/api'
import {ElMessage} from "element-plus";

export const useAuthStore = defineStore('auth', ()=> {
    const user = ref({})
    const apiStore = useApiStore()

    const registration = async(payload) => {
        let res = await apiStore.postAxios({
            url: 'auth/reg',
            data: payload
        })
        if(res.status ===200) {
            console.log(res.data)
        }
    }
    const login = async (payload) => {
        let res = await apiStore.postAxios({
            url: 'auth/login',
            data:payload

        })
        if(res.status ===201) {
            ElMessage({
                Type: 'success',
                message:'Ro`yxatdan o`tdingiz'
            })
        }
    }
    return {
        registration,
        user,
        login
    }
})

