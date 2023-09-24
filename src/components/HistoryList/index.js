import './index.css'

const HistoryList = props => {
  const {historyObj, deleteHistory} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyObj
  const sendDeleteHistory = () => {
    deleteHistory(id)
  }

  return (
    <li className="history-list">
      <p className="time">{timeAccessed}</p>
      <div className="site-container">
        <div className="site-details">
          <img src={logoUrl} alt="domain logo" className="site-logo" />
          <div className="site-url">
            <p className="domain-name">{title}</p>
            <p className="domain-url">{domainUrl}</p>
          </div>
        </div>
        <button
          data-testid="delete"
          type="button"
          className="delete-button"
          onClick={sendDeleteHistory}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default HistoryList
