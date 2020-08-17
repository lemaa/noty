import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FooterStyle } from '../../styles/Footer';

function Footer(props) { 
  return (
    <FooterStyle  className="container-fluid">
        <Row className="footer-title">
            <Col>
                 {props.children}
            </Col>
        </Row>
    </FooterStyle>
  );
}

export default Footer;