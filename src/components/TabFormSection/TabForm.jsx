import React, { useState, Sonnet } from 'react'
import { Col, Image, Button, ButtonGroup, Card, InputGroup, Form, FormControl, FormCheck, Nav, TabContent } from 'react-bootstrap';
// import {render} from 'react-dom';
import { Tabs, Tab } from 'react-bootstrap';
import img from '../../assets/img/icons/home/charity.png'
import './TabFormSections.css'


const divStyle = {
    color: 'white',
}

function TabForm() {
    const [key, setKey] = useState('motorinsurance');

    const [validated, setValidated] = useState(false);
    
    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        // handleSubmit = (e) => {
        //     e.preventDefault();
        //    this.props.history.push('/motorinsurance')
        // }

    setValidated(true);
    };

    // onSubmitHandler = (e) => {
    //     e.preventDefault();
    //     this.setState({
    //       showName: true
    //     });
    //     window.location.href = "someurl/somepage?var1="+this.state.var1+"&var2="+this.state.var2 + "......";
    // }

    // handleSubmit = (e) => {
    //     e.preventDefault();
    //    this.props.history.push('/moneymatters/insurance/motorinsurance')
    // }
  
    return (
        // <Tabs id='controlled-tab-example' activeKey={key} onSelect={(k) => setKey(k)} >
        <Card>
            <Card.Body style={{marginTop: '-63px'}}>
                <Tabs style={{backgroundColor: '#043f7c', width: '834px', marginLeft: '-20px', borderTopLeftRadius: '5px', borderTopRightRadius: '5px'}} defaultActiveKey="motorinsurance" transition={false} id="noanim-tab-example">
                    <Tab style={{divStyle}} src={img} eventKey='travelinsurance' title='Travel Insurance'>
                        <br/>
                        <br/>
                        <Form noValidate validated={validated} onSubmit={handleSubmit}>
                            <Form.Row>
                                <Form.Group as={Col} md="2" controlId="validationCustom01">
                                    {/* <Form.Label>First name <span style={{color: 'red'}}>*</span></Form.Label> */}
                                    <Form.Control as="select">
                                        <option>Cover Type</option>
                                        <option>Abia</option>
                                        <option>Adamawa</option>
                                        <option>Akwa Ibom</option>
                                        <option>Anambra</option>
                                        <option>Bauchi</option>
                                        <option>Bayelsa</option>
                                        <option>Benue</option>
                                        <option>Borno</option>
                                        <option>Cross River</option>
                                    </Form.Control>
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} md="3" controlId="validationCustom02">
                                    {/* <Form.Label>Last name <span style={{color: 'red'}}>*</span></Form.Label> */}
                                    <Form.Control as="select">
                                        <option>Vehicle Category</option>
                                        <option>Abia</option>
                                        <option>Adamawa</option>
                                        <option>Akwa Ibom</option>
                                        <option>Anambra</option>
                                        <option>Bauchi</option>
                                        <option>Bayelsa</option>
                                        <option>Benue</option>
                                        <option>Borno</option>
                                        <option>Cross River</option>
                                    </Form.Control>
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} md="3" controlId="validationCustom02">
                                    {/* <Form.Label>Middle name <span style={{color: 'red'}}>*</span></Form.Label> */}
                                    <Form.Control as="select">
                                        <option>Vehicle Make</option>
                                        <option>Abia</option>
                                        <option>Adamawa</option>
                                        <option>Akwa Ibom</option>
                                        <option>Anambra</option>
                                        <option>Bauchi</option>
                                        <option>Bayelsa</option>
                                        <option>Benue</option>
                                        <option>Borno</option>
                                        <option>Cross River</option>
                                    </Form.Control>
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                                
                                <Form.Group as={Col} md="2" controlId="validationCustom02">
                                    {/* <Form.Label>Email Address <span style={{color: 'red'}}>*</span></Form.Label> */}
                                    <Form.Control as="select">
                                        <option>Vehicle Model</option>
                                        <option>Abia</option>
                                        <option>Adamawa</option>
                                        <option>Akwa Ibom</option>
                                        <option>Anambra</option>
                                        <option>Bauchi</option>
                                        <option>Bayelsa</option>
                                        <option>Benue</option>
                                        <option>Borno</option>
                                        <option>Cross River</option>
                                    </Form.Control>
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} md="2" controlId="validationCustom02">
                                    {/* <Form.Label>Residential Address <span style={{color: 'red'}}>*</span></Form.Label> */}
                                    <Form.Control as="select">
                                        <option>Vehicle Body Type</option>
                                        <option>Abia</option>
                                        <option>Adamawa</option>
                                        <option>Akwa Ibom</option>
                                        <option>Anambra</option>
                                        <option>Bauchi</option>
                                        <option>Bayelsa</option>
                                        <option>Benue</option>
                                        <option>Borno</option>
                                        <option>Cross River</option>
                                    </Form.Control>
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} md="3" controlId="validationCustom02">
                                    {/* <Form.Label>State <span style={{color: 'red'}}>*</span></Form.Label> */}
                                    <Form.Control as="select">
                                        <option>Year of Make</option>
                                        <option>Abia</option>
                                        <option>Adamawa</option>
                                        <option>Akwa Ibom</option>
                                        <option>Anambra</option>
                                        <option>Bauchi</option>
                                        <option>Bayelsa</option>
                                        <option>Benue</option>
                                        <option>Borno</option>
                                        <option>Cross River</option>
                                    </Form.Control>
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} md="3" controlId="validationCustom02">
                                    {/* <Form.Label>State <span style={{color: 'red'}}>*</span></Form.Label> */}
                                    <Form.Control as="select">
                                        <option>Period of Cover</option>
                                        <option>Abia</option>
                                        <option>Adamawa</option>
                                        <option>Akwa Ibom</option>
                                        <option>Anambra</option>
                                        <option>Bauchi</option>
                                        <option>Bayelsa</option>
                                        <option>Benue</option>
                                        <option>Borno</option>
                                        <option>Cross River</option>
                                    </Form.Control>
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} md="2" controlId="validationCustom02">
                                    {/* <Form.Label>State <span style={{color: 'red'}}>*</span></Form.Label> */}
                                    <Form.Control as="select">
                                        <option>Vehicle Estimated Value</option>
                                        <option>Abia</option>
                                        <option>Adamawa</option>
                                        <option>Akwa Ibom</option>
                                        <option>Anambra</option>
                                        <option>Bauchi</option>
                                        <option>Bayelsa</option>
                                        <option>Benue</option>
                                        <option>Borno</option>
                                        <option>Cross River</option>
                                    </Form.Control>
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} md="2">
                                    <Button variant='danger' style={{width: '100%'}} type="submit"> Search </Button>
                                </Form.Group>
                            </Form.Row>
                        </Form>
                    </Tab>
                    <Tab eventKey='motorinsurance' title='Motor Insurance'>
                        <br/>
                        <br/>
                        <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        {/* <Form eventKey='#motorinsurance' noValidate validated={validated} onSubmit={handleSubmit}> */}
                            <Form.Row>
                                <Form.Group as={Col} md="2" controlId="validationCustom01">
                                    {/* <Form.Label>First name <span style={{color: 'red'}}>*</span></Form.Label> */}
                                    <Form.Control as="select">
                                        <option>Cover Type</option>
                                        <option>Abia</option>
                                        <option>Adamawa</option>
                                        <option>Akwa Ibom</option>
                                        <option>Anambra</option>
                                        <option>Bauchi</option>
                                        <option>Bayelsa</option>
                                        <option>Benue</option>
                                        <option>Borno</option>
                                        <option>Cross River</option>
                                    </Form.Control>
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} md="3" controlId="validationCustom02">
                                    {/* <Form.Label>Last name <span style={{color: 'red'}}>*</span></Form.Label> */}
                                    <Form.Control as="select">
                                        <option>Vehicle Category</option>
                                        <option>Abia</option>
                                        <option>Adamawa</option>
                                        <option>Akwa Ibom</option>
                                        <option>Anambra</option>
                                        <option>Bauchi</option>
                                        <option>Bayelsa</option>
                                        <option>Benue</option>
                                        <option>Borno</option>
                                        <option>Cross River</option>
                                    </Form.Control>
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} md="3" controlId="validationCustom02">
                                    {/* <Form.Label>Middle name <span style={{color: 'red'}}>*</span></Form.Label> */}
                                    <Form.Control as="select">
                                        <option>Vehicle Make</option>
                                        <option>Abia</option>
                                        <option>Adamawa</option>
                                        <option>Akwa Ibom</option>
                                        <option>Anambra</option>
                                        <option>Bauchi</option>
                                        <option>Bayelsa</option>
                                        <option>Benue</option>
                                        <option>Borno</option>
                                        <option>Cross River</option>
                                    </Form.Control>
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                                
                                <Form.Group as={Col} md="2" controlId="validationCustom02">
                                    {/* <Form.Label>Email Address <span style={{color: 'red'}}>*</span></Form.Label> */}
                                    <Form.Control as="select">
                                        <option>Vehicle Model</option>
                                        <option>Abia</option>
                                        <option>Adamawa</option>
                                        <option>Akwa Ibom</option>
                                        <option>Anambra</option>
                                        <option>Bauchi</option>
                                        <option>Bayelsa</option>
                                        <option>Benue</option>
                                        <option>Borno</option>
                                        <option>Cross River</option>
                                    </Form.Control>
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} md="2" controlId="validationCustom02">
                                    {/* <Form.Label>Residential Address <span style={{color: 'red'}}>*</span></Form.Label> */}
                                    <Form.Control as="select">
                                        <option>Vehicle Body Type</option>
                                        <option>Abia</option>
                                        <option>Adamawa</option>
                                        <option>Akwa Ibom</option>
                                        <option>Anambra</option>
                                        <option>Bauchi</option>
                                        <option>Bayelsa</option>
                                        <option>Benue</option>
                                        <option>Borno</option>
                                        <option>Cross River</option>
                                    </Form.Control>
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} md="3" controlId="validationCustom02">
                                    {/* <Form.Label>State <span style={{color: 'red'}}>*</span></Form.Label> */}
                                    <Form.Control as="select">
                                        <option>Year of Make</option>
                                        <option>Abia</option>
                                        <option>Adamawa</option>
                                        <option>Akwa Ibom</option>
                                        <option>Anambra</option>
                                        <option>Bauchi</option>
                                        <option>Bayelsa</option>
                                        <option>Benue</option>
                                        <option>Borno</option>
                                        <option>Cross River</option>
                                    </Form.Control>
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} md="3" controlId="validationCustom02">
                                    {/* <Form.Label>State <span style={{color: 'red'}}>*</span></Form.Label> */}
                                    <Form.Control as="select">
                                        <option>Period of Cover</option>
                                        <option>Abia</option>
                                        <option>Adamawa</option>
                                        <option>Akwa Ibom</option>
                                        <option>Anambra</option>
                                        <option>Bauchi</option>
                                        <option>Bayelsa</option>
                                        <option>Benue</option>
                                        <option>Borno</option>
                                        <option>Cross River</option>
                                    </Form.Control>
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} md="2" controlId="validationCustom02">
                                    {/* <Form.Label>State <span style={{color: 'red'}}>*</span></Form.Label> */}
                                    <Form.Control as="select">
                                        <option>Vehicle Estimated Value</option>
                                        <option>Abia</option>
                                        <option>Adamawa</option>
                                        <option>Akwa Ibom</option>
                                        <option>Anambra</option>
                                        <option>Bauchi</option>
                                        <option>Bayelsa</option>
                                        <option>Benue</option>
                                        <option>Borno</option>
                                        <option>Cross River</option>
                                    </Form.Control>
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} md="2">
                                    <Button href='/moneymatters/insurance/motorinsurance' variant='danger' style={{width: '100%'}} type="submit"> Search </Button>
                                </Form.Group>
                            </Form.Row>
                        </Form>
                    </Tab>
                    <Tab eventKey='lifeinsurance' title='Life Insurance'>
                        <br/>
                        <br/>
                        <Form noValidate validated={validated} onSubmit={handleSubmit}>
                            <Form.Row>
                                <Form.Group as={Col} md="" controlId="validationCustom01">
                                    {/* <Form.Label>First name <span style={{color: 'red'}}>*</span></Form.Label> */}
                                    <Form.Control as="select">
                                        <option>Cover Type</option>
                                        <option>Abia</option>
                                        <option>Adamawa</option>
                                        <option>Akwa Ibom</option>
                                        <option>Anambra</option>
                                        <option>Bauchi</option>
                                        <option>Bayelsa</option>
                                        <option>Benue</option>
                                        <option>Borno</option>
                                        <option>Cross River</option>
                                    </Form.Control>
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} md="3" controlId="validationCustom02">
                                    {/* <Form.Label>Last name <span style={{color: 'red'}}>*</span></Form.Label> */}
                                    <Form.Control as="select">
                                        <option>Vehicle Category</option>
                                        <option>Abia</option>
                                        <option>Adamawa</option>
                                        <option>Akwa Ibom</option>
                                        <option>Anambra</option>
                                        <option>Bauchi</option>
                                        <option>Bayelsa</option>
                                        <option>Benue</option>
                                        <option>Borno</option>
                                        <option>Cross River</option>
                                    </Form.Control>
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} md="3" controlId="validationCustom02">
                                    {/* <Form.Label>Middle name <span style={{color: 'red'}}>*</span></Form.Label> */}
                                    <Form.Control as="select">
                                        <option>Vehicle Make</option>
                                        <option>Abia</option>
                                        <option>Adamawa</option>
                                        <option>Akwa Ibom</option>
                                        <option>Anambra</option>
                                        <option>Bauchi</option>
                                        <option>Bayelsa</option>
                                        <option>Benue</option>
                                        <option>Borno</option>
                                        <option>Cross River</option>
                                    </Form.Control>
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                                
                                <Form.Group as={Col} md="3" controlId="validationCustom02">
                                    {/* <Form.Label>Email Address <span style={{color: 'red'}}>*</span></Form.Label> */}
                                    <Form.Control as="select">
                                        <option>Vehicle Model</option>
                                        <option>Abia</option>
                                        <option>Adamawa</option>
                                        <option>Akwa Ibom</option>
                                        <option>Anambra</option>
                                        <option>Bauchi</option>
                                        <option>Bayelsa</option>
                                        <option>Benue</option>
                                        <option>Borno</option>
                                        <option>Cross River</option>
                                    </Form.Control>
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} md="3" controlId="validationCustom02">
                                    {/* <Form.Label>Residential Address <span style={{color: 'red'}}>*</span></Form.Label> */}
                                    <Form.Control as="select">
                                        <option>Vehicle Body Type</option>
                                        <option>Abia</option>
                                        <option>Adamawa</option>
                                        <option>Akwa Ibom</option>
                                        <option>Anambra</option>
                                        <option>Bauchi</option>
                                        <option>Bayelsa</option>
                                        <option>Benue</option>
                                        <option>Borno</option>
                                        <option>Cross River</option>
                                    </Form.Control>
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} md="3" controlId="validationCustom02">
                                    {/* <Form.Label>State <span style={{color: 'red'}}>*</span></Form.Label> */}
                                    <Form.Control as="select">
                                        <option>Year of Make</option>
                                        <option>Abia</option>
                                        <option>Adamawa</option>
                                        <option>Akwa Ibom</option>
                                        <option>Anambra</option>
                                        <option>Bauchi</option>
                                        <option>Bayelsa</option>
                                        <option>Benue</option>
                                        <option>Borno</option>
                                        <option>Cross River</option>
                                    </Form.Control>
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} md="3" controlId="validationCustom02">
                                    {/* <Form.Label>State <span style={{color: 'red'}}>*</span></Form.Label> */}
                                    <Form.Control as="select">
                                        <option>Period of Cover</option>
                                        <option>Abia</option>
                                        <option>Adamawa</option>
                                        <option>Akwa Ibom</option>
                                        <option>Anambra</option>
                                        <option>Bauchi</option>
                                        <option>Bayelsa</option>
                                        <option>Benue</option>
                                        <option>Borno</option>
                                        <option>Cross River</option>
                                    </Form.Control>
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} md="2" controlId="validationCustom02">
                                    {/* <Form.Label>State <span style={{color: 'red'}}>*</span></Form.Label> */}
                                    <Form.Control as="select">
                                        <option>Vehicle Estimated Value</option>
                                        <option>Abia</option>
                                        <option>Adamawa</option>
                                        <option>Akwa Ibom</option>
                                        <option>Anambra</option>
                                        <option>Bauchi</option>
                                        <option>Bayelsa</option>
                                        <option>Benue</option>
                                        <option>Borno</option>
                                        <option>Cross River</option>
                                    </Form.Control>
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} md="1">
                                    <Button variant='danger' style={{width: '100%'}} type="submit"> Search </Button>
                                </Form.Group>
                            </Form.Row>
                        </Form>
                    </Tab>
                </Tabs>
            </Card.Body>
        </Card>
    )
}
  
// render (<TabForm />);

export default TabForm