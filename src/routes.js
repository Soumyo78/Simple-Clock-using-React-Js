import { Route, Switch } from "react-router";

import HomeScreen from './screens/Home/index';
import ClockScreen from './screens/Clock/index';
import StopwatchScreen from './screens/Stopwatch';

const RoutesComponent = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomeScreen} />
      <Route exact path="/clock" component={ClockScreen} />
      <Route exact path="/stopwatch" component={StopwatchScreen} />
    </Switch>
  );
};

export default RoutesComponent;
