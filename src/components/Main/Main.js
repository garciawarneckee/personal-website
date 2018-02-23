import React, { Component } from 'react'

import { RoundedImage }  from 'egw-react-components'

import './Main.css'

export default class MainPage extends Component {

    render() {
        const JavascriptImage = require("../../assets/images/javascript.png")
        return(
            <div>
                <RoundedImage src={ JavascriptImage } size="small" />
            </div>
        )
        
    }
} 