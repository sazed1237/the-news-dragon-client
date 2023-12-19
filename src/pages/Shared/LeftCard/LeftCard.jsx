import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import first from '../../../assets/1.png'
import second from '../../../assets/2.png'
import third from '../../../assets/3.png'
import { FaRegCalendar } from 'react-icons/fa';
import moment from 'moment/moment';

const LeftCart = () => {
    return (
        <div>
            <Row className=" mb-4 mt-5">
                <Col>
                    <Card>
                        <Card.Img variant="top" src={first} />
                        <Card.Body>
                            <Card.Title>Bayern Slams Authorities Over Flight Delay to Club World Cup</Card.Title>
                            <Card.Text>
                                
                            </Card.Text>
                            <div className='d-flex align-items-center'>
                                <p className='flex-grow-1'>Sports</p>
                                <p><small>
                                    <FaRegCalendar></FaRegCalendar>{moment().format("MMM D, yyy")}
                                </small></p>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Card>
                        <Card.Img variant="top" src={second} />
                        <Card.Body>
                            <Card.Title>Bayern Slams Authorities Over Flight Delay to Club World Cup</Card.Title>
                            <Card.Text>
                                
                            </Card.Text>
                            <div className='d-flex align-items-center'>
                                <p className='flex-grow-1'>Sports</p>
                                <p><small>
                                    <FaRegCalendar></FaRegCalendar>{moment().format("MMM D, yyy")}
                                </small></p>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row className="mt-4">
                <Col>
                    <Card>
                        <Card.Img variant="top" src={third} />
                        <Card.Body>
                            <Card.Title>Bayern Slams Authorities Over Flight Delay to Club World Cup</Card.Title>
                            <Card.Text>
                               
                            </Card.Text>
                            <div className='d-flex align-items-center'>
                                <p className='flex-grow-1'>Sports</p>
                                <p><small>
                                    <FaRegCalendar></FaRegCalendar>{moment().format("MMM D, yyy")}
                                </small></p>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>

            </Row>
        </div>
    );
};

export default LeftCart;