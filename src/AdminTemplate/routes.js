
import Dashboard from "./views/Dashboard.js";
import ManageUsers from "./views/ManageUsers.js";
import ManageMovies from "./views/ManageMovies.js";
import ManageTheaters from "./views/ManageTheaters.js";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-chart-pie-35",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/manage-users",
    name: "Manage Users",
    icon: "nc-icon nc-circle-09",
    component: ManageUsers,
    layout: "/admin",
  },
  {
    path: "/manage-movies",
    name: "Manage Movies",
    icon: "nc-icon nc-notes",
    component: ManageMovies,
    layout: "/admin",
  },
  {
    path: "/manage-theaters",
    name: "Manage Theaters",
    icon: "nc-icon nc-atom",
    component: ManageTheaters,
    layout: "/admin",
  },
];

export default dashboardRoutes;
