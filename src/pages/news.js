import React from 'react'
import styled from 'styled-components'
import { Button, Circle, HeadingMedium, Paragraph, Wrapper } from '../styles/GlobalStyledComponents'

const News = () => {
  return (
   <Wrapper>
     <Circle w="300px" top="-100px" right="0px" incircle/>
    <NewsSection>
        <NewsContainer>
            <HeadingMedium>
                Subscribe to NewsLetter
            </HeadingMedium>
            <Paragraph small>
            we have a wide experience in design & stretagy
            </Paragraph>
            <InputBox>
            <Input type="email" placeholder='Enter Your Email'/>
            <Button primary > send Now </Button>
            </InputBox>
        </NewsContainer>
    </NewsSection>
   </Wrapper>
  )
}

const NewsSection = styled.div`
padding: 2rem 3rem;
@media (max-width: 768px) {
    padding: 1rem 2rem;
  }
@media (max-width: 425px) {
    padding: 1rem;
  }
`
const NewsContainer = styled.div`
display:flex;
flex-direction: column;
justify-content:center;
align-items:center;
background-color:${({theme})=>theme.color.primaryColor};
color:${({theme})=>theme.color.white};
gap: 2rem;
border-radius: 0.8rem;
min-height: 500px;
margin: 0 auto;
padding: 2rem 4rem;
@media (max-width: 768px) {
    padding: 1rem 2rem;
  }
@media (max-width: 425px) {
    padding: 1rem;
    text-align: center;
  }
`
const InputBox = styled.div`
display: flex;
background-color: ${({theme})=>theme.color.white};
color:${({theme})=>theme.color.text} ;
padding: 1.5rem 1rem;
margin-top: 1rem;
width: 80%;
gap: 2rem;
border-radius: 0.5rem;
button{
   min-width: 8rem;
}
@media (max-width: 768px) {
    width: 90%;
  }
@media (max-width: 425px) {
    width: 100%;
    flex-direction: column;
  }

`
const Input = styled.input`
width: 100%;
border: none;
background-color: ${({theme})=>theme.color.white};
outline: none;
@media (max-width: 425px) {
    border: 2px solid ${({theme})=>theme.color.primaryColor};
    outline: 2px solid ${({theme})=>theme.color.primaryColor};
    padding: 0.5rem;
    border: 0.5rem;
    outline: inherit;
  }
`
export default News