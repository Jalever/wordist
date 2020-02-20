<template>
    <div>
      <main-page></main-page>
    </div>
  </template>
  
  <script>
    import MainPage from "@/views/mainpage";
    export default {
      name: 'App',
      created() {},
      components: {
        MainPage
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