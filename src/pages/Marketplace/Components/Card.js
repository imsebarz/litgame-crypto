import React, { useState } from 'react'
import { Col, Card as C, Row, Button, Spinner } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../styles.scss'

const Card = ({ name, handleShow, id }) => {

    const [loaded, setLoaded] = useState(false)
    return (
        <Col className='position-relative'>
            <C className="card bg-white align-items-center pb-2 pt-1">
                <Row className="image flex-grow-1">
                    <img
                        src={`https://art.hearthstonejson.com/v1/render/latest/enUS/512x/${id}.png`}
                        className="p-3 pb-1"
                        alt=""
                        onLoad={() => setLoaded(true)}
                    />
                </Row>
                <Row className="name w-100 ps-3 flex-grow-1 fs-5 fw-bold text-start text-truncate d-inline-block">{name}</Row>
                <Row className="w-100 ps-3  flex-grow-1 gap-3">
                    {!loaded ? <Spinner variant='primary' animation='border' className='position-absolute top-0 end-0'></Spinner> : ""}
                    <Link to={`/details/${id}`} className="btn-primary btn-sm w-auto h-75 fw-bold">VIEW</Link>
                    <Button className="btn-sm w-auto h-75 fw-bold" onClick={handleShow} variant="outline-success">BUY</Button>
                </Row>
            </C>
        </Col>
    )
}

export default Card