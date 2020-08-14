import React, { Component, useState } from 'react';
import { Jumbotron, Container, Row, Col, Image, Button, ButtonGroup, Card, InputGroup, Form, FormControl, FormCheck, Nav } from 'react-bootstrap';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import DatePicker from '../../Calendar'
import DataMultiStepper from '../../MultiStepper/DataMultiStepper'

class BuyDataFormSection extends Component {
    render() {
        return (
            <div>
                <Container style={{marginTop: '-107px', width: '1115px' }}>
                    <DataMultiStepper />
                </Container>
            </div>
        );
    }
}

export default BuyDataFormSection;
