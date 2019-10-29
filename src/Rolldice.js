import React, {Component} from 'react'
import Die from './Die'
import './Rolldice.css'


class Rolldice extends Component {
    static defaultProps = {
        sides: ['one', 'two', 'three', 'four', 'five', 'six']
    }
    constructor(props) {
        super(props)
        this.state = {die1:'one', die2:'two'}
        this.roll = this.roll.bind(this)
    }
    roll(e) {
        const randNum1 = Math.floor(Math.random()*this.props.sides.length)
        const randNum2 = Math.floor(Math.random()*this.props.sides.length)
        this.setState({die1:this.props.sides[randNum1], die2:this.props.sides[randNum2]})
    }
    render() {
        return (
        <div className='Rolldice'>
            <div className='Rolldice-container'>
                <Die face={this.state.die1}/>
                <Die face={this.state.die2}/>
            </div>
            <button onClick={this.roll}>Roll Dice</button>
        </div>)

    }
}

export default Rolldice