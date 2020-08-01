import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, InputGroup, Dropdown, DropdownButton, Button, FormControl, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import Icon from '@material-ui/icons';
// import { Icon } from '@material-ui/core';

import Logo from '../assets/img/wooz.png'
import img from '../assets/img/avatar.jpg'
import ReactCountryFlag from "react-country-flag"


class CustomNavbar extends Component {
    render() {
        return (
            <Navbar style={{backgroundColor: 'white'}}  collapseOnSelect>
                {/* start menu icon */}
                <Nav.Link style={{backgroundColor: '#389aff', borderRadius: '3px', paddingLeft: '13px', paddingRight: '13px'}}>
                    <i style={{color: '#ffffff'}} className="fa fa-bars fa-lg"></i>
                </Nav.Link>
                {/* end menu icon */}
                
                {/* start brand logo */}
                <Navbar.Brand className='ml-3'>
                    <a href="/">
                        <img src={Logo} style={{width: '100px'}} alt=""/>
                    </a>
                </Navbar.Brand>
                {/* end brand logo */}
                
                {/* start responsive navbar */}
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse>
                    <Nav className="mx-auto">
                        {/* <Nav.Link href="#features">Features</Nav.Link> */}
                        
                        {/* start search field */}
                        <InputGroup className="" style={{width: '650px'}}>
                            <DropdownButton as={InputGroup.Prepend} variant="outline-secondary" title="All" id="input-group-dropdown-1">
                            <Dropdown.Item href="#">All Departments</Dropdown.Item>
                            <Dropdown.Item href="#">Arts &amp; Crafts</Dropdown.Item>
                            <Dropdown.Item href="#">Hangouts</Dropdown.Item>
                            <Dropdown.Item href="#">Learning</Dropdown.Item>
                            <Dropdown.Item href="#">Worship</Dropdown.Item>
                            <Dropdown.Item href="#">Charity</Dropdown.Item>
                            <Dropdown.Item href="#">Hangouts</Dropdown.Item>
                            <Dropdown.Item href="#">Learning</Dropdown.Item>
                            <Dropdown.Item href="#">Worship</Dropdown.Item>
                            <Dropdown.Item href="#">Charity</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item href="#">Other Services</Dropdown.Item>
                            </DropdownButton>
                            <FormControl placeholder="What are you looking for?" aria-describedby="basic-addon1" >
                                
                            </FormControl>
                            <InputGroup.Append>
                                <Button variant="danger">
                                    <i className="fa fa-search"></i>
                                </Button>
                            </InputGroup.Append>
                        </InputGroup>
                        {/* end search field */}
                    </Nav>
                    <Nav>

                        {/* start currency */}
                        <NavDropdown title="NGN &#x20A6;" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">USD $</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">EUR £</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">GBP £</NavDropdown.Item>
                            {/* <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
                        </NavDropdown>
                        {/* end currency */}

                        {/*  */}
                        {/* <Nav.Link>
                            
                        </Nav.Link> */}
                        <Dropdown alignRight>
                            <Dropdown.Toggle variant="transparent" id="dropdown-basic">
                                <ReactCountryFlag id="collasible-nav-dropdown"
                                        countryCode="Ng"
                                        svg
                                        style={{
                                            width: '2em',
                                            height: '1em',
                                        }}
                                        title="Ng"
                                    >
                                </ReactCountryFlag>
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1"> <i className="fa fa-shopping-bag"></i> Track Orders</Dropdown.Item>
                                <Dropdown.Item href="#/action-2"> <i className="fa fa-exchange"></i> Reorder items</Dropdown.Item>
                                <Dropdown.Item href="#/action-3"> <i className="fa fa-credit-card"></i> Voucher Credit</Dropdown.Item>
                                <Dropdown.Item href="#/action-3"> <i className="fa fa-question-circle"></i> Help</Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item href="#action/3.4"> <i className="fa fa-power-off"></i> Logout</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        
                        {/* <NavDropdown title="NGN" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown> */}
                        <Nav.Link href="#deets"><i className="fa fa-shopping-cart fa-lg" style={{color: "#389aff"}}></i></Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            Hello, Ayodeji
                            {/* <FontAwesomeIcon icon={['far', 'search']} /> */}
                        </Nav.Link>
                        {/* <Nav.Link>
                            <Image src={img} style={{width: '30px'}} roundedCircle />
                        </Nav.Link> */}
                        <Dropdown alignRight>
                            <Dropdown.Toggle variant="transparent" id="dropdown-basic">
                                <Image src={img} style={{width: '30px'}} roundedCircle />
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1"> <i className="fa fa-shopping-bag"></i> Track Orders</Dropdown.Item>
                                <Dropdown.Item href="#/action-2"> <i className="fa fa-exchange"></i> Reorder items</Dropdown.Item>
                                <Dropdown.Item href="#/action-3"> <i className="fa fa-credit-card"></i> Voucher Credit</Dropdown.Item>
                                <Dropdown.Item href="#/action-3"> <i className="fa fa-question-circle"></i> Help</Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item href="#action/3.4"> <i className="fa fa-power-off"></i> Logout</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        
                        {/* <NavDropdown >
                            
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown> */}
                        
                    </Nav>
                    {/* <Nav pullRight>
                        <NavItem eventKey={1} componentClass={Link} to="/" >
                            Home
                        </NavItem>
                        <NavItem eventKey={2} componentClass={Link} to="/insurance" >
                            Insurance
                        </NavItem>
                    </Nav> */}
                </Navbar.Collapse>
            </Navbar>
            // <div>
            //     tfuygihoj;
            // </div>
        );
    };
};

export default CustomNavbar;