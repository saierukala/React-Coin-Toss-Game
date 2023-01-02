// Write your code here
// Write your code here
import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {
    status: 0,
    heads: 0,
    tails: 0,
    total: 0,
  }

  headsOrTailsImage = () => {
    const {status} = this.state
    let image
    if (status === 0) {
      image = (
        <img
          src="https://assets.ccbp.in/frontend/react-js/heads-img.png"
          alt="toss result"
          className="toss-image"
        />
      )
    } else {
      image = (
        <img
          src="https://assets.ccbp.in/frontend/react-js/tails-img.png"
          alt="toss result"
          className="toss-image"
        />
      )
    }
    return image
  }

  onFlipCoin = () => {
    const number = Math.floor(Math.random() * 2)
    this.setState({status: number})
    if (number === 0) {
      this.setState(prevState => ({
        total: prevState.total + 1,
        heads: prevState.heads + 1,
      }))
    } else {
      this.setState(prevState => ({
        total: prevState.total + 1,
        tails: prevState.tails + 1,
      }))
    }
  }

  render() {
    const {heads, tails, total} = this.state

    return (
      <div className="coin-game-bg-container">
        <div className="coin-game-container">
          <h1 className="main-heading">Coin Toss Game</h1>
          <p className="sub-heading">Heads (or) Tails</p>
          {this.headsOrTailsImage()}
          <button
            type="button"
            className="toss-button"
            onClick={this.onFlipCoin}
          >
            Toss Coin
          </button>
          <div className="results-container">
            <p className="result">Total: {total}</p>
            <p className="result">Heads: {heads}</p>
            <p className="result">Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
