 
import styled from 'styled-components'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
  
const HeaderStyle = styled(Container)`
    background: rgb(0, 0, 0);
    -webkit-box-shadow: -1px 4px 20px 1px #212529;
    -moz-box-shadow: -1px 4px 20px 1px #212529;
    box-shadow: -1px 4px 20px 1px #212529;
`;


const HeaderTitle = styled(Row)`
    letter-spacing: 3.6px;
    word-spacing: 0.6px;
    color: #e3e3e3;
    padding: 12px;
    text-shadow: -1px 7px 5px #c1cacc;
`;
export { HeaderStyle, HeaderTitle};
