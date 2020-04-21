import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../../styles/Header.css';


function Header(props) { 
    const [title] = useState(props.title);
  return (
    <Container  className="app-header" fluid>
        <Row className="header-title">
            <Col>
                <h1 className="font-weight-bold text-center">{title}</h1>
            </Col>
        </Row>
    </Container>
  );
}

export default Header;