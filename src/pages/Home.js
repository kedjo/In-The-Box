import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export const Home = () => {
    return (
        <Container fluid id="home">
            {/* <Image src="../res/killua.png" roundedCircle /> */}
            <div className="home-left">

            </div>
                
            <div className="home-center">
                <h1 data-aos="fade-down" data-aos-duration="1500">Hello, welcome</h1>
                <h2 data-aos="fade-left" data-aos-duration="2000">My name is <span>Kedjo</span></h2>
                <h3 data-aos="fade-right" data-aos-duration="2000">Developper</h3>
            </div>

            <div className="home-right">

            </div>
        </Container>
    )
}


