import React, { Component, useState, select, Switch } from 'react';
import { Jumbotron, Container, Row, Col, Image, Button, ButtonGroup, Card, InputGroup, Form, FormControl, FormCheck } from 'react-bootstrap';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

function DataConfirmationCard() {

    // const [validated, setValidated] = useState(false);
    
    // const handleSubmit = (event) => {
    //     const form = event.currentTarget;
    //     if (form.checkValidity() === false) {
    //         event.preventDefault();
    //         event.stopPropagation();
    //     }

    // setValidated(true);
    // };
   
    return (
        <div>
            <Card align='center' style={{backgroundColor: '#ffffff', border: 'none'}}>
                <div style={{ backgroundColor: 'transparent', padding: '20px', width: '500px'}}>
                    <span style={{color: '#043f7c'}}><b style={{float: 'left'}}>Data Details</b> <span style={{float: 'right'}}>Edit &nbsp; <i className="fa fa-pencil"></i></span></span>
                    <br/>
                    <hr style={{color: '#043f7c', borderTop: '1px dashed'}}/>
                    <Row>
                        <Col md={6}>
                            <p style={{float: 'left'}}><b>Network Operator:</b> </p>
                        </Col>
                        <Col md={6}>
                            <p style={{float: 'right'}}>MTN </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <p style={{float: 'left'}}><b>Phone Number:</b> </p>
                        </Col>
                        <Col md={6}>
                            <p style={{float: 'right'}}>07060460216 </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <p style={{float: 'left'}}><b>Data Plan:</b> </p>
                        </Col>
                        <Col md={6}>
                            <p style={{float: 'right'}}>&#8358;1000 = 1.5GB for 30 Days </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <p style={{float: 'left'}}><b>Email:</b> </p>
                        </Col>
                        <Col md={6}>
                            <p style={{float: 'right'}}>amoshood@fczmedia.com </p>
                        </Col>
                    </Row>
                    <br/>
                    <Row>
                        <Col align='center' md={12}>
                            <Button variant='danger' type="submit" style={{width: '300px'}}><span style={{fontSize: 'small'}}>Buy Now</span> </Button>
                        </Col>
                    </Row>
                </div>
                {/*  */}
                
            </Card>
        </div>
        
    )
}

export default DataConfirmationCard;
