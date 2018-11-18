import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Movies from "./movies";
import Customers from "./customers";
import Rentals from "./rentals";
import LoginForm from "./loginForm";
import MovieDetails from "./movieDetails";
import RegisterForm from "./registerForm";
import NotFound from "./notFound";

const VidlyRoutes = () => {
  return (
    <Switch>
      <Route path="/login" component={LoginForm} />
      <Route path="/register" component={RegisterForm} />
      <Route path="/rentals" component={Rentals} />
      <Route path="/customers" component={Customers} />
      <Route path="/movies/:id" component={MovieDetails} />
      <Route path="/movies" component={Movies} />
      <Route exact path="/" component={Movies} />
      <Route path="/not-found" component={NotFound} />
      <Redirect to="/not-found" />
    </Switch>
  );
};

export default VidlyRoutes;
