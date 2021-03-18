import { Route, Switch } from "react-router-dom";
import { AppRouteUi } from "../configs";
import { PageNotFound } from "./pages";
import { PageHome } from "./pages/pageHome";
import { PageLogin } from "./pages/pageLogin";

export function LayoutPublic(): JSX.Element {
  return (
    <Switch>
      <Route path={AppRouteUi.Home.Root()} exact component={PageHome} />
      <Route path={AppRouteUi.NotFound.Root()} exact component={PageNotFound} />
      <Route path={AppRouteUi.Login.Root()} exact component={PageLogin} />
    </Switch>
  );
}
