import {Component} from 'react'
import {BiArrowBack} from 'react-icons/bi'
import {Link} from 'react-router-dom'
import FlipRules from '../FlipRules'
import FlipImages from '../FlipImages'
import './index.css'

const cardsData = [
  {
    id: 1,
    name: 'tiger',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-tiger-img.png',
  },
  {
    id: 2,
    name: 'lion',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-lion-img.png',
  },
  {
    id: 3,
    name: 'rat',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-rat-img.png',
  },
  {
    id: 4,
    name: 'hen',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-hen-img.png',
  },
  {
    id: 5,
    name: 'elephant',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-elephant-img.png',
  },
  {
    id: 6,
    name: 'buffalo',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-buffalo-img.png',
  },
  {
    id: 7,
    name: 'goat',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-goat-img.png',
  },
  {
    id: 8,
    name: 'zebra',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-zebra-img.png',
  },
  {
    id: 9,
    name: 'duck',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-duck-img.png',
  },
  {
    id: 10,
    name: 'pigeon',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-pigeon-img.png',
  },
  {
    id: 11,
    name: 'tiger',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-tiger-img.png',
  },
  {
    id: 12,
    name: 'lion',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-lion-img.png',
  },
  {
    id: 13,
    name: 'rat',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-rat-img.png',
  },
  {
    id: 14,
    name: 'hen',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-hen-img.png',
  },
  {
    id: 15,
    name: 'elephant',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-elephant-img.png',
  },
  {
    id: 16,
    name: 'buffalo',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-buffalo-img.png',
  },
  {
    id: 17,
    name: 'goat',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-goat-img.png',
  },
  {
    id: 18,
    name: 'zebra',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-zebra-img.png',
  },
  {
    id: 19,
    name: 'duck',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-duck-img.png',
  },
  {
    id: 20,
    name: 'pigeon',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-pigeon-img.png',
  },
]

class FlipGame extends Component {
  state = {
    isModelOpen: false,
    flippedCards: {},
    timer: '02:00',
    activeFlippedCards: [],
  }

  componentDidMount() {
    this.startTimer()
  }

  componentWillUnmount() {
    clearInterval(this.timerInterval)
  }

  startTimer = () => {
    this.timerInterval = setInterval(() => {
      const {timer} = this.state
      const [minutes, seconds] = timer.split(':').map(num => parseInt(num, 10))
      if (minutes === 0 && seconds === 0) {
        clearInterval(this.timerInterval)
      } else {
        const newSeconds = seconds === 0 ? 59 : seconds - 1
        const newMinutes = seconds === 0 ? minutes - 1 : minutes
        const newTimer = `${newMinutes
          .toString()
          .padStart(2, '0')}:${newSeconds.toString().padStart(2, '0')}`
        this.setState({timer: newTimer})
      }
    }, 1000)
  }

  onClickFlipImage = id => {
    const {flippedCards} = this.state
    const {activeFlippedCards} = this.state

    // Check if the clicked card is already flipped
    if (flippedCards[id]) {
      return
    }

    // If the length of activeFlippedCards is 0 or 1, add the clicked card's ID to activeFlippedCards
    if (activeFlippedCards.length < 2) {
      this.setState(prevState => ({
        activeFlippedCards: [...prevState.activeFlippedCards, id],
        flippedCards: {
          ...prevState.flippedCards,
          [id]: true,
        },
      }))
    }

    // If the length of activeFlippedCards is 2, check if the names of the two cards match
    if (activeFlippedCards.length === 1) {
      const firstCardID = activeFlippedCards[0]
      const firstCardName = cardsData.find(card => card.id === firstCardID).name
      const secondCardName = cardsData.find(card => card.id === id).name

      // If the names match, keep both cards flipped
      if (firstCardName === secondCardName) {
        this.setState({
          activeFlippedCards: [],
        })
      }
      // If the names don't match, flip both cards back after a delay
      else {
        setTimeout(() => {
          this.setState(prevState => ({
            flippedCards: {
              ...prevState.flippedCards,
              [firstCardID]: false,
              [id]: false,
            },
            activeFlippedCards: [],
          }))
        }, 2000)
      }
    }
  }

  toggleModal = () => {
    this.setState(prevState => ({
      isModelOpen: !prevState.isModelOpen,
    }))
  }

  render() {
    const {isModelOpen, flippedCards, timer} = this.state
    return (
      <div className="flip-game-bg-container">
        <div className="flip-rules-content">
          <div className="flip-game-button">
            <Link to="/card-flip-memory-game" className="link">
              <button className="flip-game-back-button" type="button">
                <BiArrowBack className="icon" />
                <p>Back</p>
              </button>
            </Link>
          </div>
          <FlipRules isOpen={isModelOpen} onClose={this.toggleModal} />
          <div className="flip-rules-button-container">
            <button
              className="flip-rules-button"
              type="button"
              onClick={this.toggleModal}
            >
              Rules
            </button>
          </div>
        </div>
        <h1 className="flip-game-heading">Card-Flip Memory Game</h1>
        <div className="flip-level-time-container">
          <p className="level">Card flip count - 00</p>
          <p className="level">Timer : {timer}</p>
          <p className="level">Score - 00</p>
        </div>
        <div className="flip-card">
          <ul className="flip-image-list">
            {cardsData.map(eachItem => (
              <FlipImages
                key={eachItem.id}
                list={eachItem}
                isClicked={flippedCards[eachItem.id]}
                onClickFlipImage={this.onClickFlipImage}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default FlipGame
