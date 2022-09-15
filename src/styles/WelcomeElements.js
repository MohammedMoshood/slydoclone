import styled from "styled-components"

export const TextWrap = styled.div`
height:10vh;
align-items: center;
display: flex;
width: 93%;
font-weight: 200;
margin: auto;
`
export const WelcomeText = styled.h2`
font-weight: 200;
display: flex;
padding-top: 5px;
`
export const InfoWrap = styled.div`
display:grid ;
justify-content: center;
align-items: center;
height: 800px;
width: 100%;
margin: 0 auto;
@media screen and (min-width:1540px) {
display:flex ;
height: 40vh;
}

`

//Line charts


export const ChartContainer = styled.div`
height: 40vh ;
width: 93%;
border-radius: 10px;
margin:30px auto;
justify-content: center;
align-items: center;
background: white;
`