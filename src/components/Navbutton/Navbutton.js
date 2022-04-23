import React from 'react'
import {Div, Button,Text} from 'atomize'
import { useLocation, Link } from 'react-router-dom'
import { useEffect } from 'react';


const Navbutton = () => {
    const location = useLocation();
    const [goWhere, setGoWhere] = React.useState('');
    const [page, setPage] = React.useState('');

    useEffect(() => {
        if(location.pathname === '/') {
            setGoWhere('/about');
            setPage('1');
        }
        else if(location.pathname === '/about'){
            setGoWhere('/projects');
            setPage('2');
        }
        else if(location.pathname === '/projects'){
            setGoWhere('/picture');
            setPage('3');
        }
        else if(location.pathname === '/picture'){
            setGoWhere('/');
            setPage('4');
        }
    }, [location.pathname]);
    console.log(goWhere)

    return (
    <Div
    bg='white'
    w='90%'
    m='auto'
    p="2em"
    border="1px solid"
    borderColor="gray300"
    rounded="xl"
    >   
        <Div m="auto" justify="center" d="flex">
        <Button bg="gray300" hoverBg="gray400" textColor="dark" onClick={() => {window.history.back();}}>Go back</Button>
        <Text justify="center" m='auto' textSize="subheader" textWeight="500">Page {page}</Text>
        <Link to={goWhere}><Button bg="gray300" hoverBg="gray400" textColor="dark" >Go next</Button></Link></Div>
    </Div>
  )
}

export default Navbutton