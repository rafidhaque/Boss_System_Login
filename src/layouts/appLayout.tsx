import { Redirect, Route, Switch } from "react-router-dom";
import { AppRouteUi } from "../configs";
import { LayoutPrivate } from "./privateLayout";
import { LayoutPublic } from "./publicLayout";

export function LayoutApplication(): JSX.Element {
  return (
    <Switch>
      <Redirect exact from="/" to={AppRouteUi.Home.Root()} />
      <Route path="/(home|404|login)" component={LayoutPublic} />
      <Route
        path="/(dashboard|tools|news|methology-and-data)"
        component={LayoutPrivate}
      />
      <Route
        path="**"
        render={() => <Redirect to={AppRouteUi.NotFound.Root()} />}
      />
    </Switch>
  );
}
