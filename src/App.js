import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CityForm from './Components/CityForm';
import CityExplore from './Components/CityExplore';
import NavbarCustom from './Components/NavbarCustom';
import axios from 'axios';
import ErorrApp from './Components/ErorrApp';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showCity: false,
      cityName: "",
      cityImage: "",
      lon: "",
      lat: "",
      errorMassage: "",
      errorStatus: "",
      errorShow: false
    }
  }
  handleInput = (event) => {
    let cityName = event.target.value;
    this.setState({
      cityName: cityName
    })
  }
  handleSubmit = (event) => {
    event.preventDefault();
    // if(this.state.cityName)

    let config = {
      method: "GET",
      baseURL: `https://api.locationiq.com/v1/autocomplete.php?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.cityName}`
    }

    axios(config).then(res => {
      let dataResponse = res.data[0]
      this.setState({
        cityName: dataResponse.display_name,
        lon: dataResponse.lon,
        lat: dataResponse.lat,
        showCity: true
      })
      let mapconfig = {
        method: "GET",
        baseURL: `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&size=500x400&zoom=1-18&markers=${this.state.lat},${this.state.lon}|icon:large-blue-cutout&format=png`
      }
      axios(mapconfig).then(response => {
        let dataResponse = response.config.baseURL;
        this.setState({
          cityImage: dataResponse
        })
      })
    })
      .catch(error => {
        this.setState({
          errorMassage: error.response.data.error,
          errorStatus: error.response.status,
          errorShow: true
        })
      })
  }
  render() {
    return (
      <>
        <NavbarCustom />
        <h1>Welcome to City Explorer</h1>
        <CityForm
          handleInput={this.handleInput}
          handleSubmit={this.handleSubmit}
        />
        {
          this.state.showCity &&
          <CityExplore
            cityName={this.state.cityName}
            cityImage={this.state.cityImage}
            lon={this.state.lon}
            lat={this.state.lat}
          />
        }
        {
          this.state.errorShow &&
          <ErorrApp
            errorMassage={this.state.errorMassage}
            errorStatus={this.state.errorStatus}
          />
        }
      </>
    )
  }
}

export default App

