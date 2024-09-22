import {Component} from 'react'

import {
  Heading,
  Input,
  MainContainer,
  Select,
  Button,
  Form,
  ImageContainer,
  Label,
  TextContent,
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
]
// Write your code here
class MemeGenerator extends Component {
  state = {
    imageUrlInput: '',
    topTextInput: '',
    bottomTextInput: '',
    backgroundImageUrl: '',
    topText: '',
    bottomText: '',
    activeFontSizeOptionId: fontSizesOptionsList[0].optionId,
  }

  onSubmitForm = event => {
    event.preventDefault()
    const {imageUrlInput, topTextInput, bottomTextInput} = this.state

    this.setState({
      backgroundImageUrl: imageUrlInput,
      topText: topTextInput,
      bottomText: bottomTextInput,
    })
  }

  onChangeImageUrl = event => {
    this.setState({imageUrlInput: event.target.value})
  }

  onChangeTopText = event => {
    this.setState({topTextInput: event.target.value})
  }

  onChangeBottomText = event => {
    this.setState({bottomTextInput: event.target.value})
  }

  onChangeFontSizeOptionID = event => {
    this.setState({activeFontSizeOptionId: event.target.value})
  }

  renderMeme = () => {
    const {
      backgroundImageUrl,
      topText,
      bottomText,
      activeFontSizeOptionId,
    } = this.state
    return (
      <ImageContainer backgroundImage={backgroundImageUrl} data-testid="meme">
        <TextContent activeFontSizeId={activeFontSizeOptionId}>
          {topText}
        </TextContent>
        <TextContent activeFontSizeId={activeFontSizeOptionId}>
          {bottomText}
        </TextContent>
      </ImageContainer>
    )
  }

  render() {
    const {activeFontSizeOptionId} = this.state
    return (
      <MainContainer>
        <Form onSubmit={this.onSubmitForm}>
          <Heading>Meme Generator</Heading>
          <Label>
            Image URL
            <Input
              placeholder="Enter the Image Url"
              type="text"
              onChange={this.onChangeImageUrl}
            />
          </Label>

          <Label>
            Top Text
            <Input
              placeholder="Enter the Top Text"
              type="text"
              onChange={this.onChangeTopText}
            />
          </Label>

          <Label>
            Bottom Text
            <Input
              placeholder="Enter the Bottom Text"
              type="text"
              onChange={this.onChangeBottomText}
            />
          </Label>

          <Label>
            Font Size
            <Select
              onChange={this.onChangeFontSizeOptionID}
              id="select"
              value={activeFontSizeOptionId}
            >
              {fontSizesOptionsList.map(eachOption => (
                <option key={eachOption.optionId}>
                  {eachOption.displayText}
                </option>
              ))}
            </Select>
          </Label>

          <Button type="submit">Generate</Button>
        </Form>
        {this.renderMeme()}
      </MainContainer>
    )
  }
}
export default MemeGenerator
