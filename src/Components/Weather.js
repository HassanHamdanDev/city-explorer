import React, { Component } from 'react';
import { Row, Col, Table } from 'react-bootstrap';

class Weather extends Component {
    render() {
        return (
            <>
                <Row>
                    <Col >
                        <h3 style={{ borderRadius: '0.25em', textAlign: 'center', color: 'purple', border: '1px solid purple', padding: '0.5em' }}>{this.props.cityName} Weather</h3>
                        <Table striped bordered hover variant="info">
                            <thead>
                                <tr>
                                    <th>Day</th>
                                    <th>Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.props.weatherData.map(elem => {
                                    return <tr key={elem.id}>
                                        <td>{elem.date}</td>
                                        <td>{elem.description}</td>
                                    </tr>
                                })
                                }
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </>
        )
    }
}

export default Weather
