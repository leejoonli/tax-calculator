import React from 'react';
import {Outlet} from 'react-router-dom';

function RootLayout(props) {
    return (
        <>
            <Outlet />
        </>
    );
}

export default RootLayout;