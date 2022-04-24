import React from 'react';
import { Div, Text } from 'atomize';
import { useThemeState } from "../../../store";
import { Spacer } from '../'

const Footer = () => {
    const [year, setYear] = React.useState(new Date().getFullYear());
    const [state] = useThemeState();
    const theme = state === 'light'

    React.useEffect(() => {
        setYear(new Date().getFullYear());
    }, []);
    
    return (
    <Div justify="center" m="auto">
        <Spacer/>
        <Text textColor={theme ? "#a1a1a1" : "dark"} textSize={{xs:"tiny", md:"caption"}}>Built and developed by Khoa Nguyen.</Text>
        <Text textColor={theme ? "#a1a1a1" : "dark"} textSize={{xs:"tiny", md:"caption"}}>Copyright &copy;{year} - All rights reserved.</Text>
    </Div>
    );
};

export default Footer;
