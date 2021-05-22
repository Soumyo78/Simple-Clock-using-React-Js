import { Route, Switch } from "react-router";

import HomeScreen from './screens/Home/index';
import ClockScreen from './screens/Clock/index';

const RoutesComponent = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomeScreen} />
      <Route exact path="/clock" component={ClockScreen} />
    </Switch>
  );
};

export default RoutesComponent;
