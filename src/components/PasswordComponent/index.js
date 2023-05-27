import './index.css'

const colorsList = [
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine',
  'ten',
]

const PasswordComponent = props => {
  const {userDetails, deleteDetails, isChecked} = props
  const {id, webInput, nameInput, passwordInput} = userDetails
  const profileLetter = nameInput[0].toUpperCase()
  const colorindex = Math.ceil(Math.random() * 10)

  const onClickDelete = () => {
    deleteDetails(id)
  }

  return (
    <li className="list-container">
      <div className={`profile-image ${colorsList[colorindex]}`}>
        {profileLetter}
      </div>
      <div className="details-container">
        <p className="details">{webInput}</p>
        <p className="details">{nameInput}</p>
        <p className="details">
          {isChecked && passwordInput}
          {!isChecked && (
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
              alt="stars"
              className="stars"
            />
          )}
        </p>
      </div>
      <button
        type="button"
        className="button"
        data-testid="delete"
        onClick={onClickDelete}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
          className="icon"
        />
      </button>
    </li>
  )
}

export default PasswordComponent
