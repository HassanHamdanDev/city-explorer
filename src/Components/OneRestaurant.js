import React, { Component } from 'react';
import { Col, Card, Row } from 'react-bootstrap';


class OneRestaurant extends Component {
    render() {
        return (
            <>
                <h3 style={{ borderRadius: '0.25em', textAlign: 'center', color: 'purple', border: '1px solid blue', padding: '0.5em' }}>{this.props.cityNameInput} Popular Restaurants </h3>
                <Row xs={1} md={4} className="g-3">
                    {
                        this.props.resturantsData.map((elem, index) => {
                            return <Col key={index} className="text-center">
                                <Card className="bg-dark text-white">
                                    <Card.Img
                                        src={elem.image_url}
                                        alt="Card image"
                                        fluid={elem.toString()}
                                        rounded={elem.toString()}
                                        style={{
                                            height: 400, width: 300, opacity: 0.50
                                        }}
                                    />
                                    <Card.ImgOverlay>
                                        <Card.Title>{elem.name}</Card.Title><br />
                                        <Card.Subtitle>Rating : {elem.rating}</Card.Subtitle><br />
                                        <Card.Subtitle>Price : {elem.price}</Card.Subtitle>
                                    </Card.ImgOverlay>
                                    <Card.Link href={elem.url}> Restaurant Website</Card.Link>
                                </Card>
                            </Col>
                        })
                    }
                </Row>
            </>
        )
    }
}

export default OneRestaurant
