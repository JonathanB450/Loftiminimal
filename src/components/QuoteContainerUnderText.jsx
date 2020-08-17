import React from 'react'
import '../styles/QuoteContainerUnderText.css'

class QuoteContainer extends React.Component{
    render(){
        return(
            <div className="QuoteContainerUnderText">
                <div className="Content">
                    <p className="Title">{this.props.quote}</p>
                    <p className="UnderText">{this.props.underText}</p>
                    <div className="Line"></div>
                    <p>{this.props.description}</p> 
                </div>
            </div>
        )
    }
}

export default QuoteContainer