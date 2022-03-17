import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  


:root{
    --font-style:"Raleway",sans-serif;
    --border-color:#efefef;
    --border-radius:8px;

}

body{
    background-color:#efefef;
    
}

*{
    font-family:"Raleway",sans-serif;
    
}

input{
width: 100%;
border: none;
height: 3vw;
border-bottom: solid 1px var(--border-color);
font-size: 1.2vw;
&:focus {
  outline: none;
  border-bottom: solid 1px black;
}
}

html, body {
      height: 100%;
      margin: 0;
      padding: 0;
  }
`;
