<template>
  <div :class="$style.wrapper">
    <!-- <Header>
      <p slot="upper">parent upper slot</p>
      <p slot="lower">parent lower slot</p>
    </Header>
    <p :class="$style.header">
      <el-input v-model="title" /><el-button type="primary" @click="onAdd">新增</el-button>
    </p> -->
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "./Header";
console.log(Header);
export default {
  components: {
    Header
  },
  data() {
    return {
      title: ""
    };
  },
  methods: {
    onAdd() {}
  }
};
</script>

<style lang="scss" module>
.wrapper {
  width: 100%;
  // background-color: #ff0000;
}

.header {
    margin: 1em 2em;
    display: flex;
}
</style>
