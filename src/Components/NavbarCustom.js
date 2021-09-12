import React, { Component } from 'react';
import { Navbar, Container } from 'react-bootstrap';

class NavbarCustom extends Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            alt=""
                            src="https://scontent.famm6-1.fna.fbcdn.net/v/t1.6435-9/48390878_2245991895625744_5123517301156478976_n.png?_nc_cat=109&ccb=1-5&_nc_sid=973b4a&_nc_ohc=rzGW05Q0MXwAX9wcxOT&_nc_ht=scontent.famm6-1.fna&oh=f8e3b51df6fd11de05e389f79b43920f&oe=61625252"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                        City Explorer
                    </Navbar.Brand>
                </Container>
            </Navbar>
        )
    }
}

export default NavbarCustom
