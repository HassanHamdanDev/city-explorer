import React, { Component } from 'react';
import Movie from './Movie';

class Movies extends Component {
    render() {
        return (
            <>
                <Movie
                    moviesData={this.props.moviesData}
                    cityNameInput={this.props.cityNameInput}
                />
            </>
        )
    }
}

export default Movies
