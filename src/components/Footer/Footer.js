import React from 'react';
import styled from 'styled-components';

const Footer = () => {
    const [year, setYear] = React.useState(new Date().getFullYear());

    React.useEffect(() => {
        setYear(new Date().getFullYear());
    }, []);

    return <FooterStyle style={{color: 'white', fontSize: "1em"}} className="noselect">
        Copyright &copy;{year} All rights reserved | Created by
        <FooterLink class="linking" href="https://www.facebook.com/yun.khngn" target="_blank">
            <strong> Khoa Nguyễn</strong>
        </FooterLink>
    </FooterStyle>;
};

const FooterLink = styled.a`
text-decoration: none;
color: #fff;
`;

const FooterStyle = styled.div`
    position: absolute;
    bottom: 5px;
    width: 100%;
`;

export default Footer;