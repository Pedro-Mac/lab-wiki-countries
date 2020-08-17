import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import countriesList from './../countries.json';

class CountriesList extends Component {
  render() {
    return (
      <div className="col-6 CountriesList-height overflow-auto">
        {countriesList.map((country) => {
          return (
            <Link key={country.ccn3} to={`/countries/${country.ccn3}`}>
              <h3
                className="CoutnriesList-title__spaced"
                style={{}}
                onClick={this.styleHeader}
              >
                {country.name.common}
              </h3>
            </Link>
          );
        })}
      </div>
    );
  }
}

export default CountriesList;
