<template>
  <div :class="$style.wrapper">
    <el-form :model="form" label-width="60px" :class="$style.form">
      <p :class="$style.title">登录页面</p>
      <el-form-item label="用户名">
        <el-input v-model="form.username"></el-input>
      </el-form-item>

      <el-form-item label="密码">
        <el-input v-model="form.password" show-password></el-input>
      </el-form-item>

      <el-form-item label>
        <el-checkbox v-model="form.rememberMe" :true-label="1" :false-label="0">记住我</el-checkbox>
        <router-link to="register" style="margin-left: 50px;">
          <el-link type="primary">注册</el-link>
        </router-link>
      </el-form-item>

      <el-form-item :class="$style.buttonRow">
        <el-button type="primary" @click="handleLogin" :loading="loginLoading">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import api from "@/utils/api";
import { errorMessage } from "@/utils/utils";
import {setToken} from "@/utils/auth";

export default {
  data() {
    return {
      loginLoading: false,
      form: {
        username: "",
        password: "",
        rememberMe: 0
      }
    };
  },

  components: {},

  computed: {},

  //   mounted: {},

  methods: {
    //登录event handler
    async handleLogin() {
      this.loginLoading = true;
      let params = this.form;
      try {
        const { data } = await api.post("user/login", {
          ...params
        });

        setToken(data.data.token);
        this.$store.commit("setInit", data.data);
        this.$router.push({
          path: "/"
        });
      } catch (error) {
        errorMessage(error);
      }

      this.loginLoading = false;
    }
  }
};
</script>
<style lang="scss" module>
.wrapper {
  width: 100vw;
  height: 100vh;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}

.title {
  text-align: center;
  font-size: 1.5rem;
  cursor: default;
}

.buttonRow {
  text-align: center;
  //   background-color: #ff0000;
  & > div {
    margin-left: 0px !important;
  }
}

.form {
  width: 300px;
  height: 300px;
  padding: 10px;
  background-color: #e6e6fa;
}
</style>