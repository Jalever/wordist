<template>
  <div :class="$style.wrapper">
      header component
appName: {{appName}}
      <slot name="upper"></slot>
      <slot name="lower"></slot>
    </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  components: {},

  computed: {
    appName() {
      return this.$store.getters.getAppName;
    }
  },

  mounted: {},

  methods: {}
};
</script>
<style lang="scss" module>
.wrapper {
  width: 100%;
  background-color: #00ffff;
  text-align: center;
}
</style>