import React, { Component } from 'react';
import { Jumbotron, Container, Row, Col, Image, Breadcrumb, Button, Card } from 'react-bootstrap';
import BuyCableTvFormSection from './BuyCableTvFormSection';

class CableTv extends Component {
    render() {
        return (
            <div>
                <Container className='' style={{ maxWidth: '100%'}}>
                    <p></p>
                    <Col lg={12}>
                        <Breadcrumb style={{backgroundColor: 'white'}}>
                            <Breadcrumb.Item href="/"> Home </Breadcrumb.Item>
                            <Breadcrumb.Item href="/utilities"> Utilities </Breadcrumb.Item>
                            <Breadcrumb.Item active href="/utilities/CableTv"> CableTv </Breadcrumb.Item>
                        </Breadcrumb>
                    </Col>
                </Container>
                <br/>
                <br/>
                <br/>
                <br/>
                <BuyCableTvFormSection />
            </div>
        );
    }
}

export default CableTv;