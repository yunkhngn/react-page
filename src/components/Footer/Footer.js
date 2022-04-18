import React from 'react';
import { Div } from 'atomize';

const Footer = () => {
    const [year, setYear] = React.useState(new Date().getFullYear());

    React.useEffect(() => {
        setYear(new Date().getFullYear());
    }, []);

    return (
    <Div textSize={{xs:"caption", md:"paragraph"}}>
        Copyright &copy;{year} All rights reserved | Created by <strong> Khoa Nguyễn</strong>
    </Div>
    );
};

export default Footer;
