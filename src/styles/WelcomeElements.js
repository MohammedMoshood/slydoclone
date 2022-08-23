import styled from "styled-components"

export const PageContainer = styled.div`
height: 1400px;
width: 100%;
justify-content: center;
align-items: center;
margin: 0 auto;
background:#e3deff ;
@media screen and (min-width: 921px ) {
    height: 100vh;
}
`
export const PageWrapper = styled.div`
height:80vh;
width: 100%;
justify-content: center;
display: grid;
`
export const TextWrap = styled.div`
height:10vh;
align-items: center;
justify-content: left;
display: flex;
width: 90%;
font-weight: 200;
margin: 0 auto;
/* background: red; */
`
export const WelcomeText = styled.h2`
font-weight: 200;
display: flex;
justify-content: center;
padding-top: 5px;
`
export const InfoWrap = styled.div`
display:grid ;
justify-content: center;
align-items: center;
height: 800px;

@media screen and (min-width: 921px) {
display:flex ;
justify-content: center;
align-items: center;
height: 40vh;

}

`

//Line charts


export const ChartContainer = styled.div`
height: 40vh ;
width: 90%;
border-radius: 10px;
margin:30px auto;
justify-content: center;
align-items: center;
background: white;
`