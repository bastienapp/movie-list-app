import React from "react";
import "./App.css";
import MovieList from "./components/MovieList";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import NavBar from "./components/NavBar";
import MovieDetails from "./components/MovieDetails";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/movies">
            <MovieList />
          </Route>
          <Route exact path="/movies/:id" component={MovieDetails} />
          <Route exact path="/" />
          <Redirect to="/movies" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
