import React, { Component } from 'react';
import { Card, Row,Col,Container,Image } from 'react-bootstrap';

class CityExplore extends Component {
    render() {
        return (
            <>
            <Container>
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
                        <Card.Title>{this.props.cityName}</Card.Title>
                        <Card.Text>{this.props.lon}</Card.Text>
                        <Card.Text>{this.props.lat}</Card.Text>
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
