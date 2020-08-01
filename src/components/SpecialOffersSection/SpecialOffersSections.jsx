import React, { Component } from 'react';
import { Jumbotron, Container, Row, Col, Image, Button, ButtonGroup, Badge, Card, CardDeck, View, Stylesheet } from 'react-bootstrap';
import cardimg6 from '../../assets/img/cardimg/6.jpg'
import cardimg7 from '../../assets/img/cardimg/7.jpg'
import cardimg8 from '../../assets/img/cardimg/8.jpg'
import cardimg9 from '../../assets/img/cardimg/9.jpg'
import cardimg10 from '../../assets/img/cardimg/10.jpg'
// import slider3 from '../../assets/img/slider/3.jpg'

class SpecialOffersSections extends Component {
    render() {
        return (
            <div>
                <Container className='' style={{ maxWidth: '100%'}}>
                    <Col lg={12}>
                        <p>Special Offers <Badge variant="success">Offer</Badge></p>
                        <hr/>
                        <CardDeck>
                            <Card style={{height: '-webkit-min-content', boxShadow: '7px 3px 10px #e1e1e1', border: 'none'}}>
                                <Card.Img variant="top" src={cardimg6} />
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
                                <Card.Img variant="top" src={cardimg7} />
                                <Card.Body>
                                    <Card.Title><h6>Click &amp; Shop</h6></Card.Title>
                                    <Card.Text>
                                        <p style={{fontSize: '13px'}}>Hisense 20-Litre Microwave MOWH</p>
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
                                            <small style={{ color: 'white' }}>Buy Now</small>
                                        </Card.Footer>
                                    </Col>
                                </Row>
                            </Card>
                            <Card style={{height: '-webkit-min-content', boxShadow: '7px 3px 10px #e1e1e1', border: 'none'}}>
                                <Card.Img variant="top" src={cardimg8} />
                                <Card.Body>
                                    <Card.Title><h6>Click &amp; Play</h6></Card.Title>
                                    <Card.Text>
                                        <p style={{fontSize: '13px'}}>Real Madrid Vs Barcelona</p>
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
                                            <small style={{ color: 'white' }}>Bet Now</small>
                                        </Card.Footer>
                                    </Col>
                                </Row>
                            </Card>
                            <Card style={{height: '-webkit-min-content', boxShadow: '7px 3px 10px #e1e1e1', border: 'none'}}>
                                <Card.Img variant="top" src={cardimg9} />
                                <Card.Body>
                                    <Card.Title><h6>Utilities</h6></Card.Title>
                                    <Card.Text>
                                        <p style={{fontSize: '13px'}}>2GB Data (Valid For 30days)</p>
                                        <h6><b>&#8358;300.00</b></h6>
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
                                <Card.Img variant="top" src={cardimg10} />
                                <Card.Body>
                                    <Card.Title><h6>Learning</h6></Card.Title>
                                    <Card.Text>
                                        <p style={{fontSize: '13px'}}>Learn a Course</p>
                                        <h6><b>&#8358;10,000.00</b></h6>
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

export default SpecialOffersSections;