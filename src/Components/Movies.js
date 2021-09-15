import React, { Component } from 'react';
import { Row, Col, Card, Image } from 'react-bootstrap';


class Movies extends Component {
    render() {
        return (
            <>
                <h3 style={{ borderRadius: '0.25em', textAlign: 'center', color: 'purple', border: '1px solid purple', padding: '0.5em' }}>{this.props.cityName} Movies</h3>
                <Row xs={1} md={2} className="g-4">
                    {this.props.moviesData.map((elem, index) => {
                        return <Col key={index}>
                            <Card>
                                <Image
                                    variant="top"
                                    src={elem.image_url}
                                    alt=""
                                    fluid
                                    style={{ margin: '0' }}
                                />
                                <Card.Body>
                                    <Card.Title> Title : {elem.title}</Card.Title><br />
                                    <Card.Subtitle> Total Votes : {elem.total_votes}</Card.Subtitle><br />
                                    <Card.Subtitle> Popularity : {elem.popularity}</Card.Subtitle><br />
                                    <Card.Subtitle> Released On : {elem.released_on}</Card.Subtitle><br />
                                    <Card.Subtitle> Average Votes : {elem.average_votes}</Card.Subtitle><br />
                                    <Card.Text> <strong>Overview :</strong><br />{elem.overview}</Card.Text>
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

export default Movies
