import React from 'react'
import { Route } from 'react-router';

//layout import
import DefaultLayout from '../layouts/Default.layout';

const DefaultHOC = ({component, ...props }) => {
    return <>
    <DefaultLayout/>
    <Route {...props} />
    </>;
};

export default DefaultHOC;