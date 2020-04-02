// Code EyesOnMe Component Here
import React from 'react'



class EyesOnMe extends React.Component{

    Focus = () => (
        console.log("Good!")
    )

    Blur = () => (
        console.log("Hey! Eyes on me!")
    )
    render = () => {
        return (
            <div>
                <button onFocus={this.Focus} 
                onBlur={this.Blur}/>
            </div>
        )
    }
}





export default EyesOnMe;