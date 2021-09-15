import React, { Component } from 'react'
import { Col, Card, Row } from 'react-bootstrap'

class WeatherDay extends Component {
    render() {
        return (
            <>
                <h3 style={{ borderRadius: '0.25em', textAlign: 'center', color: 'purple', border: '1px solid blue', padding: '0.5em' }}>{this.props.cityNameInput} Weather By Day</h3>
                <Row xs={1} md={4} className="g-3" >
                    {this.props.weatherData.map((elem, index) => {
                        return <Col key={index} className="text-center"  >
                            <Card border="primary" style={{ width: '18rem' }}>
                                <Card.Header>{elem.date}</Card.Header>
                                <Card.Body>
                                    <Card.Title>{elem.description}</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                    })
                    }
                </Row>
            </>
        )
    }
}

export default WeatherDay
