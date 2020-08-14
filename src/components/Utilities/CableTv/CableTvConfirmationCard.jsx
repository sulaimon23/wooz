import React, { Component, useState, select, Switch } from 'react';
import { Jumbotron, Container, Row, Col, Image, Button, ButtonGroup, Card, InputGroup, Form, FormControl, FormCheck } from 'react-bootstrap';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

function CableTvConfirmationCard() {

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
                    <span style={{color: '#043f7c'}}><b style={{float: 'left'}}>CableTv Details</b> <span style={{float: 'right'}}>Edit &nbsp; <i className="fa fa-pencil"></i></span></span>
                    <br/>
                    <hr style={{color: '#043f7c', borderTop: '1px dashed'}}/>
                    <Row>
                        <Col md={6}>
                            <p style={{float: 'left'}}><b>TV Operator:</b> </p>
                        </Col>
                        <Col md={6}>
                            <p style={{float: 'right'}}>DSTv </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <p style={{float: 'left'}}><b>Smart Card Number:</b> </p>
                        </Col>
                        <Col md={6}>
                            <p style={{float: 'right'}}>123456789098765432 </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <p style={{float: 'left'}}><b>Preferred Package:</b> </p>
                        </Col>
                        <Col md={6}>
                            <p style={{float: 'right'}}>&#8358;2000 = Dstv Yanga Bouquet E36</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <p style={{float: 'left'}}><b>Phone Number:</b> </p>
                        </Col>
                        <Col md={6}><p>07060460216 </p>
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

export default CableTvConfirmationCard;
