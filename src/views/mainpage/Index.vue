<template>
  <div :class="$style.wrapper">
    <p :class="$style.header">
      <el-input v-model="title" /><el-button type="primary" @click="onAdd">新增</el-button>
    </p>
  </div>
</template>

<script>
export default {
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
  background-color: #ff0000;
}

.header {
    margin: 1em 2em;
    display: flex;
}
</style>
