import React, { Component, useState } from 'react';
import { Jumbotron, Container, Row, Col, Image, Button, ButtonGroup, Card, InputGroup, Form, FormControl, FormCheck } from 'react-bootstrap';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import DatePicker from '../Calendar'

function VehicleFormSections() {
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
        <div>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Row>
                    <Form.Group as={Col} md="4" controlId="validationCustom01">
                        <Form.Label>License Plate Number <span style={{color: 'red'}}>*</span></Form.Label>
                        <Form.Control required type="text" placeholder="Enter License Plate Number" defaultValuexx="Mark" />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="validationCustom02">
                        <Form.Label>Chasis Number <span style={{color: 'red'}}>*</span></Form.Label>
                        <Form.Control required type="text" placeholder="Enter Chasis Number" defaultValuexx="Otto" />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="validationCustom02">
                        <Form.Label>Engine Number <span style={{color: 'red'}}>*</span></Form.Label>
                        <Form.Control required type="text" placeholder="Enter Engine Number" defaultValuexx="Otto" />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    
                </Form.Row>
                {/* <Button variant='danger' style={{width: '100%'}} type="submit">Review Details </Button> */}
                
                {/* <Button type="submit">Proceed <i className="fa fa-arrow-right"></i></Button> */}
            </Form>
        </div>
    )
}

export default VehicleFormSections
