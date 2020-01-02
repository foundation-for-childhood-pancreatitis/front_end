import React from 'react';
import styled from 'styled-components';

const FooterSection = styled.section`
    div {
        height: 100px;
        background-color: #555555;
        width: 100vw;
        text-align: center;
        margin-bottom: 3rem;
        h3{
            color: white;
        }
    }
    footer{
        margin: 2rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        a{
            margin: 1rem;
            margin-left: 85%;
            text-decoration: none;
            padding: .2rem;
            border: 1px solid;
            width: 10rem;
            color: white;
            background-color: #1178a4;
            text-align: center;
            @media (max-width: 550px) {
                width: 100vw;
                margin:1rem 0;
            }
        }
        p{
            color: #666666;
            @media (max-width: 550px) {
                font-size: 1.5rem;
                text-align: center
            }
        }
    }
`;
const Footer = () => {
    return (
        <FooterSection>
            <div>
                <h3>RECENT ARTICLES</h3>
            </div>
            <footer>
                <a href="#nav">Go To Top</a>
                <p>Copyright © 2020 Foundation for Childhood Pancreatitis</p>
            </footer>
        </FooterSection>
    )
};

export default Footer;