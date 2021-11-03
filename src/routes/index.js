import React, { lazy } from "react";
import HomeTemplate from "./../HomeTemplate";

const routesHome = [
  {
    exact: true,
    path: "/",
    component: lazy(() => import("./../HomeTemplate/HomePage")),        
  },
  {
    exact: false,
    path: "/play-movie",
    component: lazy(() => import("./../HomeTemplate/_components/PlayMovie")),
    // component: PlayMovie   
  },
  {
    exact: false,
    path: "/list-movie",
    component: lazy(() => import("./../HomeTemplate/ListMoviePage"))
  },
  {
    exact: false,
    path: "/detail/:id",
    component: lazy(() => import("./../HomeTemplate/DetailMoviePage"))
  }
  
];

export function RoutesHome() {
  return routesHome.map((route, index) => {
    return (
      <HomeTemplate
        key={index}
        exact={route.exact}
        path={route.path}
        Component={route.component}
      />
    );
  });
}
