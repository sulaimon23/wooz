import React, { Component } from 'react';
import { Jumbotron, Modal, Container, Row, Col, Image, Breadcrumb, Button, Card } from 'react-bootstrap';
import bannerimage from '../../assets/img/bannerimg/insurance.jpg'
import play from '../../assets/img/icons/playbutton.png'
import YouTube from 'react-youtube';

function MyVerticallyCenteredModal(props) {
    return (
        <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        
        {/* <iframe width="100%" height="478" src="https://www.youtube.com/embed/m8n2o3Qx504?autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
        <iframe width="100%" height="478" src="https://www.youtube.com/embed/s1q3ALqm2mg?autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </Modal>
    );
  }

function OnTheGoBanner() {
    // render() {
        const [modalShow, setModalShow] = React.useState(false);
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
                            <Col md={9}>
                                <br/>
                                <br/>
                                <br/>
                                <h2 style={{ fontWeight: '500px', marginLeft: '-20px'}}>Flights, Buses, Trucks, Ferries &amp; Trains - All in One Search</h2>
                                
                                
                                <br/>
                                <br/>
                                <br/>
                                <br/>
                                {/* <br/>
                                <br/> */}
                            </Col>
                            <Col md={3}>
                                {/* <br/>
                                <br/> */}
                                <br/>
                                <br/>
                                <img onClick={() => setModalShow(true)} src={play} alt=""/>
                                <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
                                {/* <br/>
                                <br/>
                                <br/>
                                <br/>
                                <br/>
                                <br/> */}
                            </Col>
                        </Row>
                    </Col>
                </Container>
            </div>
        );
    }
// }

export default OnTheGoBanner;