import React from 'react';
import Hello from '../components/hello';
import {Link} from 'react-router-dom';

const Foo: React.FC<unknown> = () => {
    return (
        <React.Fragment>
            <Hello name='Foo' />
            <Link to='/bar'>Bar</Link>
        </React.Fragment>
    );
};
export default Foo;
