<template>
    <div>
      <layout></layout>
    </div>
  </template>
  
  <script>
    import Layout from "@/views/layout/Index";
    export default {
      name: 'App',
      created() {},
      components: {
        Layout
      }
    }
  </script>
  
  <style lang="scss" module>
    html, body {
      padding: 0;
      margin: 0;
      box-sizing: border-box;
      font-size: 16px;
    }

    .col {
      color: #ff0000;
    }
  </style>