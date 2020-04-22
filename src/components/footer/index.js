import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../../styles/Footer.css';

function Footer(props) { 
  return (
    <Container  className="footer" fluid>
        <Row className="footer-title">
            <Col>
                 {props.children}
            </Col>
        </Row>
    </Container>
  );
}

export default Footer;