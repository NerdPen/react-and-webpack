import React from 'react';
import { Link } from 'react-router-dom';
import Hello from '../components/hello';

const NotFound: React.FC<unknown> = () => {
    return (
        <React.Fragment>
            <Hello name='404' />
            <Link to='/'>Home</Link>
        </React.Fragment>
    );
};
export default NotFound;
