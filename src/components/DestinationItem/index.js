import {Component} from 'react'

import './index.css'

class DestinationsItem extends Component {
  render() {
    const {destinationsItem} = this.props
    const {name, imgUrl} = destinationsItem
    return (
      <li>
        <img src={imgUrl} className="image" alt={name} />
        <p className="para">{name}</p>
      </li>
    )
  }
}

export default DestinationsItem
