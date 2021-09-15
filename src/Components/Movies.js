import React, { Component } from 'react';
import { Row, Col, Card, Image, Table } from 'react-bootstrap';


class Movies extends Component {
    render() {
        return (
            <div>
                <Row xs={1} md={2} className="g-4">
                    {this.props.moviesData.map(elem => {
                        return <Col>
                            <Card>
                                <Card.Img
                                    variant="top"
                                    src={elem.poster_path}
                                    alt=""
                                    roundedCircle
                                    fluid
                                    style={{ margin: '0' }}
                                />
                                <Card.Body>
                                    <Card.Title>{elem.title}</Card.Title>
                                    <Card.Subtitle>{elem.vote_count}</Card.Subtitle>
                                    <Card.Subtitle>{elem.popularity}</Card.Subtitle>
                                    <Card.Subtitle>{elem.release_date}</Card.Subtitle>
                                    <Card.Subtitle>{elem.vote_average}</Card.Subtitle>
                                    <Card.Text>{elem.overview}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    })
                    }
                </Row>
            </div>
        )
    }
}

export default Movies
