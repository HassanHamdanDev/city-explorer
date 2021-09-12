import React, { Component } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';

class CityForm extends Component {
    render() {
        return (
            <Form onSubmit={this.props.handleSubmit}>
                <Row md={4} className="g-1">
                    <Col>
                        <Form.Control 
                        type="text" 
                        placeholder="Enter City Name ..."
                        onChange={this.props.handleInput} />
                    </Col>
                    <Col>
                        <Button variant="primary" type="submit">
                            Explore!
                        </Button>
                    </Col>
                </Row>
            </Form>
        )
    }
}

export default CityForm
