<template>
  <div class="reg">
    <div class="title">Ro`yxatdan o`tish</div>
    <el-form
    ref="regForm"
    :model="user"
    :rules="rules"
    label-position="top"
    @submit.prevent="regis(regForm)"
  >

      <el-form-item label="Loginni kiriting" prop="login">
        <el-input v-model="user.login"
                  @keypress.enter="regis(regForm)"
                  @blur="loginCheck()"
        />
      </el-form-item>
  
    <el-form-item label="Parolni kiriting" prop="password">
      <el-input v-model="user.password" show password />
    </el-form-item>
      <router-link to="/login">Kirish</router-link>
      <el-button type="success" @click="regis(regForm)">Ro`yxatdan o`tish</el-button>
    </el-form>
  </div>
</template>

<script setup>
import {ref} from 'vue'
import {useAuthStore} from "@/stores/user/auth";

const user = ref({})
const regForm = ref()
const rules = ref({
    login: [
        {
            required: true,
            message: 'Loginni kiriting',
            trigger: 'blur'
        }
    ],
  password: [
    {
      required: true,
      message:'Parolni kiriting?',
      trigger: 'blur'
    },
    {
      min:3,
      max:15,
      message: 'Eng kami bilan 3 simvol bo`lsin',
      trigger: 'blur'
    }
  ]
})
const authStore = useAuthStore()
const loginCheck = async () => {
   let res = await authStore.checkLogin({
     login: user.value.login
   })
  if(res.status ===200) {
    console.log(res.data)
  }
}
const regis = async (regForm) => {

  if (!regForm) return
  await regForm.validate((valid, fields) => {
    if (valid) {
      authStore.registration({
        login: user.value.login,
        password: user.value.password
      })
    } else {
      console.log('error submit!', fields)
    }
  })
};

</script>

<style>

</style>