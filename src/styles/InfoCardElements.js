import styled from  "styled-components"

export const WelcomeCard = styled.div`
width: 90%;
height: 97%;
background:#e3deff ;
margin: 10px 0  40px 40px;
align-items: center;
justify-content: center;
display: flex;
border-radius: 10px;
border: #beb4d9 solid 2px;
@media screen and (min-width: 921px) {
    width: 43%;
height: 100%;
background:#e3deff ;
margin: 0 40px;
align-items: center;
justify-content: center;
display: flex;
border-radius: 10px;
border: #beb4d9 solid 2px;

}

`

export const InfoDiv = styled.div`
display: grid;
width: 45%;

height: 100%;
justify-content: center;
align-items: center;

`
export const InfoImageDiv = styled.div`
width: 60%;
height: 100%;
`

export const InfoH2 = styled.h2`
font-size:40px ;
font-weight: 600;
color: ${({dark})=>(dark?"black":"white")};

transform: translateX(30px);
`
export const InfoP = styled.p`
width: 100%;
font-size: 14px; line-height: 1.5rem;
word-spacing:3px;
margin-top: -60px;
transform: translateX(30px);
color:grey;
`
export const InfoBtn = styled.button`
width: 180px;
transform: translateX(30px);
margin-top: -80px;
height: 40px;
border: none;
font-size: 15px;

color: ${({dark})=>(dark?"white":"#360263")};

background-color: ${({dark})=>(dark?"#2e2e2e":"white")};
border-radius: 5px;
cursor: pointer;
transition: 0.2s ease-in-out all;
&:hover{
    color:white;
    background-color:#360263;
}
`



//LineChartElements



export const LineChart = styled.div`

`