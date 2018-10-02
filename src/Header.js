import React from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';

class Header extends React.Component{


    render = () => {
        return(
            <div>
                <Navbar>
                    <Navbar.Header>
                        <Navbar.Brand>
                        <a href="/">Stock Monitor</a>
                        </Navbar.Brand>
                    </Navbar.Header>
                    <Nav>
                        <NavItem eventKey={1} href="/">
                            Home
                        </NavItem>
                    </Nav>
                    <Nav pullRight>
                        <NavItem eventKey={1} href="/about" >
                            About
                        </NavItem>
                        <NavItem eventKey={2} href="/register">
                            Register User
                        </NavItem>
                        <NavItem eventKey={3} href="/login">
                            Login
                        </NavItem>
                    </Nav>
                </Navbar>
            </div>
        );
    }
}
export default Header;