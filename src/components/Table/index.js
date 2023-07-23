import {Component} from 'react'
import './index.css'

class Table extends Component {
  state = {EditText: '', isButtonClicked: false}

  onChangeSearchInput = event => {
    this.setState({EditText: event.target.value})
  }

  onButtonClick = () => {
    this.setState(prevState => ({isButtonClicked: !prevState.isButtonClicked}))
  }

  render() {
    const {EditText = '', isButtonClicked} = this.state
    const EditOrSaveButton = isButtonClicked ? 'Edit' : 'Save'

    return (
      <div className="main-container">
        <div className="card-container">
          <h1 className="heading">Editable Text Input</h1>
          <div className="input-container">
            {isButtonClicked ? (
              <p className="para">{EditText}</p>
            ) : (
              <input
                className="input"
                type="text"
                value={EditText}
                onChange={this.onChangeSearchInput}
              />
            )}
            <button
              className="buttonccbp publish RJSCPM1V9K domain_name.ccbp.tech"
              onClick={this.onButtonClick}
            >
              {EditOrSaveButton}
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default Table
