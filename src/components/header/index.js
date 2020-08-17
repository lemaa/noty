import React, { useState } from "react";
import Col from 'react-bootstrap/Col';
import { HeaderStyle, HeaderTitle } from '../../styles/Header';


function Header(props) { 
    const [title] = useState(props.title);
  return (
    <HeaderStyle  className="app-header" fluid>
        <HeaderTitle className="header-title">
            <Col>
                <h1 className="font-weight-bold text-center">{title}</h1>
            </Col>
        </HeaderTitle>
    </HeaderStyle>
  );
}

export default Header;