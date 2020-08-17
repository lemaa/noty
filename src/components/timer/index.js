import React , { useState , useRef}  from 'react';
import '../../styles/Timer.css';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function returnFormattedToSeconds(time){
    let hours = Math.floor(time / 3600);
    let minutes = Math.floor(time % 3600 / 60);
    let seconds = Math.round(time  % 3600 % 60);

    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    return hours + ":" + minutes + ":" + seconds;
}

function TimerClock(props) {
    const [duration, setDuration] = useState(1); //elapsed time
    const [clockTick, setClockTick] = useState(props.duration); //elapsed time
    let timerTime = duration * 60;
    const intervalRef = useRef(0);
    const prevTimerTimeRef = useRef(0);

    const startTimer = () =>{
 
        clearInterval(intervalRef.current);
 
        intervalRef.current = setInterval(() => {
             if(prevTimerTimeRef.current !== 0 ){
                timerTime = prevTimerTimeRef.current;
            }
             timerTime--;
            prevTimerTimeRef.current = timerTime;
            let formattedText =  returnFormattedToSeconds(timerTime);
            setClockTick(formattedText);
            if (timerTime <= 0) {
                pauseTimer();
            }
        }, 1000);
     };

    const pauseTimer = () =>{
        clearInterval(intervalRef.current);
     };

     const resetTimer = () =>{
        pauseTimer();
        prevTimerTimeRef.current = 0;
        let formattedText =  returnFormattedToSeconds(duration * 60);
        setClockTick(formattedText);
     };
 

     return (
        <div className="timer-clock row justify-content-center">
            <Col md="auto" >
                <div className="control-timer-group">
                    <Row>
                        <Form.Control type="number"  placeholder ="Minutes" className="timer-time" onChange={e => setDuration(e.target.value)}/>
                        <button className="timer-btn start" onClick={startTimer}><img className='control-icon' src={process.env.PUBLIC_URL + `assets/play-button.png`} alt="controller play timer"/> </button>
				        <button className="timer-btn pause" onClick={pauseTimer}><img className='control-icon' src={process.env.PUBLIC_URL + `assets/pause.png`} alt="controller pause timer"/> </button>
				        <button className="timer-btn reset" onClick={resetTimer}><img className='control-icon' src={process.env.PUBLIC_URL + `assets/repeat.png`} alt="controller repeat timer"/></button>
                    </Row>
                </div>
            </Col>
            <Col xs={12} >
                <div className="timer-group">
                    <div className="timer hour">
                    <div className="hand"><span></span></div>
                    <div className="hand"><span></span></div>
                </div>
                    <div className="timer minute">
                    <div className="hand"><span></span></div>
                    <div className="hand"><span></span></div>
                </div>
                    <div className="timer second">
                    <div className="hand"><span></span></div>
                    <div className="hand"><span></span></div>
                </div>    
                    <div className="face">
                    <p className="clock-text">{clockTick}</p>  
                    <h5 className="clock-subtext">{timerTime > 0 ? `still ${clockTick} to go`: `Your time is up!`}</h5>

                </div>
                </div>
            </Col>
        </div>
  );
  }

export default TimerClock;
