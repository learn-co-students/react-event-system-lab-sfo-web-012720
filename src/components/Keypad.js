import React, { Component } from 'react'

export default class Keypad extends Component {

    onKeyUp = () => {
        console.log("Entering password...")
    }

    render() {
        return (
            <div>
                <input onKeyUp={this.onKeyUp} type="password" />
            </div>
        )
    }
}
