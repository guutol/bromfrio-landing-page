import React from 'react'
import about from "../images/about.png";
import Common from './Common'

const About = () => {
    return (
        <>
            <Common 
                name='Quem nós somos?' 
                imgsrc={about} 
                visit='/contact' 
                btnname="Contate agora"
                text= "Mais de 20 anos de experiência em manutenção de refrigeração, oferecendo serviços com qualidade, agilidade e confiança"
            />
        </>
    )
}

export default About