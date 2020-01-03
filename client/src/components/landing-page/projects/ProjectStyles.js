import { createGlobalStyle } from "styled-components";
import img1 from "../../../assets/project-images/img1.jpg";
import img2 from "../../../assets/project-images/img2.jpg";
import img3 from "../../../assets/project-images/img3.jpg";
import img4 from "../../../assets/project-images/img4.jpg";
import img5 from "../../../assets/project-images/img5.jpg";
import wave from "./wave.svg";

export const ProjectStyles = createGlobalStyle`
    .projects-container {
        height: 90vh;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        &:after {
            content: "";
            height: 100px;
            width: 100%;
            background: url(${wave}) no-repeat bottom center;
            background-size: cover;
            
        }

        .title {
            width: 60%;

            h2{
                font-size: 2rem;
            } 
        }

        .grid-container {
            
            height: 70%;
            width: 60%;
            margin-top: 30px;
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            grid-template-rows: 1fr 1fr;
            grid-gap: 10px;
            

            .content{
                position: absolute;
                bottom: 30px;
                left: 30px

                a {
                    text-decoration: none;
                    font-size: 2.5rem;
                    color: #eb7424;
                    font-weight: 500;

                    &:hover {
                        border-bottom: 1px solid #eb7424;
                    }
                }

                h4 {
                    font-size: 1.6rem;
                    margin-top: 5px;
                    color: white;
                    text-transform: uppercase;
                }
            }

            .two-cols {
                background:url(${img2}) no-repeat center;
                background-size: cover;
                grid-column: 1 / 3;
                position: relative;

                &:before {
                    content: "";
                    width: 100%;
                    height: 100%;
                    position: absolute;
                    top: 0;
                    left: 0;
                    background: black;
                    opacity: 0.3;
                    mix-blend-mode: soften;
                    
                }

            }//two-cols ends here

            .last-col {
                background:url(${img1}) no-repeat center;
                background-size: cover;
                position: relative;
                display: flex;
                justify-content: center;

                &:before {
                    content: "";
                    width: 100%;
                    height: 100%;
                    position: absolute;
                    top: 0;
                    left: 0;
                    background: black;
                    opacity: 0.3;
                }

                .special-content {
                    width: 80%;
                    height:80%;
                    z-index: 10;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-direction: column;


                    h3 {
                        font-size: 3rem;
                        color: white;
                        margin-bottom: 40px;
                        text-align: center;
                    }

                    span {
                        color: #eb7424;
                        font-weight: 600;
                    }

                }



                button {
                    text-transform: uppercase;
                    font-size: 1.3rem;
                    width: 30%;
                    padding: 10px;
                    border-radius: 10px;
                    background-color: #26a0da;
                    color: #fff;
                    font-weight: 500;
                    transition: 0.5s;
                    cursor: pointer;

                    &:hover {
                        background-color: #5ebb47;
                        transition: 0.5s;
                    }
                }
            }//last col ends here


            .first-col, .sec-col, .third-col {  
                position: relative;
            }

            .first-col{
                background: url(${img4}) no-repeat center;
                background-size: cover;
            }

            .sec-col {
                background: url(${img5}) no-repeat center;
                background-size: cover;
            }

            .third-col {
                background: url(${img3}) no-repeat center;
                background-size: cover;
            }


        }//grid container ends here
    }//project container ends here
`;
