import React, { Component } from 'react';
import { Jumbotron, Container, Row, Col, Image, Breadcrumb, Button, Card } from 'react-bootstrap';
import AboutSection from '../AboutSection/AboutSections';
import ButtonGroup from '../ButtonGroup/ButtonGroups'
import FormCardSection from '../FormCardSection/FormCardSections'
import FlightSearchTabFormSection from '../SearchTabFormSection/FlightSearchTabFormSections';
// import BannerSection from '../BannerSection/BannerSections';
// import InsuranceThumbnailSection from '../InsuranceThumbnailSection/InsuranceThumbnailSections'
import FlightSearchMultiStepper from '../MultiStepper/FlightSearchMultiStepper'
// import FormCardSection from '../FormCardSection/FormCardSections'

class FlightSearch2 extends Component {
    render() {
        return (
            <div>
                <Container className='' style={{ maxWidth: '100%'}}>
                    <p></p>
                    {/* <Col lg={12}>
                        <p> <span style={{color: '#707070'}} >Home /</span> <span style={{color: '#707070'}}>Money Matters /</span> <span style={{color: '#707070'}}>Insurance /</span> <b>Motor Insurance</b>  </p>
                        <Breadcrumb className='noBackground'>
                            <Breadcrumb.Item href="/"> Home </Breadcrumb.Item>
                            <Breadcrumb.Item href="/onthego"> On The Go </Breadcrumb.Item>
                            <Breadcrumb.Item active href='/onthego/flightsearch'> Flight Search </Breadcrumb.Item>
                        </Breadcrumb>
                    </Col> */}
                </Container>
                {/* <br/>
                <br/>
                <br/>
                <br/> */}
                {/* <FlightSearchTabFormSection /> */}
                {/* <Col sm={2} className='mb-4' stylexx={{marginTop: '117px'}} className='mb-4'>
                    <Button href='/' style={{ borderRadius: '20px', fontSize: '12px' }} variant="dark"><i className="fa fa-arrow-left"></i> &nbsp; Back</Button>
                </Col> */}
                <FlightSearchMultiStepper />
                <br/>
                {/* <FormCardSection /> */}
                
                
                {/* <BannerSection />
                <InsuranceThumbnailSection /> */}
            </div>
        );
    }
}

export default FlightSearch2;