import React from 'react';
import { Div, Text } from 'atomize';

const Footer = () => {
    const [year, setYear] = React.useState(new Date().getFullYear());
    
    React.useEffect(() => {
        setYear(new Date().getFullYear());
    }, []);
    
    return (
    <Div justify="center" m="auto">
        <Text textSize={{xs:"tiny", md:"caption"}}>Built and developed by Khoa Nguyen.</Text>
        <Text textSize={{xs:"tiny", md:"caption"}}>Copyright &copy;{year} - All rights reserved.</Text>
    </Div>
    );
};

export default Footer;
