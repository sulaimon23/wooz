import React, { Component } from 'react';
import { Jumbotron, Container, Row, Col, Image, Breadcrumb, Button, Card } from 'react-bootstrap';
import BuyInternetFormSection from './BuyInternetFormSection';

class Internet extends Component {
    render() {
        return (
            <div>
                <Container className='' style={{ maxWidth: '100%'}}>
                    <p></p>
                    <Col lg={12}>
                        <Breadcrumb style={{backgroundColor: 'white'}}>
                            <Breadcrumb.Item href="/"> Home </Breadcrumb.Item>
                            <Breadcrumb.Item href="/utilities"> Utilities </Breadcrumb.Item>
                            <Breadcrumb.Item active href="/utilities/Internet"> Internet </Breadcrumb.Item>
                        </Breadcrumb>
                    </Col>
                </Container>
                <br/>
                <br/>
                <br/>
                <br/>
                <BuyInternetFormSection />
            </div>
        );
    }
}

export default Internet;