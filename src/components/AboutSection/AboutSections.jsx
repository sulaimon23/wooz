import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ReactBootstrapCarousel from "react-bootstrap-carousel";
import { Jumbotron, Container, Row, Col, Image, Button, Card } from 'react-bootstrap';

class AboutSections extends Component {
    render() {
        return (
            <div className=" " style={{ backgroundColor: '#ffffff'}}>
                <Container className='p-4' style={{ maxWidth: '100%'}}>
                    <Col lg={12}>
                        <Row>
                            <Col md={12}>
                                <h5 style={{fontSize: '18px', fontWeight: '500px'}}>Smartshop - The No. 1 Market Place For Smart People</h5>
                                <p style={{ textAlign: 'justify' }}>Smartshop.com is Nigeria’s number one online Shopping destination. We pride ourselves in having everything you could possibly need for life and living at the best prices than anywhere else. Our access to Original Equipment Manufacturers and premium sellers gives us a wide range of products at very low prices. Some of our popular categories include electronics, mobile phones, computers, fashion, beauty products, home and kitchen, Building and construction materials and a whole lot more from premium brands. Some of our other categories include Foodand drinks, automotive and industrial, books, musical equipment, babies and kids items, sports and fitness, to mention a few. To make your shopping experience swift and memorable, thereare also added services like gift vouchers, consumer promotion activities across different categories and bulk purchases with hassle-free delivery. Enjoy free shipping rates for certain products and with the bulk purchase option, you can enjoy low shipping rates, discounted prices and flexible payment. When you shop on our platform, you can pay with your debit card or via Unified Pay, which is a convenient and secured payment solution. Get the best of lifestyle services online. Don't miss out on the biggest sales online which takes place on special dates yearly.</p>
                                <p style={{ textAlign: 'justify' }}>Smartshop.com is Nigeria’s number one online Shopping destination. We pride ourselves in having everything you could possibly need for life and living at the best prices than anywhere else. Our access to Original Equipment Manufacturers and premium sellers gives us a wide range of products at very low prices. Some of our popular categories include electronics, mobile phones, computers, fashion, beauty products, home and kitchen, Building and construction materials and a whole lot more from premium brands. Some of our other categories include </p>
                            </Col>
                        </Row>
                    </Col>
                </Container>
            </div>
        );
    }
}

export default AboutSections;
