import Vue from "vue";
import Router from "vue-router";
import routes from "./routes.js";
import Cookies from "js-cookie";

Vue.use(Router);

const VueRouter = new Router({
  mode: "history",
  routes
});

VueRouter.beforeEach((to, from, next) => {
  let token = Cookies.get("token");

  console.warn("beforeEach");
  console.log(token);
  console.log("\n");
  console.warn("to.path");
  console.log(to.path);
  console.warn("to.name");
  console.log(to.name);
  console.log("\n");
  console.warn("!token");
  console.log(!token);

  if (!token) {

    if (to.path !== "/login" && to.path !== "/register") {
      
      console.warn("!token");
      console.log("\n");

      return next({ path: "/login" });
    } else {
      // console.log("2222222");
      console.warn("!token");
      console.log("\n");
      next();
    }
  } else {
    console.log("!token");
    // console.warn("please login first!");

    // if (to.path === "/login") {
    //   return next({ path: "/" });
    // }

    next();
  }

  // next("/login");
});

export default VueRouter;
