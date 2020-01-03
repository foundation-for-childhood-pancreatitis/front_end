import styled from "styled-components";
import { Tertiary, Secondary, Solid } from '../index'

export const SubmitStoryStyle = styled.div `
/* body {
  margin-top: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: rgba(194, 228, 238, 0.931);
} */
font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
background: rgba(194, 228, 238, 0.931);
margin-top: 0;
code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}



.story-form {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  align-content: center;
  flex-wrap: wrap;
  max-width: 50%;  
  margin: 0 auto; 
   border-radius: 4px; 
  padding: 10px 10px 15px;
}


.story-form h2 {
  padding-top: 15px;
  font-weight: bold;
  font-size: 40px;
  text-shadow: 5px 5px 5px #aaa;
  color: rgba(33, 123, 175, 0.924)
}
.ui.menu {
  font-family: 'Open Sans', sans-serif;
  display: flex;
  justify-content: center;
  border-style: hidden;
 
}



@media only screen and (max-width: 500px) {
  .ui.menu {
    max-width: 100%;
    flex-direction: column;
    justify-content: center;
    
  }
}

@media only screen and (max-width: 800px) {
  .ui.menu {
    flex-wrap: wrap;
    justify-content: center;
    
  }
}


button {
  border: 1px dotted rgb(97, 93, 93);
    border-radius: 10px;
    font-family : sans-serif;
    padding      : 15px 10px 5px 5px;
    font         : bold 1em sans-serif;
    border       : 2px solid #333;
    border-radius: 5px;
    background   : ${Tertiary.DarkGreen};
    cursor       : pointer;
    padding: 0.5em 2em;
    /* -webkit-appearance: none;
   -webkit-transform: rotate(-1.5deg);
    -moz-transform: rotate(-1.5deg);
    -ms-transform: rotate(-1.5deg);
    -o-transform: rotate(-1.5deg);
    transform: rotate(-1.5deg);
    box-shadow: 10px 10px 5px grey; */
  }

  button:after {
    content: " >>>";
  }
  
  button:hover,
  button:focus {
    outline   : none;
    background: ${Secondary.Orange};
    color   : ${Solid.WHITE};
  }
  
  input {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    border: 5px solid rgb(100, 88, 88); 
    -webkit-box-shadow: 
      inset 0 0 10px  rgba(0,0,0,0.1),
            0 0 16px rgba(0,0,0,0.1); 
    -moz-box-shadow: 
      inset 0 0 10px  rgba(0,0,0,0.1),
            0 0 16px rgba(0,0,0,0.1); 
    box-shadow: 
      inset 0 0 10px  rgba(0,0,0,0.1),
            0 0 16px rgba(0,0,0,0.1);  
    padding: 10px 15px;
    background: rgba(246, 235, 235, 0.5);
    margin: 10px 30px 30px 0; 
    box-shadow: 10px 10px 5px grey;
    transition:all 0.5s;
    position: relative;
    z-index: 1;
    width: 500px;
}

input:hover {
  transform: translateY(-4px) scale(1.03);
}

textarea {
display: flex;
flex-direction: column;
justify-content: space-around;
    border: 5px solid rgb(100, 88, 88); 
    -webkit-box-shadow: 
      inset 0 0 10px  rgba(0,0,0,0.1),
            0 0 16px rgba(0,0,0,0.1); 
    -moz-box-shadow: 
      inset 0 0 10px  rgba(0,0,0,0.1),
            0 0 16px rgba(0,0,0,0.1); 
    box-shadow: 
      inset 0 0 10px  rgba(0,0,0,0.1),
            0 0 16px rgba(0,0,0,0.1);  
    padding: 10px 15px;
    background: rgba(246, 235, 235, 0.5);
    margin: 10px 30px 30px 0; 
    box-shadow: 10px 10px 5px grey;
    transition:all 0.5s;
    position: relative;
    z-index: 1;
    width: 500px;
}

textarea:hover {
  transform: translateY(-4px) scale(1.03);
}

`;