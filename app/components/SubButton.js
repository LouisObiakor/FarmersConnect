import React from 'react';
import { useFormikContext } from 'formik';

import AppBut from './AppBut';
import Colour from '../assets/Colour';




function SubButton({title, onPress}) {

    const { handleSubmit } = useFormikContext();

    return (
        <AppBut 
                title={title}
                butColor={Colour.primaryColor}
                textColor={Colour.white} 
                onPress={handleSubmit}
                />
    );
}

export default SubButton;