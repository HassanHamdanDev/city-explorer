import React, { Component } from 'react';
import { Card, Row, Col, Container, Image } from 'react-bootstrap';

class CityExplore extends Component {
    render() {
        return (
            <>
                <Container >
                    <Row>
                        <Col>
                            <Card className="bm-dark text-black" >
                                <Image
                                    src={this.props.cityImage}
                                    alt="Card image"
                                    roundedCircle
                                    fluid
                                />
                                <Card.ImgOverlay>
                                    <Card.Title>{this.props.cityName}</Card.Title><br />
                                    <Card.Subtitle> <strong><em>Lon : </em></strong>{this.props.lon}</Card.Subtitle><br />
                                    <Card.Subtitle><strong><em>Lat : </em></strong>{this.props.lat}</Card.Subtitle><br />
                                </Card.ImgOverlay>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }
}

export default CityExplore
