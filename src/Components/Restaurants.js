import React, { Component } from 'react'
import OneRestaurant from './OneRestaurant'

class Restaurants extends Component {
    render() {
        return (
            <>
                <OneRestaurant
                    resturantsData={this.props.resturantsData}
                    cityNameInput={this.props.cityNameInput}
                />
            </>
        )
    }
}

export default Restaurants
