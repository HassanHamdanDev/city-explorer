import React, { Component } from 'react';
import { Row, Col, Card, Image } from 'react-bootstrap';


class Movie extends Component {
    render() {
        return (
            <>
                <h3 style={{ borderRadius: '0.25em', textAlign: 'center', color: 'purple', border: '1px solid cyan', padding: '0.5em' }}>{this.props.cityNameInput} Movies</h3>
                <Row xs={1} md={3} className="g-4" >
                    {this.props.moviesData.map((elem, index) => {
                        return <Col key={index} >
                            <Card style={{ alignItems: 'center' }}>
                                <br />
                                <Image
                                    variant="top"
                                    src={elem.image_url}
                                    alt=""
                                    roundedCircle
                                    fluid
                                    style={{ height: 400, width: 400 }}
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

export default Movie
