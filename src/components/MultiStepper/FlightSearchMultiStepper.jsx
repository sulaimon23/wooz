import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FlightSelectTab from '../SearchTabFormSection/FlightSelectTab'
import TicketOptionTab from '../SearchTabFormSection/TicketOptionTab'
import FormCardSection from '../FormCardSection/FormCardSections'
import VehicleCardSection from '../VehicleFormCardSection/VehicleFormCardSections'
// import FormSections from '../FormSection/FormSections';
import ConfirmationCardSection from '../ConfirmationCardSection/ConfirmationCardSections'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: 'transparent',
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return ['Select', 'Ticket Options', 'Passenger Details', 'Confirmation'];
}

function getStepContent(stepIndex) {
    switch (stepIndex) {
        case 0:
            return (<FlightSelectTab />);
        case 1:
            return (<TicketOptionTab />                                                                                                                                                                     );
        case 2:
            return (<VehicleCardSection />);
        case 3:
            return (<FormCardSection />);
        case 4:
            return (<ConfirmationCardSection />);
        default:
            return 'Error Unknown';
    }
}

export default function HorizontalLabelPositionBelowStepper() {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();

    const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
};

    const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
};

    const handleReset = () => {
    setActiveStep(0);
};

    return (
        <div className={classes.root}>
            <Stepper style={{backgroundColor: 'transparent'}} activeStep={activeStep} alternativeLabelxx>
                {steps.map((label) => (
                <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                </Step>
                ))}
            </Stepper>
            <div>
                {activeStep === steps.length ? (
                    <div>
                        <Typography className={classes.instructions}>All steps completed</Typography>
                        <Button onClick={handleReset}>Reset</Button>
                    </div>
                ) : (
                <div>
                <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
                <div>
                <Button disabled={activeStep === 0} onClick={handleBack} className={classes.backButton} > Back </Button>
                <Button variant="contained" color="primary" onClick={handleNext}> {activeStep === steps.length - 1 ? 'Finish' : 'Next'} </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
