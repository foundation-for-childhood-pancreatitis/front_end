import { createGlobalStyle } from "styled-components";
import img from "../../../assets/home-carousel/Home_Page_Header-2.jpg";

export const HeroArea = createGlobalStyle`
    .hero-img-container {
        background: url(${img}) no-repeat;
        background-size: cover;
        width: 100%;
        height: 80vh;
        margin-top:40px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        z-index: 0;
        


        &:before {
            content: "";
            width: 100%;
            height:100%;
            position: absolute;
            top: 0;
            left: 0;
            opacity: 0.6;
            background: #283c86;  
            background: -webkit-linear-gradient( #45a247, #283c86);
            background: radial-gradient(at 20% 375px, #fff, #283c86);
            mix-blend-mode: multiply;
            z-index: -1;
        }

        div {
            height: 80%;
            width: 100%;
            display: flex;
            justify-content: space-around;
            align-items: center;
            flex-direction: column;


            figure {
                height: 70%;
                width: 30%;
               

                img {
                    width: 100%;
                    height: 100%;
             
                }
            }

            button {
                width: 15%;
                border-radius: 15px;
                padding: 15px 10px;
                text-transform: uppercase;
                font-size: 1.5rem;
                font-weight: 500;
                background: #26A0da;
                color: #fff;
                cursor: pointer;

                &: hover {
                    background: #5ebb47;
                    transition: 0.5s
                }
            } //button ends here
        } //div ends here
    }//hero-img-container ends here


    .information {
        
        width: 100%;
        height: 200px;
        display: flex;
        justify-content: center;   
        background: #26a0da;
        color: #fff;
        
        .details {
            
            width: 70%;
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            padding-top: 60px;



            

            .description {
                width: 30%;
                display: flex;
                justify-content: space-between;
                align-items: flex-start;
               

                svg {
                    width: 100px;
                    height: 50px;
                    margin-right: 20px;
                    
                }
               
                h4 {
                    line-height: 2.5rem;
                    font-size: 1.5rem;
                }
            }

            .ind-info{
                text-transform: uppercase;
                text-align: center;

                .title {
                    color: orange;
                    font-weight: 500;
                }

                .numbers {
                    font-size: 4rem;
                    
                }
                
            }


        }//details ends here
    } //information ends here
`;
