import React, { Component } from 'react';
import { Jumbotron, Container, Row, Col, Image, Button, ButtonGroup, Badge, Card, CardDeck, View, Stylesheet } from 'react-bootstrap';
import cardimg11 from '../../assets/img/cardimg/11.jpg'
import cardimg12 from '../../assets/img/cardimg/12.jpg'
import cardimg13 from '../../assets/img/cardimg/13.jpg'
import cardimg4 from '../../assets/img/cardimg/4.jpg'
import cardimg14 from '../../assets/img/cardimg/14.jpg'
// import slider3 from '../../assets/img/slider/3.jpg'

class FlashSalesSections extends Component {
    render() {
        return (
            <div>
                <Container className='' style={{ maxWidth: '100%'}}>
                    <Col lg={12}>
                        <p>Flash Sales <Badge variant="success">New</Badge></p>
                        <hr/>
                        <CardDeck>
                            <Card style={{height: '-webkit-min-content', boxShadow: '7px 3px 10px #e1e1e1', border: 'none'}}>
                                <Card.Img variant="top" src={cardimg11} />
                                <Card.Body>
                                    <Card.Title><h6>On The Go</h6></Card.Title>
                                    <Card.Text>
                                        <h6><b>&#8358;291,000.00</b></h6>
                                    </Card.Text>
                                </Card.Body>
                                <Row>
                                    <Col sm='6'>
                                        <Card.Footer style={{textAlign: 'center', marginRight: '-30px'}}>
                                            <small style={{Color: 'white'}}>View Details</small>
                                        </Card.Footer>
                                    </Col>
                                    <Col sm='6'>
                                        <Card.Footer style={{textAlign: 'center', backgroundColor: 'red', borderRadius: '0px'}}>
                                            <small style={{ color: 'white' }}>Book Now</small>
                                        </Card.Footer>
                                    </Col>
                                </Row>
                            </Card>
                            <Card style={{height: '-webkit-min-content', boxShadow: '7px 3px 10px #e1e1e1', border: 'none'}}>
                                <Card.Img variant="top" src={cardimg12} />
                                <Card.Body>
                                    <Card.Title><h6>Click &amp; Shop</h6></Card.Title>
                                    <Card.Text>
                                        <p style={{fontSize: '13px'}}>Inverter Battery 12V/200Ah</p>
                                        <h6><b>&#8358;100,000.00</b></h6>
                                    </Card.Text>
                                </Card.Body>
                                <Row>
                                    <Col sm='6'>
                                        <Card.Footer style={{textAlign: 'center', marginRight: '-30px'}}>
                                            <small style={{Color: 'white'}}>View Details</small>
                                        </Card.Footer>
                                    </Col>
                                    <Col sm='6'>
                                        <Card.Footer style={{textAlign: 'center', backgroundColor: 'red', borderRadius: '0px'}}>
                                            <small style={{ color: 'white' }}>Buy Now</small>
                                        </Card.Footer>
                                    </Col>
                                </Row>
                            </Card>
                            <Card style={{height: '-webkit-min-content', boxShadow: '7px 3px 10px #e1e1e1', border: 'none'}}>
                                <Card.Img variant="top" src={cardimg13} />
                                <Card.Body>
                                    <Card.Title><h6>Utilities</h6></Card.Title>
                                    <Card.Text>
                                        <p style={{fontSize: '13px'}}>DSTV Family Plan (Valid For 30days)</p>
                                        <h6><b>&#8358;291,000.00</b></h6>
                                    </Card.Text>
                                </Card.Body>
                                <Row>
                                    <Col sm='6'>
                                        <Card.Footer style={{textAlign: 'center', marginRight: '-30px'}}>
                                            <small style={{Color: 'white'}}>View Details</small>
                                        </Card.Footer>
                                    </Col>
                                    <Col sm='6'>
                                        <Card.Footer style={{textAlign: 'center', backgroundColor: 'red', borderRadius: '0px'}}>
                                            <small style={{ color: 'white' }}>Activate Now</small>
                                        </Card.Footer>
                                    </Col>
                                </Row>
                            </Card>
                            <Card style={{height: '-webkit-min-content', boxShadow: '7px 3px 10px #e1e1e1', border: 'none'}}>
                                <Card.Img variant="top" src={cardimg4} />
                                <Card.Body>
                                    <Card.Title><h6>Money Matters</h6></Card.Title>
                                    <Card.Text>
                                        <p style={{fontSize: '13px'}}>2% Interest Rate Monthly</p>
                                        <h6><b>&#8358;10,000.00</b> - <b>&#8358;200,000.00</b></h6>
                                    </Card.Text>
                                </Card.Body>
                                <Row>
                                    <Col sm='6'>
                                        <Card.Footer style={{textAlign: 'center', marginRight: '-30px'}}>
                                            <small style={{Color: 'white'}}>View Details</small>
                                        </Card.Footer>
                                    </Col>
                                    <Col sm='6'>
                                        <Card.Footer style={{textAlign: 'center', backgroundColor: 'red', borderRadius: '0px'}}>
                                            <small style={{ color: 'white' }}>Apply Now</small>
                                        </Card.Footer>
                                    </Col>
                                </Row>
                            </Card>
                            <Card style={{height: '-webkit-min-content', boxShadow: '7px 3px 10px #e1e1e1', border: 'none'}}>
                                <Card.Img variant="top" src={cardimg14} />
                                <Card.Body>
                                    <Card.Title><h6>Ask A Doc</h6></Card.Title>
                                    <Card.Text>
                                        <p style={{fontSize: '13px'}}>Consultancy Valid For 30days </p>
                                        <h6><b>&#8358;21,000.00</b></h6>
                                    </Card.Text>
                                </Card.Body>
                                <Row>
                                    <Col sm='6'>
                                        <Card.Footer style={{textAlign: 'center', marginRight: '-30px'}}>
                                            <small style={{Color: 'white'}}>View Details</small>
                                        </Card.Footer>
                                    </Col>
                                    <Col sm='6'>
                                        <Card.Footer style={{textAlign: 'center', backgroundColor: 'red', borderRadius: '0px'}}>
                                            <small style={{ color: 'white' }}>Buy Now</small>
                                        </Card.Footer>
                                    </Col>
                                </Row>
                            </Card>
                        </CardDeck>
                    </Col>
                </Container>
            </div>
        );
    }
}

export default FlashSalesSections;