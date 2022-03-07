import { Col, Container, Row } from "react-bootstrap"
import './styles.scss'
import EthIcon from './assets/eths.svg'
import ClockIcon from './assets/Vector.svg'
import CardsIcon from './assets/Vector-1.svg'
import Slider from './Components/Slider'
const Dashboard = () => {
    return (
        <>
            <Container className="mt-5">
                <Container className="w-75 mt-5 mb-5">
                    <Row>
                        <Col className="shadow justify-content-center p-5 bg-white mt-3 mb-3 mw-75" id='home-stats'>
                            <Row>
                                <h3 className="text-center display-6 pb-3">Dashboard</h3>
                            </Row>
                            <Row className="justify-content-center justify-content-xlg-between gap-2 gap-xlg-5 h-25 text-white">
                                <Col className="info shadow d-flex flex-row bg-primary align-items-center  flex-grow-0">
                                    <Col className="w-auto flex-grow-0 ">
                                        <img
                                            src={ClockIcon}
                                            width="60"
                                            height="60"
                                            className="d-inline-block align-top w-auto m-2"
                                            alt=""
                                        />
                                    </Col>
                                    <Col className='p-3'>
                                        <Row className='fw-bold fs-3 justify-content-center'>01-01-2022</Row>
                                        <Row className="justify-content-center">last seen</Row>
                                    </Col>
                                </Col>
                                <Col className="info shadow cards d-flex flex-row align-items-center flex-grow-0">
                                    <Col className="w-auto flex-grow-0 p-1">
                                        <img
                                            src={CardsIcon}
                                            width="60"
                                            height="60"
                                            className="d-inline-block align-top w-auto m-2"
                                            alt=""
                                        />
                                    </Col>
                                    <Col className='p-3'>
                                        <Row className='fw-bold fs-3 justify-content-center'>22</Row>
                                        <Row className="justify-content-center">Cards</Row>
                                    </Col>
                                </Col>
                                <Col className="info shadow d-flex flex-row bg-success align-items-center flex-grow-0">
                                    <Col className="w-auto flex-grow-0">
                                        <img
                                            src={EthIcon}
                                            width="60"
                                            height="60"
                                            className="d-inline-block align-top w-auto m-2"
                                            alt=""
                                        />
                                    </Col>
                                    <Col className='p-3'>
                                        <Row className='fw-bold fs-3 justify-content-center flex-grow-0'>0.0023</Row>
                                        <Row className="justify-content-center">Eth's</Row>
                                    </Col>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </Container>
            <Slider></Slider>
        </>
    )
}

export default Dashboard