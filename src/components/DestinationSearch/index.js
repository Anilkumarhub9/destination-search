import {Component} from 'react'
import DestinationsItem from '../DestinationItem/index'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  onChange = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {destinationsList} = this.props
    const {searchInput} = this.state
    const searchResults = destinationsList.filter(each =>
      each.name.includes(searchInput),
    )
    return (
      <div className="container">
        <h1>Destination Search</h1>
        <div className="input-icon">
          <input type="search" className="inputEl" onChange={this.onChange} />
          <img
            className="icon"
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            alt="search icon"
          />
        </div>
        <ul className="image-name">
          {searchResults.map(eachItem => (
            <DestinationsItem destinationsItem={eachItem} key={eachItem.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
