import React from 'react';
import styled from 'styled-components';

const Footer = () => {
    const [year, setYear] = React.useState(new Date().getFullYear());

    React.useEffect(() => {
        setYear(new Date().getFullYear());
    }, []);

    return <FooterStyle style={{color: 'white', fontSize: "1em"}} className="FooterCss noselect">
        Copyright &copy;{year} All rights reserved | Created by
        <FooterLink class="linking" href="https://www.facebook.com/yun.khngn" target="_blank">
            <strong> Khoa Nguyễn</strong>
        </FooterLink>
    </FooterStyle>;
};

const FooterLink = styled.a`
text-decoration: none;
font-size: 1em;
color: #fff;
`;

const FooterStyle = styled.div`
    margin:auto;
`;

export default Footer;