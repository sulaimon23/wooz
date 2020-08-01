import React, { Component } from 'react';
import { Jumbotron, Container, Row, Col, Image, Button, Card } from 'react-bootstrap';
import slider2 from '../../assets/img/slider/2.jpg'
import slider3 from '../../assets/img/slider/3.jpg'

class SliderCardSections extends Component {
    render() {
        return (
            <div>
                {/* <img src={slider2} style={{width: '100px'}} alt=""/> */}
                <Col md={12}>
                    <Card xxclassName='mb-4' style={{ marginBottom: '21px' }}>
                        <Card.Img  src={slider2} />
                    </Card>
                    {/* <br/> */}
                    <Card xxstyle={{ width: '18rem' }}>
                        <Card.Img  src={slider3} />
                    </Card>
                </Col>
            </div>
        );
    }
}

export default SliderCardSections;