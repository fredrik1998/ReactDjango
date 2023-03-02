import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import styled from 'styled-components'
import iconstar from '../../src/assets/iconstar.svg'
import img from '../../src/assets/thankyou.svg'

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50vh;
  border-radius: 18px;
  background-color: #202020;
  margin: auto;
  margin-top: 100px;
  @media only screen and (min-width: 360px) and (max-width: 768px) {
	margin-top: 20px;
}
`
const RatingDiv = styled.div`
  display: flex;
  height: 200px;
  width: 50vh;
  justify-content: space-around;
  align-items: center;
  @media only screen and (min-width: 360px) and (max-width: 768px) {
	height: 100px;
}
`
const StyledLabel = styled.label`
  font-size: 3em;
`
const StyledInput = styled.input`
  border-radius: 40px;
  width: 50px;
  height: 50px;
  background: transparent;
`
const H2Step0 = styled.h2`
  color: hsl(0, 0%, 100%);
  text-transform: none;
  margin-top: 40px;
`

const H2Step1 = styled.h2`
 color: hsl(0, 0%, 100%);
 text-transform: none;
 margin-top: 20px;
`
const StyledP = styled.p`
  font-size: 16px;
  margin-left: 20px;
  color: hsl(216, 12%, 54%);¨
  text-align: center;
  max-width: 600px;
  padding: 40px;
  @media only screen and (min-width: 360px) and (max-width: 400px){
    padding: 10px;
  }
`
const RatingP = styled.p`
  font-size: 16px;
  margin-left: 20px;
  color: hsl(178, 50%, 51%);
  background-color: hsl(213, 19%, 18%);
  border-radius: 18px;
  padding-top: 10px;
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 10px;
  margin-top: 30px;
`
const StyledButton = styled.button`
  width: 90%;
  background-color:hsl(178, 50%, 51%);
  border: 4px solid;
  border-radius: 18px;
  color: #121212;
  font-weight: 700;
  height: 55px;
  text-transform: uppercase;
  cursor: pointer;
  font-size: 13px;
  position: relative;
  margin-bottom: 30px;
  &:hover:before {
    left: 80%;
  }
  &:hover:after {
    right: 80%;
  }
  &:hover {
    background-color:hsl(178, 50%, 51%);
  }
  @media screen and (max-width: 600px){
    width: 75%;
    
  }
`;

const ActiveButton = styled.button`
  border-radius: 50%;
  width: 60px;
  padding-top: 10px;
  border: none;
  padding-bottom: 10px;
  background-color: ${({ active }) => active ? '	hsl(178, 50%, 51%)' : '	hsl(0, 0%, 10%)'};
  font-size: 1.4em;
  color: ${({ active }) => active ? '	hsl(0, 0%, 7%)' : '	hsl(0, 0%, 98%)'};
  cursor: pointer;
  @media only screen and (max-width: 375px){
    padding-top: 0px;
    padding-bottom: 0px;
    width: 40px;
  }
`;

const ImageDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 20px;
`;

const Image = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 10px;
  background-color: hsl(213, 19%, 18%);
  border-radius: 18px;
  padding-top: 10px;
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 10px;
`;

const Image2 = styled.img`
  width: 150px;
  height: 150px;
  margin-right: 10px;
  margin-top: 20px;
`;

const StyledButtonGroup = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`
const RatingComponent = () => {
  const [step, setStep] = useState(0);
  const [rating, setRating] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const handleRatingClick = (value) => {
    setRating(value);
  };
  const handleSubmit = () => {
    setSubmitted(true);
  };

  const handleReset = () => {
    setStep(0);
    setRating(0);
    setSubmitted(false);
  };

  const renderStep = () => {
    switch (step) {
      case 0:
        return (
          <>
          <ImageDiv>
          <Image src={iconstar}></Image>
          </ImageDiv>
          <H2Step0>How did we do?</H2Step0>
            <StyledP>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</StyledP>
            <RatingDiv>
              <StyledButtonGroup>
              {[1, 2, 3, 4, 5].map((value) => (
                <ActiveButton
                key={value}
                active={value === rating}
                onClick={() => handleRatingClick(value)}
                >
                {value}
                </ActiveButton>
              ))}
              </StyledButtonGroup>
            </RatingDiv>
            <StyledButton onClick={nextStep}>Next</StyledButton>
          </>
        );
      case 1:
        return (
          <>
          <ImageDiv>
          <Image2 src={img}/>
          </ImageDiv>
          <RatingP>You selected {rating} out of 5.</RatingP>
          <H2Step1>Thank you!</H2Step1>
          <StyledP>We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!
</StyledP>
          
        </>
        );
      default:
        return null;
    }
  };

  const nextStep = () => {
    setStep(step + 1);
  }

  const prevStep = () => {
    setStep(step - 1);
    };

    return (
      <StyledDiv>
      {renderStep()}
      </StyledDiv>
      );
      }
      
export default RatingComponent
