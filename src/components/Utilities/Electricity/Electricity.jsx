import React, { Component } from 'react';
import { Jumbotron, Container, Row, Col, Image, Breadcrumb, Button, Card } from 'react-bootstrap';
import BuyElectricityFormSection from './BuyElectricityFormSection';

class Electricity extends Component {
    render() {
        return (
            <div>
                <Container className='' style={{ maxWidth: '100%'}}>
                    <p></p>
                    <Col lg={12}>
                        <Breadcrumb style={{backgroundColor: 'white'}}>
                            <Breadcrumb.Item href="/"> Home </Breadcrumb.Item>
                            <Breadcrumb.Item href="/utilities"> Utilities </Breadcrumb.Item>
                            <Breadcrumb.Item active href="/utilities/Electricity"> Electricity </Breadcrumb.Item>
                        </Breadcrumb>
                    </Col>
                </Container>
                <br/>
                <br/>
                <br/>
                <br/>
                <BuyElectricityFormSection />
            </div>
        );
    }
}

export default Electricity;