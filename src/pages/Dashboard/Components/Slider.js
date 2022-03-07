import React from 'react'
import { Carousel } from 'react-bootstrap'
import '../styles.scss'

const Slider = () => {
    return (
        <Carousel className>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://i0.wp.com/criptotendencia.com/wp-content/uploads/2021/10/Axie-Infinity-esta-desarrollando-un-exchange-descentralizado.jpg?fit=1200%2C675&ssl=1"
                    alt="First slide"
                    height='300'
                />
                <Carousel.Caption>
                    <h1>New game mode available</h1>
                    <p>Enter now and find out what it is!</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://www.elgrupoinformatico.com/static/Noticias/2021/08/axie-juego-1200x675.jpg"
                    alt="Second slide"
                    height='300'
                />

                <Carousel.Caption>
                    <h1>Discover more about our universe</h1>
                    <p>Official documentation on our website</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://i0.wp.com/observadorlatino.com/wp-content/uploads/2022/01/Inflacion-en-el-token-SLP-de-Axie-Infinity-no-es-sostenible.png?resize=696%2C348&ssl=1"
                    alt="Third slide"
                    height='300'
                />

                <Carousel.Caption>
                    <h1>New scenarios to play</h1>
                    <p>Learn more</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel >
    )
}

export default Slider