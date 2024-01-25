// Write your code here
import {Component} from 'react'
import './index.css'

const headsUrl = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
const tailsUrl = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {
    toss: 0,
    heads: 0,
    tails: 0,
  }

  onClickToss = () => {
    const randomToss = Math.floor(Math.random() * 2)
    this.setState({toss: randomToss})
    if (randomToss === 0)
      this.setState(prevState => ({heads: prevState.heads + 1}))
    else this.setState(prevState => ({tails: prevState.tails + 1}))
  }

  render() {
    const {toss, heads, tails} = this.state
    const imageUrl = toss === 0 ? headsUrl : tailsUrl
    return (
      <div className="game-bg-container">
        <div className="game-app-container">
          <h1 className="game-app-name">Coin Toss Game</h1>
          <p className="heads-tails-text">Heads (or) Tails</p>
          <img src={imageUrl} alt="toss result" className="toss-result-image" />
          <button
            onClick={this.onClickToss}
            type="button"
            className="toss-button"
          >
            Toss Coin
          </button>
          <div className="game-counts-container">
            <p className="toss-counts-text">Total: {heads + tails}</p>
            <p className="toss-counts-text">Heads: {heads}</p>
            <p className="toss-counts-text">Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
