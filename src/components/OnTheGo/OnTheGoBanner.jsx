import React, { Component } from 'react';
import { Jumbotron, Container, Row, Col, Image, Breadcrumb, Button, Card } from 'react-bootstrap';
import bannerimage from '../../assets/img/bannerimg/insurance.jpg'

class OnTheGoBanner extends Component {
    render() {
        return (
            <div style={{ backgroundImage: `url(${bannerimage})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', color: 'white' }} >
                <Container className='p-4xx' style={{ maxWidth: '100%',  }}>
                    <br/>
                    <Breadcrumb style={{backgroundColor: 'none! important'}} >
                        <Breadcrumb.Item href="/"> <span style={{color: '#636363'}}> Home </span> </Breadcrumb.Item>
                        <Breadcrumb.Item active href="/onthego"> <span style={{color: '#043f7c'}}>On The Go</span> </Breadcrumb.Item>
                        {/* <Breadcrumb.Item active>Insurance</Breadcrumb.Item> */}
                    </Breadcrumb>
                    <Col lg={12}>
                        <Row>
                            <Col md={12}>
                                <br/>
                                <br/>
                                <br/>
                                <h2 style={{ fontWeight: '500px', marginLeft: '-20px'}}>Flights, Buses, Trucks, Ferries &amp; Trains - All in One Search</h2>
                                <br/>
                                
                                <br/>
                                <br/>
                                <br/>
                                <br/>
                                <br/>
                                <br/>
                            </Col>
                        </Row>
                    </Col>
                </Container>
            </div>
        );
    }
}

export default OnTheGoBanner;