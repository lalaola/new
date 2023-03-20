import React from 'react';
import { useSelector } from 'react-redux';
import '../asset/css/index.css'
import IndexRoute from '../routes';

const Index = () => {
    const { getNavbar } = useSelector((state) => state.JobReducer)
    return (
        <div className={`d-flex index ${getNavbar ? 'show' : ''}`}>
            
            <IndexRoute/>
        </div>
    );
}

export default Index;
