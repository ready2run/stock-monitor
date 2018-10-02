import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Navbar, Nav, NavDropdown, NavbarHeader, NavItem} from 'react-bootstrap';
class Home extends Component{

    renderNavbar = () =>{
        return (<Navbar>
            <Navbar.Header>
                <Navbar.Brand>
                <a href="#home">Stock Monitor</a>
                </Navbar.Brand>
            </Navbar.Header>
            <Nav pullRight>
                <NavItem eventKey={1} href="#">
                    <Link to='/about'>About</Link><br/>
                </NavItem>
                <NavItem eventKey={2} href="#">
                    <Link to='/register'>Register User</Link>
                </NavItem>
            </Nav>
        </Navbar>
        );
    }

    render(){
        return (
            this.renderNavbar()
        );
    }
}

export default Home;