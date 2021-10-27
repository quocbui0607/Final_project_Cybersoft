import "./App.scss";
import { lazy, Suspense, useEffect } from "react";
import { Route, Switch, withRouter } from "react-router";
import AdminTemplate from "./AdminTemplate/AdminTemplate";
import { useDispatch } from "react-redux";
import { actTryLogin } from "./AdminTemplate/Authentication/modules/actions";
import { RoutesHome } from "./routes";

function App(props) {
  const { history } = props;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actTryLogin(history));
    // eslint-disable-next-line
  }, [dispatch]);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        {RoutesHome()}
        {AdminTemplate()}
        <Route
          path="/authentication"
          component={lazy(() =>
            import("./AdminTemplate/Authentication/Authentication")
          )}
        ></Route>
         <Route
          path = "/register"
          component= {lazy(() => import("./Pages/RegisterPage"))}
        ></Route> 
         <Route
          path = "/login"
          component= {lazy(() => import("./Pages/LoginPage"))}
        ></Route> 
        <Route
          path=""
          component={lazy(() => import("./PageNotFound/PageNotFound"))}
        ></Route>           
      </Switch>
    </Suspense>
  );
}

export default withRouter(App);
