import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import CountText from '../CountText'
import './index.css'

class BasePage extends Component {
  state = {
    inputText: '',
    addText: [],
  }

  onChangeInputText = event => {
    this.setState({inputText: event.target.value})
  }

  onClickAddBtn = () => {
    const {inputText} = this.state
    const newData = {
      id: uuidv4(),
      text: `${inputText}: ${inputText.length}`,
    }
    this.setState(prevState => ({
      addText: [...prevState.addText, newData],
      inputText: '',
    }))
  }

  render() {
    const {inputText, addText} = this.state
    return (
      <div className="split-cont">
        <div className="first-cont">
          <div className="count-like-a-boss-cont">
            <h1 className="first-heading">
              Count the characters like a Boss...
            </h1>
          </div>
          {addText.length === 0 ? (
            <img
              src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
              alt="no user inputs"
              className="no-user-inputs-img"
            />
          ) : (
            <ul className="un-list">
              {addText.map(eachItem => (
                <CountText key={eachItem.id} eachItem={eachItem} />
              ))}
            </ul>
          )}
        </div>
        <div className="second-cont">
          <h1 className="character-count-text">Character Counter</h1>
          <form className="input-btn-cont">
            <input
              value={inputText}
              type="text"
              className="input"
              placeholder="Enter the Characters here"
              onChange={this.onChangeInputText}
            />
            <button
              type="button"
              className="add-btn"
              onClick={this.onClickAddBtn}
            >
              Add
            </button>
          </form>
        </div>
      </div>
    )
  }
}
export default BasePage
