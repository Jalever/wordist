export default [
  {
    path: "/",
    redirect: "/home",
    component: () => import("@/views/layout/Index.vue"),
    children: [
      {
        path: "/login",
        component: () => import("@/views/user/Login.vue"),
        meta: {
          title: "登录页面"
        }
      },
      {
        path: "/register",
        component: () => import("@/views/user/Register.vue"),
        meta: {
          title: "注册页面"
        }
      },
      {
        path: "/home",
        redirect: "/home/list",
        component: () => import("@/views/home/Index.vue"),
        meta: {
          title: "mainpage"
        },
        children: [
          {
            path: "/home/list",
            component: () => import("@/views/home/Index.vue"),
            meta: {
              title: "列表页"
            }
          }
        ]
      },
      // {
      //   path: "/error/404",
      //   component: () => import("./views/error/404.vue"),
      //   meta: {
      //     title: "页面不存在-404"
      //   }
      // },
      // {
      //   path: "/order/detail",
      //   component: () => import("./views/order/detail/Index.vue"),
      //   meta: {
      //     title: "订单详情"
      //   }
      // }
    ]
  }
];
