const Koa = require("koa");
const Router = require("@koa/router");
const logger = require("koa-logger");
const glob = require("glob");
const { resolve } = require("path");
const fs = require("fs");

const app = new Koa();
const router = new Router({ prefix: "/api" });
const routerMap = {};

app.use(logger());

glob
  .sync(resolve("./mock-server/api", "**/*.json"))
  .forEach((filePath, idx) => {

    let apiJsonPath = filePath && filePath.split("/api")[1];
    let apiPath = apiJsonPath.replace(".json", "");

    router.all(apiPath, (ctx, next) => {
      try {
        let fileContentStr = fs.readFileSync(filePath).toString(),
          fileContent = JSON.parse(fileContentStr),
          method = fileContent.method,
          res = fileContent.res,
          isValidMethod = ctx.request.method === method;

        if (!isValidMethod) throw new Error("invalid request methods!");

        routerMap[apiJsonPath] = `${method} ===> ${apiPath}`;

        ctx.body = {
          data: res,
          state: 200,
          type: "success" // 自定义响应体
        };
      } catch (err) {
        // ctx.throw(error);
        ctx.status = err.status || 500;
        ctx.body = err.message;
        ctx.app.emit("error", err, ctx);
      }


      //路由映射
      fs.writeFile(
        "./mock-server/routerMap.json",
        JSON.stringify(routerMap, null, 4),
        err => {
          if (!err) console.log("routerMap was done!");
        }
      );
    });
  });

app.use(router.routes()).use(router.allowedMethods());

app.listen(9091);
