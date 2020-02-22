<template>
  <el-dialog
    title="新增词汇"
    v-on="$listeners"
    v-bind="$attrs"
    width="1100px"
    append-to-body
    top="20px"
    center
    :class="$style.wrapper"
    :close-on-click-modal="false"
  >
    <el-form :model="form" label-width="120px">
      <el-form-item label="单词">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="词性">
        <el-select v-model="form.type" placeholder="please select your zone">
          <el-option
            v-for="item in grammar"
            :key="item.value"
            :label="item.label"
            :value="item.label"
          ></el-option>
          <el-option label="Zone two" value="beijing"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="意思">
        <el-input type="textarea" v-model="form.definition"></el-input>
      </el-form-item>

      <el-form-item label="例子">
        <el-input type="textarea" v-model="form.example"></el-input>
      </el-form-item>

      <el-form-item style="text-align:center">
        <el-button type="primary" @click="onSave" :loading="saveLoading">新增</el-button>
        <el-button @click="onCancel">取消</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>

<script>
import api from "@/utils/api";
import { errorMessage } from "@/utils/utils";
import GRAMMAR from "@/constants/grammar";

export default {
  components: {},
  props: {},
  data() {
    return {
        saveLoading: false,
      form: {
        name: "",
        type: "",
        definition: "",
        example: ""
      },
      grammar: GRAMMAR
    };
  },
  computed: {},
  mounted() {},
  methods: {
      //新增词汇
    async onSave() {
      this.saveLoading = true;
      let params = this.form;
      try {
        const { data } = await api.post("wordsheet/create", {
          ...this.form
        });

        if(data.isSuccess) this.$emit("success");
      } catch (error) {
        errorMessage(error);
      }

      this.saveLoading = false;
    },
    onCancel() {
      this.$emit("cancel");
    }
  }
};
</script>

<style lang="scss" module>
.wrapper {
  :global(.el-dialog__header) {
    border-bottom: 1px solid #eee;
  }

  :global(.el-dialog__body) {
    padding: 10px 20px 20px;
  }
}
</style>
