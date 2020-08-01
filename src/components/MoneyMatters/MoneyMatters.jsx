import React, { Component } from 'react';
import { Jumbotron, Container, Row, Col, Image, Breadcrumb, Button, Card } from 'react-bootstrap';
import BannerSectionFinancialServices from '../BannerSectionFinancialServices/BannerSectionFinancialServicess';
import FinancialThumbnailSection from '../FinancialThumbnailSection/FinancialThumbnailSections'

class MoneyMatters extends Component {
    render() {
        return (
            <div>
                <Container className='' style={{ maxWidth: '100%'}}>
                    <p></p>
                    <Col lg={12}>
                        <Breadcrumb style={{backgroundColor: 'white'}}>
                            <Breadcrumb.Item href="/"> Home </Breadcrumb.Item>
                            <Breadcrumb.Item active href="/moneymatters"> Money Matters </Breadcrumb.Item>
                        </Breadcrumb>
                        {/* <p> <span style={{color: '#707070'}} >Home /</span> <b>Money Matters</b> </p> */}
                    </Col>
                </Container>
                <BannerSectionFinancialServices />
                <FinancialThumbnailSection />
            </div>
        );
    }
}

export default MoneyMatters;
