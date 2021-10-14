import { Route, Switch } from "react-router-dom";

import AdminHome from "../pages/AdminHomePage";
import ApplicationForm from "../pages/ApplicationFormPage";
import CreateTrip from "../pages/CreateTripPage";
import Home from "../pages/HomePage";
import ListTrips from "../pages/ListTripsPage";
import Login from "../pages/LoginPage";
import TripDetail from "../pages/TripDetailsPage";

const Routes = () => (
  <Switch>
    <Route path="/admin/trips/:id" exact component={TripDetail} />
    <Route path="/admin/trips/list" exact component={AdminHome} />
    <Route path="/admin/trips/create" exact component={CreateTrip} />
    <Route path="/login" component={Login} />
    <Route path="/trips/application" exact component={ApplicationForm} />
    <Route path="/trips/list" exact component={ListTrips} />
    <Route path="/" component={Home} />
  </Switch>
);

export default Routes;
