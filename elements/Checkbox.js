import React from 'react';
import { CheckBox } from 'react-native';

const CheckBoxElem = (props) => {
    return(
        <CheckBox value={props.value} onValueChange={props.changevalue} />
    )
};

export default CheckBoxElem;