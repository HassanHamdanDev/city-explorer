import React, { Component } from 'react';
import { Row, Col, Card, Image } from 'react-bootstrap';


class Movies extends Component {
    render() {
        return (
            <>
                <Row xs={1} md={2} className="g-4">
                    {this.props.moviesData.map(elem => {
                        return <Col key={elem.id}>
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
