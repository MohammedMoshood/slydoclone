import React from 'react'

import {WelcomeCard , InfoDiv , InfoImageDiv , InfoH2 , InfoP , InfoBtn  } from "../../../styles/InfoCardElements"
const Infocards = ({dark , heading , paragraph , btnText,bgImage , rightImage}) => {
  return (
    <>
    <WelcomeCard  style={{backgroundImage:`url(${bgImage})` }}>
        <InfoDiv>
            <InfoH2 dark={dark}>
                {heading}
            </InfoH2>
          { paragraph &&  <InfoP>
                {paragraph}
            </InfoP>}
            <InfoBtn dark={dark}>
                {btnText}
            </InfoBtn>

        </InfoDiv>
        <InfoImageDiv  >
              <img src={rightImage} />
        </InfoImageDiv>
    </WelcomeCard>
    </>
  )
}

export default Infocards