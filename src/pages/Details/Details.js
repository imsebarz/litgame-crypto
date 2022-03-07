import React, { useEffect, useState } from 'react'
import { Card, Container } from 'react-bootstrap';
import { useParams } from "react-router-dom";
import './styles.scss'


const Details = () => {
    const params = useParams();
    const [card, setCard] = useState()

    const getCardDetails = async (id) => {
        const response = await fetch('https://api.hearthstonejson.com/v1/133122/enUS/cards.collectible.json')
        const resultsJSON = await response.json()
        const cards = resultsJSON.slice()
        cards.forEach((item) => {
            if (item.id === id) {
                setCard(item)
            }
        })
    }


    useEffect(() => {
        getCardDetails(params.cardId)
    }, [params.cardId])

    useEffect(() => {
        console.log(card)
    }, [card])


    return (
        <Container className='cards-container w-auto flex-md-nowrap flex-wrap d-flex flex-row m-5 gap-3'>
            {/* <h1>Details from {params.cardId}</h1> */}
            <Card className='art w-50 h-auto shadow'>
                <img
                    src={`https://art.hearthstonejson.com/v1/render/latest/enUS/512x/${params.cardId}.png`}
                    className="p-3 pb-1"
                    alt=""
                // onLoad={() => setLoaded(true)}
                />
            </Card>
            <Card className='details shadow w-100 h-auto d-flex flex-row justify-content-between m-auto p-5'>
                <div className='row w-100 h-100'>
                    {card && Object.keys(card).map(item =>
                        card[item] == '' ? '' :
                            (
                                <div className="col-md-6 col-sm-12 h-auto p-1">
                                    <small className='text-secondary'>{item.toUpperCase()}</small>
                                    <h6 className='text-primary display-4 fs-5 fw-bold'>{card[item].toString()}</h6>
                                </div>
                            ))}
                </div>
            </Card>
        </Container >
    )
}

export default Details