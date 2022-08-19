import React from 'react';
import {Link} from 'react-router-dom';
import Hello from '../components/hello';

const Bar: React.FC<unknown> = () => {
    return (
        <React.Fragment>
            <Hello name='Bar' />
            <Link to='/'>Home</Link>
        </React.Fragment>
    );
};
export default Bar;
