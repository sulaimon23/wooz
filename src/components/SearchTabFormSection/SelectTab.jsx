import React, { Component, useState } from 'react';
import { Jumbotron, Container, Row, Col, Image, Button, ButtonGroup, Card, InputGroup, Form, FormControl, FormCheck, Nav } from 'react-bootstrap';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import DatePicker from '../Calendar'
// import Stepper from 'react-stepper-horizontal'


import MultiStepper from '../MultiStepper/MultiStepper'

function SelectTab() {
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
        <div style={{backgroundColor: '#389aff'}} fluid>
                <Container direction='row' className='p-4' fluid>
                <Card style={{backgroundColor: 'transparent', border: 'none'}}>
                    <Card.Body>
                        <Form  noValidate validated={validated} onSubmit={handleSubmit}>
                            <Form.Row>
                                <Form.Group as={Col} md="2" controlId="validationCustom01">
                                    {/* <Form.Label>First name <span style={{color: 'red'}}>*</span></Form.Label> */}
                                    <Form.Control required type="text" placeholder='Third Party' disabled />
                                    {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
                                </Form.Group>
                                <Form.Group as={Col} md="3" controlId="validationCustom02">
                                    {/* <Form.Label>Last name <span style={{color: 'red'}}>*</span></Form.Label> */}
                                    <Form.Control required type="text" placeholder='Private' disabled />
                                    {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
                                </Form.Group>
                                <Form.Group as={Col} md="3" controlId="validationCustom02">
                                    {/* <Form.Label>Middle name <span style={{color: 'red'}}>*</span></Form.Label> */}
                                    <Form.Control required type="text" placeholder='Honda' disabled />
                                    {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
                                </Form.Group>
                                
                                <Form.Group as={Col} md="2" controlId="validationCustom02">
                                    {/* <Form.Label>Email Address <span style={{color: 'red'}}>*</span></Form.Label> */}
                                    <Form.Control required type="text" placeholder='Accord' disabled />
                                    {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} md="2" controlId="validationCustom02">
                                    {/* <Form.Label>Residential Address <span style={{color: 'red'}}>*</span></Form.Label> */}
                                    <Form.Control required type="text" placeholder='Saloon Car' disabled />
                                    {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
                                </Form.Group>
                                <Form.Group as={Col} md="3" controlId="validationCustom02">
                                    {/* <Form.Label>State <span style={{color: 'red'}}>*</span></Form.Label> */}
                                    <Form.Control required type="text" placeholder='2015' disabled />
                                    {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
                                </Form.Group>
                                <Form.Group as={Col} md="3" controlId="validationCustom02">
                                    {/* <Form.Label>State <span style={{color: 'red'}}>*</span></Form.Label> */}
                                    <Form.Control required type="text" placeholder='1 year' disabled />
                                    {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
                                </Form.Group>
                                <Form.Group as={Col} md="2" controlId="validationCustom02">
                                    {/* <Form.Label>State <span style={{color: 'red'}}>*</span></Form.Label> */}
                                    <Form.Control required type="text" placeholder='&#8358;500,000 - &#8358;1,000,000' disabled />
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
            
        </div>
    )
}

export default SelectTab
