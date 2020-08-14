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
            <Container style={{backgroundColor: '#043f7c'}} direction='row'  fluid>
                <Card style={{backgroundColor: 'transparent', border: 'none'}}>
                    <Card.Body>
                        <Form noValidate validated={validated} onSubmit={handleSubmit} style={{marginTop: '14px', height: '55px'}}>
                            <Form.Row>
                                <InputGroup className="mb-5" as={Col} md="3" >
                                    <InputGroup.Prepend>
                                        <InputGroup.Text>
                                        <i class='fa fa-map-marker'></i>
                                        </InputGroup.Text>
                                    </InputGroup.Prepend>
                                    {/* <fromdata /> */}
                                    <FormControl style={{borderTopRightRadius: '4px', borderBottomRightRadius: '4px'}} id="inlineFormInputGroup" placeholder="From:" required type='text' defaultValue='Murtala Mohammed Airport' />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </InputGroup>
                                <InputGroup className="mb-5" as={Col} md="3" >
                                    <InputGroup.Prepend>
                                        <InputGroup.Text>
                                        <i class='fa fa-map-marker'></i>
                                        </InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <FormControl style={{borderTopRightRadius: '4px', borderBottomRightRadius: '4px'}} id="inlineFormInputGroup" placeholder="To:" required type='text' defaultValue='London, England' />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </InputGroup>
                                <Form.Group as={Col} md="3" controlId="validationCustom02">
                                    <InputGroup className="mb-3">
                                        <FormControl placeholder='Depature Date' />
                                        <FormControl placeholder='+ Add Return' />
                                    </InputGroup>
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} md="2" controlId="validationCustom02">
                                    {/* <Form.Label>Residential Address <span style={{color: 'red'}}>*</span></Form.Label> */}
                                    <Form.Control required type="text" placeholder="Passengers" defaultValuexx="Mark" />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} md="1">
                                    <Button href='onthego/flightsearch' variant='danger' style={{width: '100%'}} type="submit"> Search </Button>
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
            
        </div>
    )
}

export default FlightSelectTab
