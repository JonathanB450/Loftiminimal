import React from 'react'
import Menu from '../components/Menu'
import Header from '../components/Header'
import QuoteContainer from '../components/QuoteContainer'
import QuoteContainerUnderText from '../components/QuoteContainerUnderText'
import ImageContainer from '../components/ImageContainer'
import Footer from '../components/Footer'
import Image1 from '../assets/iStock-905942188.png'
import Image2 from '../assets/Mask Group 1.png'
import Image3 from '../assets/iStock-499887682.png'
import '../styles/App.css'
import '../styles/Normalizer.css'

const App = () => {
    return(
        <div id="AppContainer">
            <Menu/>
            <Header/>
            <div className="Block">
                <QuoteContainer
                    quote="Live and Invest in Medellin"
                    description="Loftminimal is a customized, Medellin-located, real-estate agency specialized in investors as well as state-of-the-art residential properties. "
                />
                <ImageContainer
                    img={Image1}
                /> 
            </div>
            <div className="Block">
                <ImageContainer
                    img={Image2}
                /> 
                <QuoteContainerUnderText
                    quote="Medellin is changing and growing. Fast."
                    underText="Faster than many could ever expect, but at Loftminimal we are aware of this."
                    description="That’s why we trust you with true professionals at the moment of buying or selling a property in one of major development centers of the Americas, because based under the principle of PEOPLE FIRST we know that your trust and confidence is key when your next investment is on the table."
                />
            </div>
            <div className="Block">
                <QuoteContainer
                    quote="Start experiencing life"
                />
                <ImageContainer
                    img={Image3}
                /> 
            </div>
            <Footer/>
        </div>
    )
}

export default App