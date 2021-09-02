
import Dashboard from "./views/Dashboard/Dashboard.js";
import ManageUsers from "./views/ManageUsers/ManageUsers.js";
import ManageMovies from "./views/ManageMovies/ManageMovies.js";
import ManageTheaters from "./views/ManageTheaters/ManageTheaters.js";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Trang chủ",
    icon: "nc-icon nc-chart-pie-35",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/manage-users",
    name: "Quản lí người dùng",
    icon: "nc-icon nc-circle-09",
    component: ManageUsers,
    layout: "/admin",
  },
  {
    path: "/manage-movies",
    name: "Quản lí phim",
    icon: "fas fa-film",
    component: ManageMovies,
    layout: "/admin",
  },
  {
    path: "/manage-theaters",
    name: "Quản lí rạp",
    icon: "fas fa-ticket-alt",
    component: ManageTheaters,
    layout: "/admin",
  },
];

export default dashboardRoutes;
