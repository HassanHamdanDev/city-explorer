import React, { Component } from 'react';
import { Alert } from 'react-bootstrap';

class ErorrApp extends Component {
    render() {
        return (
            <>
                <Alert variant="danger" >
                    <Alert.Heading>{this.props.errorStatus}</Alert.Heading>
                    <hr />
                    <p>{this.props.errorMassage}</p>
                </Alert>
            </>
        )
    }
}

export default ErorrApp
