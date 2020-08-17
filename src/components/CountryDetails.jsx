import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import countriesList from './../countries.json';

class CountryDetails extends Component {
  constructor() {
    super();
    this.state = {
      country: null,
    };
  }

  componentDidMount() {
    this.loadCountryDetails();
  }
  componentDidUpdate(previousProps, previousState) {
    if (previousProps.match.params.id !== this.props.match.params.id) {
      this.loadCountryDetails();
    }
  }

  loadCountryDetails = () => {
    const countryId = this.props.match.params.id;
    const country = countriesList.find((item) => item.ccn3 === countryId);
    this.setState({
      country,
    });
  };

  render() {
    const country = this.state.country;
    let img = '';
    if (this.state.country) {
      img = `https://www.countryflags.io/${country.cca2.toLowerCase()}/flat/64.png`;
    }

    return (
      <div className="col-6">
        {country && (
          <>
            <img src={img} alt={country.name.common} />
            <h2>{country.name.official}</h2>
            <table className="mx-auto my-5">
              <thead>
                <tr>
                  <td className="px-5">Capital</td>
                  <td className="px-5">Area</td>
                  <td className="px-5">Borders</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{country.capital}</td>
                  <td>
                    {country.area} km<sup>2</sup>
                  </td>
                  <td>
                    <ul>
                      {country.borders.map((border) => (
                        <li key={border}>
                          <Link
                            to={`/countries/${
                              countriesList.find(
                                (country) => border === country.cca3
                              ).ccn3
                            }`}
                          >
                            {border}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </>
        )}
      </div>
    );
  }
}

export default CountryDetails;
