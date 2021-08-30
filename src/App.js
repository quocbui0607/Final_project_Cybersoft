import "./App.css";
import { lazy, Suspense } from "react";
import { Route, Switch } from "react-router";
import AdminTemplate from "./AdminTemplate/AdminTemplate";

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <AdminTemplate></AdminTemplate>
        <Route
          path="/authentication"
          component={lazy(() =>
            import("./AdminTemplate/Authentication/Authentication")
          )}
        ></Route>
        <Route
          path=""
          component={lazy(() => import("./PageNotFound/PageNotFound"))}
        ></Route>
      </Switch>
    </Suspense>
  );
}

export default App;
