import React  from 'react';
import Container from 'react-bootstrap/Container';
import TimerClock from './../components/timer/index';

const Timer = () => {
 
    return (
        <Container className="main-section" fluid>
            <TimerClock />
         </Container>          
    );
  }
  
export default Timer;
