import React, { Component } from 'react';
import { Jumbotron, Container, Row, Col, Image, Breadcrumb, Button, Card } from 'react-bootstrap';
import OnTheGoBanner from '../OnTheGo/OnTheGoBanner';
import FinancialThumbnailSection from '../FinancialThumbnailSection/FinancialThumbnailSections'
import DealsSection from '../DealsSection/DealsSections'
import OnTheGoTab from '../OnTheGoTab/OnTheGoTabs';

class OnTheGo extends Component {
    render() {
        return (
            <div>
                <Container className='' style={{ maxWidth: '100%'}}>
                    {/* <p></p>
                    <Col lg={12}>
                        <Breadcrumb style={{backgroundColor: 'white'}}>
                            <Breadcrumb.Item href="/"> Home </Breadcrumb.Item>
                            <Breadcrumb.Item active href="/OnTheGo"> On The Go </Breadcrumb.Item>
                        </Breadcrumb>
                    </Col> */}
                </Container>
                <OnTheGoBanner />
                <OnTheGoTab />
                <br/>
                <DealsSection />
                <br/>
                <DealsSection />
                {/* <FinancialThumbnailSection /> */}
            </div>
        );
    }
}

export default OnTheGo;
