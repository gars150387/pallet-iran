import React from 'react'
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card } from 'react-bootstrap';

import '../style/about.css';

import '../img/37d5499f-af1e-46ca-a14a-892a230d5aa0.jpg'
import '../img/PHOTO-2022-03-24-15-34-37.jpg'
import '../img/PHOTO-2022-03-24-15-34-13.jpg'

export const About = () => {
    return (
        <Container className='aboutContainer'>
            <Row>
                <Col md={7} className='text-about'>
                    <h4 >
                        Pallet305 is a company that was born in 2019, it specializes in creating, designing and modifying outdoor furniture, our product is exported from Spain, which is certified and treated.
                    </h4>
                    <br />
                    <h4 >
                        Some of our most demanded jobs for patios are sofas, coffee tables, planters, bars, loungers, mailboxes and much more variety. For interiors, custom beds, sliding doors, etc.
                    </h4>
                    <br />
                    <h4 >
                        We build pergolas and wooden floors (PT) to everyone's taste and satisfaction.
                        Our priority is the customer, we are proud to be able to provide the best service and quality with our products.
                    </h4>
                    <br />
                    <Link to="/design">
                        <h4 className='animate__animated animate__pulse'>
                            ... view our work here
                        </h4>
                    </Link>
                </Col>
                <Col id='imgAbout'>
                    <Card.Img variant="" src={require("../img/37d5499f-af1e-46ca-a14a-892a230d5aa0.jpg")} style={{ paddingTop: "22px" }} />
                </Col>
            </Row>
            <hr />
            <Row>
                <Col >
                    <Card.Img id='magazine' src={require('../img/PHOTO-2022-03-24-15-34-37.jpg')} alt='PHOTO-2022-03-24-15-34-37' />
                </Col>
            </Row>
            <Row>
                <Col>
                    <Card.Img id='magazine' src={require("../img/PHOTO-2022-03-24-15-34-13.jpg")} alt='PHOTO-2022-03-24-15-34-13' />
                </Col>
            </Row>

        </Container>
    )
}