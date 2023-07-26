import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/views/Home.vue"),
      meta: {
        pageTitle: "Home",
        breadcrumb: [
          {
            text: "Home",
            active: true,
          },
        ],
      },
    },
    {
      path: "/second-page",
      name: "second-page",
      component: () => import("@/views/SecondPage.vue"),
      meta: {
        pageTitle: "Second Page",
        breadcrumb: [
          {
            text: "Second Page",
            active: true,
          },
        ],
      },
    },

    {
      path: "/submissions",
      name: "submissions",
      component: () => import("@/views/Submissions.vue"),
      meta: {
        pageTitle: "Submissions",
        breadcrumb: [
          {
            text: "Submissions",
            active: true,
          },
        ],
      },
    },

    {
      path: "/create-submission",
      name: "create-submission",
      component: () => import("@/views/CreateSubmission.vue"),
      meta: {
        pageTitle: "Create Submission",
        breadcrumb: [
          {
            text: "Create Submission",
            active: true,
          },
        ],
      },
    },



    {
      path: "/departments",
      name: "departments",
      component: () => import("@/views/Departments.vue"),
      meta: {
        pageTitle: "Departments",
        breadcrumb: [
          {
            text: "Departments",
            active: true,
          },
        ],
      },
    },

    {
      path: "/notifications",
      name: "notifications",
      component: () => import("@/views/Notifications.vue"),
      meta: {
        pageTitle: "Notifications",
        breadcrumb: [
          {
            text: "Notifications",
            active: true,
          },
        ],
      },
    },

    {
      path: "/settings",
      name: "settings",
      component: () => import("@/views/Settings.vue"),
      meta: {
        pageTitle: "Settings",
        breadcrumb: [
          {
            text: "Settings",
            active: true,
          },
        ],
      },
    },

    {
      path: "/login",
      name: "login",
      component: () => import("@/views/Login.vue"),
      meta: {
        layout: "full",
      },
    },

    {
      path: "/register",
      name: "register",
      component: () => import("@/views/Register.vue"),
      meta: {
        layout: "full",
      },
    },
    {
      path: "/error-404",
      name: "error-404",
      component: () => import("@/views/error/Error404.vue"),
      meta: {
        layout: "full",
      },
    },

    {
      path: "/submission-success",
      name: "submission-success",
      component: () => import("@/views/error/SubmissionSuccess.vue"),
      meta: {
        layout: "full",
      },
    },


    {
      path: "/track-submission",
      name: "track-submission",
      component: () => import("@/views/error/TrackSubmission.vue"),
      meta: {
        layout: "full",
      },
    },



    {
      path: "*",
      redirect: "error-404",
    },
  ],
});

// ? For splash screen
// Remove afterEach hook if you are not using splash screen
router.afterEach(() => {
  // Remove initial loading
  const appLoading = document.getElementById("loading-bg");
  if (appLoading) {
    appLoading.style.display = "none";
  }
});

export default router;
