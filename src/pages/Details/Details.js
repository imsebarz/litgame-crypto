import React, { useEffect, useState } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useParams } from "react-router-dom";
import './styles.scss'


const Details = () => {
    const params = useParams();
    const [card, setCard] = useState()

    const getCardDetails = async (id) => {
        const myNumber = Math.floor(Math.random() * 4100)
        const response = await fetch('https://api.hearthstonejson.com/v1/133122/enUS/cards.collectible.json')
        const resultsJSON = await response.json()
        const cards = resultsJSON.slice()
        let card = cards.forEach((item) => {
            if (item.id === id) {
                setCard(item)
            }
        })
    }


    useEffect(() => {
        getCardDetails(params.cardId)
    }, [])

    useEffect(() => {
        console.log(card)
    }, [card])


    return (
        <Container className='cards-container d-flex flex-row m-5 gap-3'>
            {/* <h1>Details from {params.cardId}</h1> */}
            <Card className='art w-25'>
                <img
                    src={`https://art.hearthstonejson.com/v1/render/latest/enUS/512x/${params.cardId}.png`}
                    className="p-3 pb-1"
                    alt=""
                // onLoad={() => setLoaded(true)}
                />
            </Card>
            <Card className='details w-75 d-flex flex-row justify-content-between m-auto p-5'>
                <div className='w-100'>
                    {card && Object.keys(card).forEach(item => (
                        <div>
                            <h3>{item}</h3>
                            <p>{card[item]}</p>
                        </div>
                    ))}
                </div>
                <div className='w-100'>
                    <div>
                        <h3>Hola</h3>
                        <p>cosito</p>
                    </div>
                    <div>
                        <h3>Hola</h3>
                        <p>cosito</p>
                    </div>
                    <div>
                        <h3>Hola</h3>
                        <p>cosito</p>
                    </div>
                </div>
            </Card>
        </Container>
    )
}

export default Details