import React, { Component, useState, select, Switch } from 'react';
import { Jumbotron, Container, Row, Col, Image, Button, ButtonGroup, Card, InputGroup, Form, FormControl, FormCheck } from 'react-bootstrap';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import DatePicker from '../../Calendar'
import ButtonToggle from '../../SearchTabFormSection/ButtonToggle'

function CableTvCard() {

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
            <Card>
                <div style={{ backgroundColor: '#ffffff', padding: '20px'}}>
                    {/* <p style={{color: '#389aff'}}> <b>Main Passenger (Adult)</b> </p>
                    <hr style={{color: '#389aff'}}/> */}
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <Form.Row  className="justify-content-md-center">
                            <Form.Group as={Col} md="7" controlId="validationCustom02">
                                <Form.Label> <h6>TV Operator <span style={{color: 'red'}}>*</span></h6></Form.Label>
                                
                                <Form.Control as='select'>
                                    <option>Select Network</option>
                                    <option>MTN</option>
                                    <option>Airtel</option>
                                    <option>9mobile</option>
                                    <option>Glo</option>
                                </Form.Control>
                                
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group as={Col} md="7" controlId="validationCustom02">
                                <Form.Label> <h6>Smart Card Number <span style={{fontSize: '12px'}}>(Optional)</span></h6></Form.Label>
                                <Form.Control required type="text" defaultValuexx="Otto" placeholder='Enter Smartcard Number' />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                            
                            <Form.Group as={Col} md="7" controlId="validationCustom02">
                                <Form.Label> <h6>Preferred Package <span style={{color: 'red'}}>*</span></h6></Form.Label>
                                <Form.Control as='select'>
                                    <option>Preferred Package</option>
                                    <option>&#8358;2565 = DSTv Yanga Bouquet E36</option>
                                    <option>&#8358;3565 = DSTv Family Bouquet E36</option>
                                    <option>&#8358;4065 = DSTv Classic Bouquet E36</option>
                                    <option>&#8358;6565 = DSTv Premium Bouquet E36</option>
                                    <option>&#8358;9565 = DSTv Exclusive Bouquet E36</option>
                                </Form.Control>
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group as={Col} md="7" controlId="validationCustomUsername">
                                <Form.Label> <h6> Phone Number <span style={{color: 'red'}}>*</span></h6></Form.Label>
                                <InputGroup >
                                    <InputGroup.Prepend>
                                        <PhoneInput style={{width: '500px'}} inputProps={{ name: 'phone', required: true, autoFocus: false }} />
                                    </InputGroup.Prepend>
                                    <Form.Control.Feedback type="invalid"> Enter a valid phone number. </Form.Control.Feedback>
                                </InputGroup>
                            </Form.Group>
                            
                        </Form.Row>
                    </Form>
                </div>
            </Card>
        </div>
        
    )
}

export default CableTvCard
