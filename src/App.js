import "./App.css";
import { lazy, Suspense, useEffect } from "react";
import { Route, Switch, withRouter } from "react-router";
import AdminTemplate from "./AdminTemplate/AdminTemplate";
import { useDispatch } from "react-redux";
import { actTryLogin } from "./AdminTemplate/Authentication/modules/actions";

function App(props) {
  const {history} = props
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actTryLogin(history));
    // eslint-disable-next-line
  }, [dispatch]);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        {AdminTemplate()}
        <Route
          path="/authentication"
          component={lazy(() => import("./AdminTemplate/Authentication/Authentication"))}
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
