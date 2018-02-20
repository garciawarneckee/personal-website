import React, { Component } from 'react'

import RoundedImage from '../RoundedImage'

import './Main.css'
import '../../assets/theme/Common.css'

export default class MainPage extends Component {
    render() {
        return(
            <div>
                <div className="ReallyBigText"> Holaaaaaaaa </div>
                <RoundedImage src={ require("../../assets/images/javascript.png") } injectedStyle="Small-Img" />
            </div>
        )
        
    }
} 