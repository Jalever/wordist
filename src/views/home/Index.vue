<template>
  <div :class="$style.wrapper" v-loading="wrapperLoading">
    <Header @onAdd="handleAdd"></Header>

    <el-card :class="$style.cardStyle" v-for="word in wordsheetList" :key="word.id">
      <div slot="header" class="clearfix">
        <span>{{word.name}}</span>
      </div>
      <div>
        <p>{{word.type}}</p>
        <p>{{word.definition}}</p>
        <p>{{word.example}}</p>
      </div>
    </el-card>
  </div>
</template>

<script>
import api from "@/utils/api";
import { errorMessage } from "@/utils/utils";
import Header from "./Header";
export default {
  data() {
    return {
      wrapperLoading: false,
      wordsheetList: [] //单词数组
    };
  },

  components: {
    Header
  },

  computed: {
    userInfo() {
      return this.$store.state.userInfo;
    }
  },

  mounted() {
    this.getWordsheet();
  },

  methods: {
    //获取单词集
    async getWordsheet() {
      this.wrapperLoading = true;
      try {
        const { data } = await this.$api.get("wordsheet/all");
        this.wordsheetList = data;
      } catch (error) {
        errorMessage(error);
      }

      this.wrapperLoading = false;
    },
    async handleAdd() {
      const dialog = await this.$createDialog(
        () => import("@/components/NewWordsheetDialog.vue"),
        {
          props: {},
          on: {
            success: () => {
              dialog.close();

              this.$message({
                message: "添加词汇成功!",
                type: "success"
              });
              //重新获取wordsheet
              this.getWordsheet();
            },
            cancel: () => {
              dialog.close();
            }
          }
        }
      );
    }
  }
};
</script>
<style lang="scss" module>
.wrapper {
  width: 100%;

  // background-color: #ff0000;
}

.cardStyle {
  width: 80%;
  margin: 10px auto;
}
</style>