import {Component} from 'react'
import {
  GeneratorContainer,
  GeneratorSubContainer1,
  MemeHeading,
  LabelCont1,
  InputCont1,
  FormContainer,
  ButtonText,
  MemeShow,
  ParaElement,
  ParaElement2,
  SelectCont,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
  {
    optionId: '36',
    displayText: '36',
  },
  {
    optionId: '38',
    displayText: '38',
  },
]
// Write your code here
class MemeGenerator extends Component {
  state = {
    onImageUrl: '',
    onTopText: '',
    onBottomText: '',
    onFontSize: 8,
    isShow: false,
  }

  onImageUrlChange = event => {
    this.setState({onImageUrl: event.target.value})
  }

  onTopTextChange = event => {
    this.setState({onTopText: event.target.value})
  }

  onBottomTextChange = event => {
    this.setState({onBottomText: event.target.value})
  }

  onFontSizeChange = event => {
    this.setState({onFontSize: event.target.value})
  }

  onShowBtn = () => {
    this.setState({isShow: true})
  }

  render() {
    const {onFontSize, onImageUrl, onTopText, isShow, onBottomText} = this.state
    return (
      <>
        <GeneratorContainer>
          <GeneratorSubContainer1>
            <MemeHeading>Meme Generator</MemeHeading>
            <FormContainer>
              <LabelCont1 htmlFor="image">Image URL</LabelCont1>
              <InputCont1
                type="search"
                id="image"
                placeholder="ImageUrl"
                value={onImageUrl}
                onChange={this.onImageUrlChange}
              />
              <LabelCont1 htmlFor="top text">Top Text</LabelCont1>
              <InputCont1
                value={onTopText}
                type="search"
                id="top text"
                placeholder="Enter the Top Text"
                onChange={this.onTopTextChange}
              />
              <LabelCont1 htmlFor="bottom text">Bottom Text</LabelCont1>
              <InputCont1
                value={onBottomText}
                type="search"
                id="bottom text"
                placeholder="Enter the Bottom Text"
                onChange={this.onBottomTextChange}
              />
              <LabelCont1 htmlFor="size">Font size</LabelCont1>
              <SelectCont
                id="size"
                value={onFontSize}
                onChange={this.onFontSizeChange}
              >
                {fontSizesOptionsList.map(each => (
                  <option key={each.optionId} value={each.optionId}>
                    {each.displayText}
                  </option>
                ))}
              </SelectCont>

              <ButtonText type="button" onClick={this.onShowBtn}>
                Generate
              </ButtonText>
            </FormContainer>
          </GeneratorSubContainer1>
          <MemeShow visible={isShow} data-testid="meme">
            <ParaElement size={`${onFontSize}px`}>{onTopText}</ParaElement>
            <ParaElement2 size={`${onFontSize}px`}>{onBottomText}</ParaElement2>
          </MemeShow>
        </GeneratorContainer>
      </>
    )
  }
}
export default MemeGenerator
