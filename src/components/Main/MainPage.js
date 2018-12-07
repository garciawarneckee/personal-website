import React, { Component } from 'react'

import { Badge }  from 'egw-react-components'

import './Main.css'
import '../../assets/theme/Common.css'

export default class MainPage extends Component {

    render() {
        const JavascriptImage = require('../../assets/images/javascript.png')
        const ReactImage = require('../../assets/images/react.png')
        return(
            <section className='Main-Page'>
                <h1 className='FadeInTransition CenteredText'> Esteban Gabriel García Warnecke </h1>
                <h2> Soñador. Creador. Desarrollador </h2>
                <div className="Technical-Skills">
                </div>
            </section>
        )
        
    }
} 