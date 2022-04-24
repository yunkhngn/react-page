import React, { useEffect } from 'react'
import {Div, Button,Text} from 'atomize'
import { useLocation, Link } from 'react-router-dom'
import Template from '../Template/Template';
import {  useThemeState } from "../../store";

const Navbutton = () => {
    const location = useLocation();
    const [goWhere, setGoWhere] = React.useState('');
    const [backWhere, setBackWhere] = React.useState('');
    const [page, setPage] = React.useState('');
    const [state] = useThemeState();
    const theme = state === 'light'

    useEffect(() => {
        if(location.pathname === '/') {
            setGoWhere('/about');
            setBackWhere('/pictures');
            setPage('1');
        }
        else if(location.pathname === '/about'){
            setGoWhere('/projects');
            setBackWhere('/');
            setPage('2');
        }
        else if(location.pathname === '/projects'){
            setGoWhere('/pictures');
            setBackWhere('/about');
            setPage('3');
        }
        else if(location.pathname === '/pictures'){
            setGoWhere('/');
            setBackWhere('/projects');
            setPage('4');
        }
    }, [location.pathname]);
    return (
    <Template>
        <Div m="auto" justify="center" d="flex">
        <Link to={backWhere}><Button bg={theme?"#212121":"gray300"} hoverBg={theme ? "#333333":"gray400"} textColor={theme ? "#b9b9b9" : "dark" } >Go back</Button></Link>
        <Text justify="center" m='auto' textSize="subheader" textWeight="500" textColor={theme ? "#b9b9b9" : "dark" }>Page {page}</Text>
        <Link to={goWhere}><Button bg={theme?"#212121":"gray300"} hoverBg={theme ? "#333333":"gray400"} textColor={theme ? "#b9b9b9" : "dark" } >Go next</Button></Link>
        </Div>
    </Template> 
  )
}

export default Navbutton