import React from 'react'
import '../styles/ImageContainer.css'

class ImageContainer extends React.Component{
    render(){
        return(
            <div className="ImageContainer">
                <img src={this.props.img} alt=""/>
            </div>
        )
    }
}

export default ImageContainer