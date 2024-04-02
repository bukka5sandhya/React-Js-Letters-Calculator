import './index.css'
import {Component} from 'react'

class LettersCalculator extends Component{
    state={inputPhrase:''}

    onChangeInputPhrase = event => {
        const {value} = event.target
        this.setState({inputPhrase: value})

    }
    render(){
        const {inputPhrase} = this.state

        return(
            <div className="app-container">
                <div className="letters-calucalor-container">
                    <div className="calculator-container">
                        <h1 className="heading">Calculate the letters you enter</h1>

                        <div className="input-phrase-container">
                            <label className="label" htmlFor="phraseText">Enter the phrase</label>
                            <input
                            type="text"
                            className="letters-input"
                            placeholder="Enter the Phrase"
                            onChange={this.onChangeInputPhrase}
                            id="phraseText"
                            value={inputPhrase}/>
                        </div>
                        <p className="letters-count">No.of Letters: {inputPhrase.length}</p>
                    </div>
                    <img 
                    src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
                    alt="letters calculator"
                    className='letters-calculator-image'
                    />
                </div>
            </div>
        )
    }

}
export default LettersCalculator