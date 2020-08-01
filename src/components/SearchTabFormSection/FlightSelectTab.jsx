import React, { Component, useState } from 'react';
import { Jumbotron, Container, Row, Col, Image, Button, ButtonGroup, Card, InputGroup, Form, FormControl, FormCheck, Nav } from 'react-bootstrap';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import DatePicker from '../Calendar'
// import Stepper from 'react-stepper-horizontal'

import InnerTabPanel from '../SearchTabFormSection/InnerTabPanel'
import FlightSearchMultiStepper from '../MultiStepper/FlightSearchMultiStepper'
import GoogleMap from './GoogleMap';

function FlightSelectTab() {
    const [validated, setValidated] = useState(false);
    
    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

    setValidated(true);
    };
    return (
        // <div>
        //     <Container className='p-4' as={Col} lg={12} style={{maxWidth: '100%' }}>
        <div fluid>
            <Container style={{backgroundColor: '#389aff'}} direction='row'  fluid>
                <Card style={{backgroundColor: 'transparent', border: 'none'}}>
                    <Card.Body>
                        <Form noValidate validated={validated} onSubmit={handleSubmit}>
                            <Form.Row>
                                <Form.Group as={Col} md="2" controlId="validationCustom01">
                                    {/* <Form.Label>First name <span style={{color: 'red'}}>*</span></Form.Label> */}
                                    <Form.Control required type="text" placeholder='Lagos, Nigeria' disabled />
                                    {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
                                </Form.Group>
                                <Form.Group as={Col} md="2" controlId="validationCustom02">
                                    {/* <Form.Label>Last name <span style={{color: 'red'}}>*</span></Form.Label> */}
                                    <Form.Control required type="text" placeholder='London, England' disabled />
                                    {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
                                </Form.Group>
                                <Form.Group as={Col} md="2" controlId="validationCustom02">
                                    {/* <Form.Label>Last name <span style={{color: 'red'}}>*</span></Form.Label> */}
                                    <Form.Control required type="text" placeholder='23rd June 2020' disabled />
                                    {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
                                </Form.Group>
                                <Form.Group as={Col} md="2" controlId="validationCustom02">
                                    {/* <Form.Label>Middle name <span style={{color: 'red'}}>*</span></Form.Label> */}
                                    <Form.Control required type="text" placeholder='+ Add Return' disabled />
                                    {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
                                </Form.Group>
                                
                                <Form.Group as={Col} md="2" controlId="validationCustom02">
                                    {/* <Form.Label>Email Address <span style={{color: 'red'}}>*</span></Form.Label> */}
                                    <Form.Control required type="text" placeholder='1 Adult, 0 Children, 0 Infant' disabled />
                                    {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
                                </Form.Group>
                                <Form.Group as={Col} md="2">
                                    <Button variant='danger' style={{width: '100%'}} type="submit"> Search </Button>
                                </Form.Group>
                            </Form.Row>
                        </Form>
                    </Card.Body>
                </Card>
            </Container>
            {/* <br/> */}
            <Container fluid>
                <Col lg={12}>
                    <Row>
                        <Col md={8}>
                            <InnerTabPanel />
                        </Col>
                        <Col md={4}>
                            <GoogleMap />
                        </Col>
                    </Row>
                </Col>
            </Container>
            {/* <Container>
                <InnerTabPanel />
            </Container> */}
            
        </div>
    )
}

export default FlightSelectTab
