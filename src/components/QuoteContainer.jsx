import React from 'react'
import '../styles/QuoteContainer.css'

class QuoteContainer extends React.Component{
    render(){
        return(
            <div className="QuoteContainer">
                <div className="Content">
                    <p className="Title">{this.props.quote}</p>
                    <div className="Line"></div>
                    <p>{this.props.description}</p> 
                </div>
            </div>
        )
    }
}

export default QuoteContainer