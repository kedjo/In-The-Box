import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { CarouselNews } from "../components/CarouselNews";
import { Apod } from "../components/Apod";
import { NavNews } from "../components/NavNews";


export const News = () => {
    return (
        <Container fluid id="news">
            <Row>
                <Col lg={1} sm={false}>

                </Col>

                <Col lg={10}>
                    <Row className="news-row" id="news-apod">
                        <Apod />
                    </Row>
                    <Row className="news-row" id="news-fr">
                        <div data-aos="fade-right" data-aos-duration="1500" >
                            <h2>Actualités En France</h2>
                        </div> 
                        <CarouselNews source="fr" />
                    </Row>
                    <Row className="news-row" id="news-us">
                        <div data-aos="fade-right" data-aos-duration="1500">
                            <h2>Actualités aux Etats-Unis</h2>
                        </div>
                       
                        <CarouselNews source="us" />
                    </Row>
                </Col>

                <Col lg={1} sm={false}>
                    <NavNews />
                </Col>
            </Row>  
        </Container>
    )
}
