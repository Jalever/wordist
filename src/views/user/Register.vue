<template>
  <div :class="$style.wrapper">
    <el-form :model="form" label-width="80px" :class="$style.form">
      <p :class="$style.title">用户注册</p>
      <el-form-item label="用户名">
        <el-input v-model="form.username"></el-input>
      </el-form-item>

      <el-form-item label="密码">
        <el-input v-model="form.password" show-password></el-input>
      </el-form-item>

      <el-form-item label="手机号码">
        <el-input v-model="form.phone"></el-input>
      </el-form-item>

      <el-form-item :class="$style.buttonRow">
        <el-button type="primary" @click="handleRegister" :loading="registerLoading">注册</el-button>
        <router-link to="/login" style="margin-left: 40px;margin-right: 10px;">
          <el-link type="primary">已有账户, 登录</el-link>
        </router-link>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import api from "@/utils/api";
import { errorMessage } from "@/utils/utils";
import { setToken } from "@/utils/auth";

export default {
  data() {
    return {
      registerLoading: false,
      form: {
        username: "",
        password: "",
        phone: ""
      }
    };
  },

  components: {},

  computed: {},

  //   mounted: {},

  methods: {
    //注册event handler
    async handleRegister() {
      this.registerLoading = true;
      let params = this.form;
      try {
        const { data } = await api.post("user/register", {
          ...params
        });

        if (data.code === "N") throw new Error(data.message);

        this.$message({
          message: "用户注册成功!",
          type: "success"
        });

        this.$router.push({
          path: '/login'
        });
      } catch (error) {
        errorMessage(error);
      }

      this.registerLoading = false;
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
  text-align: right;
  //   background-color: #ff0000;
  & > div {
    margin-left: 0px !important;
  }
}

.form {
  width: 350px;
  height: 350px;
  padding: 10px;
  background-color: #e6e6fa;
}
</style>