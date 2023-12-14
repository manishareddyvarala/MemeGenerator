// Style your components here
import styled from 'styled-components'

export const GeneratorContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  box-shadow: 0px 4px 16px 0px #bfbfbf;
  height: 100vh;
  margin: 20px;
`
export const GeneratorSubContainer1 = styled.div`
  width: 10%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 20px;
`
export const MemeHeading = styled.h1`
  color: #35469c;
  font-size: 30px;
  font-family: Open Sans;
  font-weight: 700;
`
export const LabelCont1 = styled.label`
  color: #7e858e;
  font-size: 15px;
  font-weight: 350;
`
export const InputCont1 = styled.input`
  border: 1px solid #5a7184;
  background-color: transparent;
  margin-bottom: 10px;
  padding: 8px;

  width: 200px;
`
export const SelectCont = styled.select`
  border: 1px solid #5a7184;
  background-color: transparent;
  margin-bottom: 10px;
  padding: 8px;

  width: 200px;
`
export const ButtonText = styled.button`
  background-color: #0b69ff;
  color: #ffffff;
  font-size: 12px;
  font-family: 'Roboto';
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 8px;
  padding-bottom: 8px;
  border: none;
  margin-top: 10px;
`
export const MemeShow = styled.div`
  display: ${props => (props.visible ? 'flex' : 'none')};
  background-image: url(${props =>
    props.visible
      ? 'https://assets.ccbp.in/frontend/react-js/nature-img.png'
      : ''});
  margin-top: 80px;
  height: 80vh;
  width: 60vw;

  background-size: cover;
  flex-direction: column;
`
export const ParaElement = styled.p`
  font-size: ${props => props.size};
  color: #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-bottom: 30%;
`

export const ParaElement2 = styled.p`
  font-size: ${props => props.size};
  color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`
export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`
