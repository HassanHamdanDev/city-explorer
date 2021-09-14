import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

class Weather extends Component {
    render() {
        return (
            <>
                <Table striped bordered hover variant="info">
                    <thead>
                        <tr>
                            <th>Day</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.weatherData.map(elem => {
                            return <tr>
                                <td>{elem.date}</td>
                                <td>{elem.description}</td>
                            </tr>
                        })
                        }
                    </tbody>
                </Table>
            </>
        )
    }
}

export default Weather
