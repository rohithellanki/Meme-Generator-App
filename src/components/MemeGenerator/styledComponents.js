// Style your components here
import styled from 'styled-components'

export const MainContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: white;
  padding-left: 40px;
  display: flex;
  flex-direction: row;
`

export const Heading = styled.h1`
  color: #35469c;
  font-family: 'Open Sans';
  font-size: 45px;
`
export const Input = styled.input`
  width: 18vw;
  margin-top: 6px;
  margin-bottom: 10px;
`
export const Select = styled.select`
  width: 18vw;
  margin-top: 10px;
`

export const Button = styled.button`
  background-color: #0b69ff;
  color: white;
  width: 6vw;
  border-style: none;
  border-radius: 10px;
  height: 5vh;
  margin-top: 10px;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`

export const ImageContainer = styled.div`
display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  background-image: url(${props => props.backgroundImage});
  background-size: cover;
  height: 300px;
  padding-left: 10px;
  padding-right: 10px;
  margin-bottom: 50px;
  @media screen and (min-width: 768px) {
    width: 48%;
    margin-top: 5px;
    margin-bottom: 20px;

`

export const TextContent = styled.p`
  color: #ffffff;
  font-size: ${props => props.activeFontSizeId}px;
  font-weight: 600;
  font-family: 'Open Sans';
`
export const Label = styled.label`
  color: #5a7184;
  font-size: 13px;
  display: flex;
  flex-direction: column;
`
