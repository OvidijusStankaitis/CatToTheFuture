import { useEffect, useState } from 'react';
import Org from './org';
import './App.css';

const App: React.FC = () => {

  const [days, setDays] = useState(0)
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)

    useEffect(() =>{
      const target = new Date("10/13/2022 22:59:59")
      var now = new Date()
      var difference = target.getTime() - now.getTime()
      SetClock(difference)

      function SetClock(difference: number){
        const d = Math.floor(difference / (1000 * 60 * 60 * 24))
        setDays(d)

        const h = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        setHours(h)

        const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
        setMinutes(m)

        const s = Math.floor((difference % (1000 * 60)) / 1000)
        setSeconds(s)
      }

      const interval = setInterval(() => {
        now = new Date()
        difference = target.getTime() - now.getTime()
        if(difference <= 1)
        {
          clearInterval(interval);
          return;
        }
        SetClock(difference)

        
      }, 1000)

      
    }, [])
  return (
    <div className="App">
      <div className="Heading">ATGAL Į KATEITĮ</div>
      <div className="Left">IKI RENGINIO PABAIGOS LIKO</div>
      <div className="delayed">
      <div className="Clock mobile-noshow">
        <div className="DM">{days < 10 ? "0" : ""}{days}:</div>
        <div className="HS">{hours < 10 ? "0" : ""}{hours}:</div>
        <div className="DM">{minutes < 10 ? "0" : ""}{minutes}:</div>
        <div className="HS">{seconds < 10 ? "0" : ""}{seconds}</div>
      </div>
      <div className="Clock mobile">
        <div className="DM">{days < 10 ? "0" : ""}{days}</div>
        <div className="HS">{hours < 10 ? "0" : ""}{hours}</div>
        <div className="DM">{minutes < 10 ? "0" : ""}{minutes}</div>
        <div className="HS">{seconds < 10 ? "0" : ""}{seconds}</div>
      </div> 
      <a href="https://www.google.com/">NUORODA Į UŽDUOTIS</a>
    </div> 
    </div>
  );
}

export default App;
