import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import Password from '../PasswordComponent'
import './index.css'

class PasswordManager extends Component {
  state = {
    passwordsList: [],
    webInput: '',
    nameInput: '',
    passwordInput: '',
    searchInput: '',
    isChecked: false,
  }

  onUpdateWebInput = event => {
    this.setState({webInput: event.target.value})
  }

  onUpdateNameInput = event => {
    this.setState({nameInput: event.target.value})
  }

  onUpdatePasswordInput = event => {
    this.setState({passwordInput: event.target.value})
  }

  onUpdateSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onAddDetails = e => {
    e.preventDefault()
    const {webInput, nameInput, passwordInput} = this.state
    const newUserDetails = {
      id: uuidv4(),
      webInput,
      nameInput,
      passwordInput,
    }
    this.setState(prevState => ({
      passwordsList: [...prevState.passwordsList, newUserDetails],
      webInput: '',
      nameInput: '',
      passwordInput: '',
      searchInput: '',
    }))
  }

  showPasswords = () => {
    this.setState(prevState => ({isChecked: !prevState.isChecked}))
  }

  deleteDetails = id => {
    const {passwordsList} = this.state
    const filteredList = passwordsList.filter(each => each.id !== id)
    this.setState({passwordsList: filteredList})
  }

  render() {
    const {
      passwordsList,
      webInput,
      nameInput,
      passwordInput,
      searchInput,
      isChecked,
    } = this.state

    const newList = passwordsList.filter(each =>
      each.webInput.toLowerCase().includes(searchInput.toLowerCase()),
    )

    const count = newList.length

    return (
      <div className="main-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
          className="main-logo"
        />
        <div className="card">
          <form className="inputs-card">
            <h1 className="inputs-card-head">Add New Password</h1>
            <div className="input-cont">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                alt="website"
                className="input-logo"
              />
              <input
                value={webInput}
                placeholder="Enter Website"
                onChange={this.onUpdateWebInput}
                type="text"
                className="input-ele"
              />
            </div>
            <div className="input-cont">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                alt="username"
                className="input-logo"
              />
              <input
                value={nameInput}
                placeholder="Enter Username"
                onChange={this.onUpdateNameInput}
                type="text"
                className="input-ele"
              />
            </div>
            <div className="input-cont">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                alt="password"
                className="input-logo"
              />
              <input
                value={passwordInput}
                placeholder="Enter Password"
                onChange={this.onUpdatePasswordInput}
                type="password"
                className="input-ele"
              />
            </div>
            <div className="button-container">
              <button type="submit" onClick={this.onAddDetails}>
                Add
              </button>
            </div>
          </form>
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
            alt="password manager"
            className="card-image"
          />
        </div>
        <div className="card bottom-card">
          <div className="bottom-card-header">
            <div className="passwords-count-container">
              <h1 className="bottom-card-para">Your Passwords</h1>
              <p className="span">{count}</p>
            </div>
            <div className="search-cont">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                className="search-logo"
                alt="search"
              />
              <input
                type="search"
                onChange={this.onUpdateSearchInput}
                value={searchInput}
                className="input-ele"
                placeholder="Search"
              />
            </div>
          </div>
          <hr />
          <div className="checkbox-ele">
            <input
              id="checkbox"
              onChange={this.showPasswords}
              type="checkbox"
            />
            <label htmlFor="checkbox">Show Passwords</label>
          </div>
          <div className="no-passwords-container">
            {count === 0 && (
              <>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                  alt="no passwords"
                  className="card-image"
                />
                <p className="para">No Passwords</p>
              </>
            )}
            {count !== 0 && (
              <ul className="password-items-cont">
                {newList.map(each => (
                  <Password
                    key={each.id}
                    isChecked={isChecked}
                    userDetails={each}
                    deleteDetails={this.deleteDetails}
                  />
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default PasswordManager
