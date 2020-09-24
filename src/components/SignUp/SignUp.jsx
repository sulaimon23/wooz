import React, { Component, useState, select, Switch } from 'react';

import {
    Button,
    Row,
    Card,
    CardHeader,
    CardBody,
    Container,
    FormGroup,
    Form,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    // Row,
    Col,
} from 'reactstrap';
import * as Formik from 'formik';
import axios from '../../config/axios';
import { reactLocalStorage } from 'reactjs-localstorage';
import { useHistory } from 'react-router-dom';

import * as Yup from 'yup';
import FooterSection from '../FooterSection/FooterSection';

const SignupSchema = Yup.object().shape({});

function SignUp() {
    const [validated, setValidated] = useState(false);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [accountType, setAccountType] = useState('staff');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [attributes, setAttributes] = useState({ company: 'Google' });

    let history = useHistory();
    
    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);
    };

    const handleSignup = async () => {
        const request_data = {
            firstName,
            phone,
            accountType,
            lastName,
            email,
            password,
            confirmPassword,
            attributes,
        };

        await axios
            .post('/auth/signup', request_data)
            .then((response) => {
                console.log(response);
                history.push('/signin');
            })
            .catch((error) => {
                console.log(error, 'error');
            });
    };

    return (
        <div style={{ backgroundColorx: '#043f7c', backgroundSize: 'cover' }}>
            <Container
                className=""
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    margin: '0 auto',
                    height: '70vh',
                    width: '150vh',
                    // backgroundColor: '#043f7c',
                    // backgroundSize: 'cover',
                    maxWidth: '100%',
                    maxWidth: '100%',
                }}>
                <Col lg="4" md="7">
                    <Card className="bg-light shadow border-0">
                        <CardBody className="px-lg-5 py-lg-5">
                            <div className="text-center text-muted mb-4">
                                <small
                                    style={{
                                        color: '#000000',
                                        fontSize: '15px',
                                    }}>
                                    Sign up with credentials
                                </small>
                            </div>
                            <Form role="form">
                                <FormGroup className="mb-3">
                                    <InputGroup className="input-group-alternative">
                                        <InputGroupAddon addonType="prepend">
                                            <InputGroupText>
                                                <i className="ni ni-hat-3" />
                                            </InputGroupText>
                                        </InputGroupAddon>
                                        <Input
                                            defaultValue={firstName}
                                            onChange={(event) =>
                                                setFirstName(event.target.value)
                                            }
                                            required
                                            placeholder="Firstname"
                                            type="text"
                                            // autoComplete="new-email"
                                        />
                                    </InputGroup>
                                </FormGroup>
                                <FormGroup className="mb-3">
                                    <InputGroup className="input-group-alternative">
                                        <InputGroupAddon addonType="prepend">
                                            <InputGroupText>
                                                <i className="ni ni-hat-3" />
                                            </InputGroupText>
                                        </InputGroupAddon>
                                        <Input
                                            defaultValue={lastName}
                                            onChange={(event) =>
                                                setLastName(event.target.value)
                                            }
                                            required
                                            placeholder="Lastname"
                                            type="text"
                                            // autoComplete="new-email"
                                        />
                                    </InputGroup>
                                </FormGroup>
                                <FormGroup className="mb-3">
                                    <InputGroup className="input-group-alternative">
                                        <InputGroupAddon addonType="prepend">
                                            <InputGroupText>
                                                <i className="ni ni-email-83" />
                                            </InputGroupText>
                                        </InputGroupAddon>
                                        <Input
                                            defaultValue={email}
                                            onChange={(event) =>
                                                setEmail(event.target.value)
                                            }
                                            required
                                            placeholder="Email"
                                            type="email"
                                            autoComplete="new-email"
                                        />
                                    </InputGroup>
                                </FormGroup>
                                <FormGroup>
                                    <InputGroup className="input-group-alternative">
                                        <InputGroupAddon addonType="prepend">
                                            <InputGroupText>
                                                <i className="fa fa-phone" />
                                            </InputGroupText>
                                        </InputGroupAddon>
                                        <Input
                                            onChange={(event) =>
                                                setPhone(event.target.value)
                                            }
                                            defaultValue={password}
                                            required
                                            placeholder="Phone"
                                            type="phone"
                                            autoComplete="new-password"
                                        />
                                    </InputGroup>
                                </FormGroup>
                                <FormGroup>
                                    <InputGroup className="input-group-alternative">
                                        <InputGroupAddon addonType="prepend">
                                            <InputGroupText>
                                                <i className="ni ni-lock-circle-open" />
                                            </InputGroupText>
                                        </InputGroupAddon>
                                        <Input
                                            defaultValue={password}
                                            onChange={(event) =>
                                                setPassword(event.target.value)
                                            }
                                            required
                                            placeholder="Password"
                                            type="password"
                                            autoComplete="new-password"
                                        />
                                    </InputGroup>
                                </FormGroup>
                                <FormGroup>
                                    <InputGroup className="input-group-alternative">
                                        <InputGroupAddon addonType="prepend">
                                            <InputGroupText>
                                                <i className="ni ni-lock-circle-open" />
                                            </InputGroupText>
                                        </InputGroupAddon>
                                        <Input
                                            defaultValue={password}
                                            onChange={(event) =>
                                                setConfirmPassword(
                                                    event.target.value,
                                                )
                                            }
                                            required
                                            placeholder="Confirm Password"
                                            type="password"
                                            autoComplete="new-password"
                                        />
                                    </InputGroup>
                                </FormGroup>
                                {/* <hr className="text-center" style={{width: '100%', margin: '0 auto'}} /> */}
                                <div className="text-center">
                                    <Button
                                        style={{
                                            backgroundColor: '#ff5757',
                                            width: '100%',
                                        }}
                                        // onClick={this.handleLogin}
                                        onClick={handleSignup}
                                        className="my-4"
                                        color="danger"
                                        >
                                        Sign up
                                    </Button>
                                </div>
                            </Form>
                        </CardBody>
                    </Card>
                    <Row className="mt-3">
                        {/* <Col xs="6">
                                <a
                                    className="text-light"
                                    href="#pablo"
                                    onClick={(e) => e.preventDefault()}>
                                    <small style={{color: '#043f7c'}}>Forgot password?</small>
                                </a>
                            </Col> */}
                        <Col classNamex="text-right" xs="6">
                            <a
                                className="text-light"
                                href="/signin"
                                // onClick={(e) => e.preventDefault()}
                            >
                                <small style={{ color: '#043f7c' }}>
                                    Have an account? <b>signin</b>{' '}
                                </small>
                            </a>
                        </Col>
                    </Row>
                </Col>
            </Container>
            <FooterSection />
        </div>
    );
}

export default SignUp;
