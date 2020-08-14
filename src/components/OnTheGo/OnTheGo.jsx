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
                {/* <Container className='' style={{ maxWidth: '100%'}}></Container> */}
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
