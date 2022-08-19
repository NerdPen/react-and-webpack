import React from 'react';

interface IHelloProps {
    name: string;
}
const Hello: React.FC<IHelloProps> = ({name}) => {
    return <div>{`Hello, ${name}.`}</div>;
};
export default Hello;
