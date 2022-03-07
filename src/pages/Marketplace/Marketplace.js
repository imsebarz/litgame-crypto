import { useEffect, useState } from "react"
import { Button, Col, Container, Row, Spinner } from "react-bootstrap"
import { Link } from "react-router-dom"
import Card from "./Components/Card"
import ModalLogin from "./Components/ModalLogin"
import './styles.scss'

const Marketplace = () => {

    const [show, setShow] = useState(false)
    const [cards, setCards] = useState()
    const [loading, setLoading] = useState(true)
    const handleShow = () => setShow(true)
    const handleClose = () => setShow(false)


    const getCards = async () => {
        const myNumber = Math.floor(Math.random() * 4100)
        const response = await fetch('https://api.hearthstonejson.com/v1/133122/enUS/cards.collectible.json')
        const resultsJSON = await response.json()
        const results = resultsJSON.slice(myNumber, myNumber + 18)

        setCards(results)
        setLoading(false)
    }

    useEffect(() => {
        console.log(cards)
    }, [cards])


    useEffect(() => {
        getCards()
    }, [])



    return (
        <>
            <ModalLogin show={show} close={handleClose}></ModalLogin>
            <Container className="mt-5">
                <Row>
                    <h1>Marketplace</h1>
                </Row>
                <Row className='gap-3 mt-5 justify-content-center'>
                    {!loading ? cards?.map((item) => (
                        <Card name={item.name} id={item.id} handleShow={handleShow}></Card>

                    )) : <Spinner animation="border" variant="primary" />
                    }
                </Row>
            </Container>
        </>
    )
}

export default Marketplace