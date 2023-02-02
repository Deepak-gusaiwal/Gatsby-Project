import React from 'react'
import { Button, HeadingMedium, Wrapper } from '../styles/GlobalStyledComponents'
import { Link } from 'gatsby'
import styled from 'styled-components'

const ErrorPage = () => {
  return (
   <Wrapper>
    <Container>
    <HeadingMedium>404 NOT FOUND</HeadingMedium>
    <Button to="/" large as={Link}>Go Back</Button>
    </Container>
   </Wrapper>
  )
}
const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
min-height: 60vh;
flex-direction: column;
`

export default ErrorPage