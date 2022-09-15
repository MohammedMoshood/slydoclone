import React from 'react'
import Infocards from './Infocards/Infocards'
import LineChart from './Infocards/LineChart'
import { cardData1 , cardData2 } from './Infocards/infoData'
import {ChartContainer, WelcomeText , InfoWrap , TextWrap} from "../../styles/WelcomeElements"
import {PageContainer , PageWrapper  } from "../../styles/StaticHomeElements"
const Welcome = () => {
  return (
    <>
    <PageContainer>
        <PageWrapper>
            <TextWrap>
            <WelcomeText>   
                Welcome,
            </WelcomeText>
           <h2> {`Tamara entertains! 👋`}</h2>
          
            </TextWrap>
        
            <InfoWrap>
               <Infocards {...cardData1}></Infocards>
               <Infocards {...cardData2}></Infocards>
            </InfoWrap>
            <ChartContainer>
                <LineChart></LineChart>
            </ChartContainer>
        </PageWrapper>
    </PageContainer>
    </>
  )
}

export default Welcome