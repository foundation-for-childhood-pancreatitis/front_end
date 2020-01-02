import { createGlobalStyle } from "styled-components";

export const NavigationStyles = createGlobalStyle`
  header {
    height: 15vh;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0 10px;
    position: relative;
   

    .main-logo{
      height: 100%;
      width: 20%;
      cursor: pointer;
     
      
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center center;
      }
    }

    .main-nav {
      height: 100%;
      width: 50%;
      position: absolute;
      top: 20%;
      left: 50%;
      transform: translateX(-50%);
      
      
    

      ul {
        list-style-type: none;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      .dropdown {
        position: relative;

        &:hover .dropdown-list{
          transform: translateX(0);
          width: 200px;
          height: 80px;
          position: absolute;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: flex-start;
          opacity: 1;
          padding: 10px;
          transition: display 5.2s linear;
        }

        .dropdown-list {
          display: none;
        }

        .divider {
          width: 100%;
          background-color: #26A0DA;
          height: 1px;
          margin: 10px 0;
        }
      }

      a {
        text-decoration: none;
        text-transform: uppercase;
        color: #92298d;
        font-weight: 500;
        transition: 0.5s;
        

        &: hover {
          color: #eb7424;
          transition:  0.5s;
        }
      }



      .hope-logo {
        height: 100%;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center 10px;
          
        }
      }
    }
  } 





`;
