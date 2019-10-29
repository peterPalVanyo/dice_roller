import React, {Component} from 'react'
import Die from './Die'
import './Rolldice.css'


class Rolldice extends Component {
    static defaultProps = {
        sides: ['one', 'two', 'three', 'four', 'five', 'six']
    }
    constructor(props) {
        super(props)
        this.state = {die1:'one', die2:'two', isRoll:false}
        this.roll = this.roll.bind(this)
    }
    roll(e) {
        const randNum1 = Math.floor(Math.random()*this.props.sides.length)
        const randNum2 = Math.floor(Math.random()*this.props.sides.length)
        this.setState({isRoll:true})
        setTimeout(() => {this.setState({die1:this.props.sides[randNum1], die2:this.props.sides[randNum2], isRoll:false})}, 1000)
    }
    render() {
        return (
        <div className='Rolldice'>
            <div className='Rolldice-container'>
                <Die face={this.state.die1} isRoll={this.state.isRoll}/>
                <Die face={this.state.die2} isRoll={this.state.isRoll}/>
            </div>
            <button onClick={this.roll} disabled={this.state.isRoll} className={`${this.state.isRoll && 'isRoll'}`}>
            {this.state.isRoll?'Rolling...':'Roll Dice'}
            </button>
        </div>)

    }
}

export default Rolldice