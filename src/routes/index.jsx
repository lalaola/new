import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import IndexNavbar from '../component/navbar';
import Rute from './rute';

const IndexRoute = () => {
    return (
        <BrowserRouter>
            <IndexNavbar />
            <div className="content-wrap">
                <Rute />
            </div>
        </BrowserRouter>
    );
}

export default IndexRoute;
