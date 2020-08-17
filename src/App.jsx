import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="row d-flex mt-5">
          <CountriesList className="col-6" />
          <Switch>
            <Route
              path="/countries/:id"
              render={(props) => <CountryDetails {...props} />}
              exact
            />
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
