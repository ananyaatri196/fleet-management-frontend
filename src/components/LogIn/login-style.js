import styled from 'styled-components';

export const BackgroundStripes = styled.div
  `height: 100vh;
width: 100vw;
--w:1%;
  --n:11;  
  background: linear-gradient(90deg, #0000 calc(100% - var(--w)), #F5F5F5 0);
  background-size: calc((100% - var(--n)*var(--w))/(var(--n) + 1) + var(--w)) 100%;
position:relative;`

export const Login = styled.div
  `display:flex;
flex-direction:column;
width: 100vw;
height: 100vh;
gap: 25px;
align-items: center;
text-align: center;
justify-content: center;`

export const Rectangle = styled.div
  `height: 8%;
width: 33%;
border-radius: 6px;
background-color: white;
border: 1px solid var(--Base-Color-Lines, #D8D8D8);
display: flex;
align-items: center;
gap: 12px;
  @media (max-width: 490px){height: 5%;
  gap: 0;
  padding: 0%;
  width: auto;}`
  
  export const MailIcon = styled.img
  `margin-left: 3%;
  @media (max-width: 490px){width: 10%; height: 10%:}`
  
  export const Input = styled.input
    `height: 8%;
  outline: none;
  border:none;
  margin:1%;`
  
  export const EmailInput = styled(Input).attrs({ type: "email" })
    `width: 99%;
  padding: 3% 0%;
  height: 100%:
  @media (max-width: 490px){font-size: 11px;}`

export const Button = styled.button
  `background-color: #EE7C33;
color: white;
width: 33%;
border: none;
cursor: pointer;
border-radius: 6px;
height: 8%;
  @media (max-width: 490px){font-size: 11px;
  height: 5%;}`

export const OtpButton = styled(Button)
  ``

export const VerificationButton = styled(Button)
  `display:none;`


export const Image = styled.img
  `position:fixed;
  height: 40%;
bottom: 0%;
@media (max-width:900px){width: 25%;}`

export const LeftImage = styled(Image)
  `left:5%;`

export const RightImage = styled(Image)
  `right:5%;`

export const OtpDiv = styled.div
  `display:none;`