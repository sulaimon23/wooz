

import React, { Component } from 'react';
import { Jumbotron, Container, Row, Col, Image, Button, Card } from 'react-bootstrap';
import bagimg from '../../assets/img/icons/bag.png'
import Switch from 'react-switch'

class BaggageCard extends Component {
    constructor() {
        super();
        this.state = { checked: false };
        this.handleChange = this.handleChange.bind(this);
    }
     
    handleChange(checked) {
        this.setState({ checked });
    }
    render() {
        return (
            <div>
                <Card>
                    <div style={{ backgroundColor: '#ffffff', padding: '20px'}}>
                        <p style={{color: '#389aff'}}> <b>Baggage</b> </p>
                        <hr style={{color: '#389aff'}}/>
                        <Card body style={{marginLeft: '-20px', marginRight: '-20px', borderRadius: 'initial', border: 'none'}} >
                            <Row >
                                <Col md='11'>
                                    <span style={{fontSize: '13.4px'}}>Save up to 50% by adding your bag(s) now, not at the airport</span>
                                </Col>
                                <Col md='1'>
                                    <Switch onChange={this.handleChange} checked={this.state.checked} />
                                </Col>
                            </Row>
                        </Card>
                        <Card body style={{backgroundColor: 'rgba(1, 188, 246, 0.11)', marginLeft: '-20px', marginRight: '-20px', borderRadius: 'initial', border: 'none'}} >
                            <Row >
                                <Col md='12'>
                                    <Image src={bagimg} alt=""/><span style={{fontSize: '13.4px'}}>&nbsp;&nbsp;You are allowed <b style={{color: '#00C89E'}}>1 cabin bag (56 x 45 x 25cm)</b> </span>
                                </Col>
                            </Row>
                        </Card>
                        <br/>
                        <p>Checked bag (15kg)<br/> <span style={{color: 'red', fontSize: '20px'}}><b>+ &#8358;6,500</b> </span> </p>
                        <p>Checked bag (15kg)<br/> <span style={{color: 'red', fontSize: '20px'}}><b>+ &#8358;6,500</b> </span> </p>
                    </div>
                </Card>
            </div>
        );
    }
}

export default BaggageCard;
