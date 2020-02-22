module.exports = shipit => {
  require("shipit-deploy")(shipit);

  shipit.initConfig({
    default: {
      workspace: "./dist",
      shallowClone: false,
      keepWorkspace: true,
      deployTo: "/var/www/server/wordist"
    },
    // test: {
    //   servers: "root@test.a.zy-cx.com"
    // },
    prod: {
      deployTo: "/var/www/server/wordist",
      servers: "root@jalever.top"
    }
  });
};
