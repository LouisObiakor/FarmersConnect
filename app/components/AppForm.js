import React from 'react';
import { Formik } from 'formik';



function AppForm({initialValues, validationSchema, onSubmit, children}) {
    return (
        <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}>

            {({handleSubmit}) => (
                <>
                {children}
                </>
            )}
            
        </Formik>
    );
}

export default AppForm;