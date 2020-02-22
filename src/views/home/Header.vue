<template>
  <div :class="$style.wrapper">
    <span :class="$style.userArea" @click="onTurnoff">退出</span>
    <span :class="$style.userArea">{{userName}}</span>
    <span :class="$style.userArea">
      <el-button type="primary" @click="handleAdd" style="margin-top:10px">添加</el-button>
    </span>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  components: {},

  computed: {
      userInfo() {
          return this.$store.state.userInfo;
      },
      userName() {
          return this.userInfo.username;
      }
  },

  mounted: {},

  methods: {
    async handleAdd() {
        this.$emit("onAdd");
    },
    //退出
    onTurnoff() {
        this.$router.push({
            path: "/login"
        });
    }
  }
};
</script>
<style lang="scss" module>
.wrapper {
  width: 100%;
  height: 50px;
  background-color: #409eff;
  //   display: flex;

  & > span:first-child:hover {
    background-color: #d3d3d3;
    cursor: pointer;
  }
}

.userArea {
  width: 100px;
  height: 100%;
  line-height: 50px;
  vertical-align: middle;
  text-align: center;
  background-color: #ff0000;
  //   display: flex;
  //   justify-content: center;
  //   align-items: center;
  float: right;
}
</style>