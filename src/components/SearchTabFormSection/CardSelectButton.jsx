
import React from 'react';
import { Card, Container } from 'react-bootstrap';
import CheckIcon from '@material-ui/icons/Check';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ButtonCard from './ButtonCard';

export default function CardSelectButton() {
    const [selected, setSelected] = React.useState(false);

    return (
        // <ToggleButton value="check" selected={selected} onChange={() => { setSelected(!selected); }} >
            <ButtonCard/>
        // {/* </ToggleButton> */}
    );
}
