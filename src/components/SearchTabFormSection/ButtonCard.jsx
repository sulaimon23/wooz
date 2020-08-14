

import React from 'react';
import { Jumbotron, Container, Row, Col, Image, Button, Card } from 'react-bootstrap';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import FormatAlignLeftIcon from '@material-ui/icons/FormatAlignLeft';
import FormatAlignCenterIcon from '@material-ui/icons/FormatAlignCenter';
import FormatAlignRightIcon from '@material-ui/icons/FormatAlignRight';
import FormatAlignJustifyIcon from '@material-ui/icons/FormatAlignJustify';
import FormatBoldIcon from '@material-ui/icons/FormatBold';
import FormatItalicIcon from '@material-ui/icons/FormatItalic';
import FormatUnderlinedIcon from '@material-ui/icons/FormatUnderlined';
import FormatColorFillIcon from '@material-ui/icons/FormatColorFill';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import cabinbagimg from '../../assets/img/icons/cabinbag.png'
import infoimg from '../../assets/img/icons/info.png'
import airpeaceimg from '../../assets/img/icons/flightbrands/airpeace.png'

const useStyles = makeStyles((theme) => ({
        paper: {
        display: 'flex',
        // border: `1px solid ${theme.palette.divider}`,
        flexWrap: 'wrap',
    },
        divider: {
        margin: theme.spacing(1, 0.5),
    },
}));

const StyledToggleButtonGroup = withStyles((theme) => ({
    grouped: {
        margin: theme.spacing(0.5),
        border: 'none',
            '&:not(:first-child)': {
                borderRadius: theme.shape.borderRadius,
            },
            '&:first-child': {
                borderRadius: theme.shape.borderRadius,
            },
    },
}))(ToggleButtonGroup);

export default function CustomizedDividers() {
    const [alignment, setAlignment] = React.useState('left');
    const [formats, setFormats] = React.useState(() => ['italic']);

    const handleFormat = (event, newFormats) => {
        setFormats(newFormats);
    };

    const handleAlignment = (event, newAlignment) => {
        setAlignment(newAlignment);
    };

    const classes = useStyles();

    return (
        <Card>
            <div style={{ backgroundColor: '#ffffff', padding: '20px'}}>
                <Row>
                    <Col md='11' style={{marginTop: '8px'}}>
                        <p style={{color: '#389aff'}}> <b>Class &amp; Fare</b> </p>
                    </Col>
                    <Col md='1'>
                        <Image style={{backgroundColor: 'white', boxShadow: '0px 0px 5px 0px #ccc'}} width='40px' src={airpeaceimg} alt="" roundedCircle />
                    </Col>
                </Row>
                <hr style={{color: '#389aff'}}/>
                <Paper elevation={0} className={classes.paper}>
                    <StyledToggleButtonGroup  size="small" value={alignment} exclusive onChange={handleAlignment} aria-label="text alignment" >
                        {/* <Col md={12}>
                            <Row>
                                <Col> */}
                                    <ToggleButton className='' value="economy" aria-label="economy aligned" style={{border: '1px solid rgba(0, 0, 0, 0.38)', borderRadius: '10px'}}>
                                        <Card  className="text-left" style={{width: '305px', height: '330px', textTransform: 'none', backgroundColor: 'transparent', border: 'none'}}>
                                            <Card.Body >
                                                <Card.Title>Economy</Card.Title>
                                                <br/>
                                                <span> <Image src={cabinbagimg} alt=""/> Cabin Bag</span>
                                                <br/>
                                                <br/>
                                                <span> <Image src={infoimg} alt=""/> Non Refundable</span>
                                                <br/>
                                                <br/>
                                                <br/>
                                                <br/>
                                                <br/>
                                                <br/>
                                                <br/>
                                                <h4 style={{color: 'grey'}}> &#8358;199,145 </h4>
                                            </Card.Body>
                                        </Card>
                                    </ToggleButton>
                                {/* </Col>
                                <Col> */}
                                    <ToggleButton className='ml-4' value="business" aria-label="business" style={{border: '1px solid rgba(0, 0, 0, 0.38)', borderRadius: '10px'}}>
                                        <Card  className="text-left" style={{width: '305px', height: '330px', textTransform: 'none', backgroundColor: 'transparent', border: 'none'}}>
                                            <Card.Body >
                                                <Card.Title>Business</Card.Title>
                                                <br/>
                                                <span> <Image src={cabinbagimg} alt=""/> Cabin Bag</span>
                                                <br/>
                                                <br/>
                                                <span> <Image src={infoimg} alt=""/> Checked Bag</span>
                                                <br/>
                                                <br/>
                                                <span> <Image src={infoimg} alt=""/> Semi Refundable</span>
                                                <br/>
                                                <br/>
                                                <span> <Image src={infoimg} alt=""/> Seat Selection</span>
                                                <br/>
                                                <br/>
                                                <br/>
                                                <h4 style={{color: 'grey'}}> &#8358;285,940 </h4>
                                            </Card.Body>
                                        </Card>
                                    </ToggleButton>
                                {/* </Col>
                                <Col> */}
                                    <ToggleButton className='ml-4' value="first" aria-label="first aligned" style={{border: '1px solid rgba(0, 0, 0, 0.38)', borderRadius: '10px'}}>
                                        <Card as={Col} md={12} className="text-left" style={{width: '305px', height: '330px', textTransform: 'none', backgroundColor: 'transparent', border: 'none'}}>
                                            <Card.Body >
                                                <Card.Title>First</Card.Title>
                                                <br/>
                                                <span> <Image src={cabinbagimg} alt=""/> Cabin Bag</span>
                                                <br/>
                                                <br/>
                                                <span> <Image src={infoimg} alt=""/> Checked Bag</span>
                                                <br/>
                                                <br/>
                                                <span> <Image src={infoimg} alt=""/> Semi Refundable</span>
                                                <br/>
                                                <br/>
                                                <span> <Image src={infoimg} alt=""/> Seat Selection</span>
                                                <br/>
                                                <br/>
                                                <br/>
                                                <h4 style={{color: 'grey'}}> &#8358;561,083 </h4>
                                            </Card.Body>
                                        </Card>
                                    </ToggleButton>
                                {/* </Col>
                            </Row>
                        </Col> */}
                    </StyledToggleButtonGroup>
                </Paper>
            </div>
        </Card>
    );
}
