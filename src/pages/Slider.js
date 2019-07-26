import React from 'react'
import * as constants from "../configs/constants";

class Slider extends React.Component {

    constructor(props){
        super(props)
        document.title='آلبوم'
    }

    state = {
        currentId: 0
    }

    next = () => {
        let i = this.state.currentId + 1;
        if (i > 2)
            i = 0;
        this.setState({
            currentId: i
        })

    }
    previous = () => {
        let i = this.state.currentId - 1;
        if (i < 0)
            i = 2;
        this.setState({
            currentId: i
        })

    }

    render() {

        return (
            <div>

                <img className='img-fluid' alt={constants.imgList[this.state.currentId].alt}
                     src={constants.imgList[this.state.currentId].src}/>
                <button className="btn fa-mouse-pointer " href='#' onClick={this.previous}>&#10094;</button> &nbsp;
                <button className="btn" onClick={this.next} href='#'>&#10095;</button>
            </div>

        )
    }
}

export default Slider;