import React, { Component } from 'react';
import { Jumbotron, Container, Row, Col, Image, Breadcrumb, Button, Card } from 'react-bootstrap';
import AboutSection from '../AboutSection/AboutSections';
import ButtonGroup from '../ButtonGroup/ButtonGroups'
import FormCardSection from '../FormCardSection/FormCardSections'
import SearchTabFormSection from '../SearchTabFormSection/SearchTabFormSections';
// import BannerSection from '../BannerSection/BannerSections';
// import InsuranceThumbnailSection from '../InsuranceThumbnailSection/InsuranceThumbnailSections'

class MotorInsurance extends Component {
    render() {
        return (
            <div>
                <Container className='' style={{ maxWidth: '100%'}}>
                    <p></p>
                    <Col lg={12}>
                        {/* <p> <span style={{color: '#707070'}} >Home /</span> <span style={{color: '#707070'}}>Money Matters /</span> <span style={{color: '#707070'}}>Insurance /</span> <b>Motor Insurance</b>  </p> */}
                        <Breadcrumb className='noBackground'>
                            <Breadcrumb.Item href="/"> Home </Breadcrumb.Item>
                            <Breadcrumb.Item href="/moneymatters"> Money Matters </Breadcrumb.Item>
                            <Breadcrumb.Item href='/moneymatters/insurance'> Insurance </Breadcrumb.Item>
                            <Breadcrumb.Item active> Motor Insurance </Breadcrumb.Item>
                        </Breadcrumb>
                    </Col>
                    
                    {/* <br/> */}
                    {/* <ButtonGroup /> */}
                </Container>
                <br/>
                <br/>
                <br/>
                <br/>
                <SearchTabFormSection />
                <br/>
                {/* <FormCardSection /> */}
                
                
                {/* <BannerSection />
                <InsuranceThumbnailSection /> */}
            </div>
        );
    }
}

export default MotorInsurance;