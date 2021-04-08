import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

export const Error = () => {
    return (
        <Container fluid id="error">
            {/* <Image src="../res/killua.png" roundedCircle /> */}
            <div className="error-left">

            </div>
                
            <div className="error-center">
                <div className="error-message">
                    <h1>404</h1>
                    <h2>Not found</h2>
                    <a href="/"><Button variant="light">Return to the Box</Button></a>
                </div>
            </div>

            <div className="error-right">

            </div>
        </Container>
    )
}
