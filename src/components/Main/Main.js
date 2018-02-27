import React, { Component } from 'react'

import { Badge, RoundedImage }  from 'egw-react-components'

import './Main.css'
import '../../assets/theme/Common.css'

export default class MainPage extends Component {

    render() {
        const JavascriptImage = require('../../assets/images/javascript.png')
        const ReactImage = require('../../assets/images/react.png')
        return(
            <section className='Main-Page'>
                <h1 className='FadeInTransition CenteredText'> Esteban Gabriel García Warnecke </h1>
                <section className='Disclaimer CenteredText'>
                    <p>Me encanta crear y diseñar cosas. En mi cabeza no solo se proyectan algoritmos, clases y objetos, si no que visualizo problemas, productos y nuevas formas de solucionarlos. 
                    En fin, intentar mejorar la vida de las personas. Combinando esta faceta que me encanta, con los lenguajes de programación, todo el tiempo me encuentro con el desafío 
                    de llevar a cabo una idea a la realidad.
                    Mi mayor ambición dentro del mundo de IT es "estar donde las cosas pasan". 
                    Participar de las entrevistas con posibles clientes, proponer soluciones, diseñarlas, programarlas, conocer personas y trabajar con ellas. 
                    Esa es mi visión, la visión de crear soluciones a problemas. </p>
                </section>
                <div className="Technical-Skills">
                    <Badge name="Javascript" image={ JavascriptImage } />
                    <Badge name="React" image={ ReactImage } />
                    <Badge name="Javascript" />
                    <Badge name="Javascript" />
                    <Badge name="Javascript" />
                    <Badge name="Javascript" />
                </div>
                {/* <RoundedImage src={ ReactImage } size="small" />  */}
            </section>
        )
        
    }
} 