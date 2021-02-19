import React from 'react'
import { Col, Row } from 'react-bootstrap'

const Footer = () => {
    return (
        <>
            <footer className="text-center text-lg-start">
                <div className="text-center p-3">
                <Row bg="dark">
                    <Col >
                        <span className="color-text"><strong>© 2020 Copyright: alejojimenez.</strong></span>
                    </Col>        
                </Row>
                </div>
            </footer>             
        </>
    )
}

export default Footer;