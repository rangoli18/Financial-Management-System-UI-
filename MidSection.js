import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MidSection = () => {
    return (
        <section>
            <Container>
                <Row>
                    <Col className="text-center pb-4 pt-5">
                        <h3 className="text-h2 font-weight-bold">LET'S GO AHEAD
                        <div className="font-weight-bold"></div>
                        </h3>
                        <p className="sub-text" style={{ color: "#0000009a", fontWeight: "400" }}>Track your daily income and expenses effortlessly, and master the art of budgeting with ease.</p>
                        <Link to="/register" className="btn btn-dark mb-1">Create an account, it's free</Link>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default MidSection
