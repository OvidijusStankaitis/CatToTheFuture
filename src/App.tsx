import { useEffect, useState } from 'react';
import './App.css';
import Sus from "./Assets/sus.jpg"
import { ExpandMore } from '@mui/icons-material';
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material';


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
      </div> 
      <a href="https://www.google.com/">NUORODA Į UŽDUOTIS</a>
      <Accordion sx = {{
      backgroundColor: "rgba(0, 0, 0, 0)", 
      boxShadow: "0",
      '& .MuiSvgIcon-root': {
        color: '#fff'
      },
      '&:before': {
        display: 'none',
      }}}>
        <AccordionSummary  expandIcon={<ExpandMore />}>
          <div className="Vadovai">VADOVAI</div>
        </AccordionSummary>
          <AccordionDetails>
          <div className="Grid-container">
            <div className="grid-item">
              <img src={Sus} alt="" className="Picture"/>
              <div className="Org">
                <div>IT</div>
                <div>OVIDIJUS STANKAITIS</div>
              </div>
            </div>
            <div className="grid-item">
              <img src={Sus} alt="" className="Picture"/>
              <div className="Org">
                <div>ORGANIZAVIMAS</div>
                <div>GYTIS BUKNIUS</div>
              </div>
            </div>
            <div className="grid-item">
              <img src={Sus} alt="" className="Picture"/>
              <div className="Org">
                <div>KOMUNIKACIJA</div>
                <div>MONIKA MIRBAKAITĖ</div>
              </div>
            </div>
            <div className="grid-item">
              <img src={Sus} alt="" className="Picture"/>
              <div className="Org">
                <div>MARKETINGAS</div>
                <div>DANIELIUS VENSKŪNAS</div>
              </div>
            </div>
          </div>
          </AccordionDetails>
      </Accordion>
      <Accordion sx = {{
      backgroundColor: "rgba(0, 0, 0, 0)", 
      boxShadow: "0",
      '& .MuiSvgIcon-root': {
        color: '#fff'
      },
      '&:before': {
        display: 'none',
      }}}>
        <AccordionSummary  expandIcon={<ExpandMore />}>
          <div className="Vadovai">ORGANIZATORIAI</div>
        </AccordionSummary>
          <AccordionDetails>
            <div className="Grid-container">
              <div className="grid-item">
                <img src={Sus} alt="" className="Picture"/>
                <div className="Org">
                  <div>VYTENIS NARMONTAS</div>
                </div>
              </div>
              <div className="grid-item">
                <img src={Sus} alt="" className="Picture"/>
                <div className="Org">
                  <div>GABRIELĖ DRUNGILAITĖ</div>
                </div>
              </div>
              <div className="grid-item">
                <img src={Sus} alt="" className="Picture"/>
                <div className="Org">
                  <div>EGLĖ ORINTAITĖ</div>
                </div>
              </div>
              <div className="grid-item">
                <img src={Sus} alt="" className="Picture"/>
                <div className="Org">
                  <div>VAIVA JANAVIČIŪTĖ</div>
                </div>
              </div>
              <div className="grid-item">
                <img src={Sus} alt="" className="Picture"/>
                <div className="Org">
                  <div>BARBORA ŠINKEVIČIŪTĖ</div>
                </div>
              </div>
              <div className="grid-item">
                <img src={Sus} alt="" className="Picture"/>
                <div className="Org">
                  <div>ROKAS BALTRUŠAITIS</div>
                </div>
              </div>
              <div className="grid-item">
                <img src={Sus} alt="" className="Picture"/>
                <div className="Org">
                  <div>UGNĖ BAUBLYTĖ</div>
                </div>
              </div>
              <div className="grid-item">
                <img src={Sus} alt="" className="Picture"/>
                <div className="Org">
                  <div>UGNĖ MEŠKUOTYTĖ</div>
                </div>
              </div>
              <div className="grid-item">
                <img src={Sus} alt="" className="Picture"/>
                <div className="Org">
                  <div>SIMONAS URBUTIS</div>
                </div>
              </div>
              <div className="grid-item">
                <img src={Sus} alt="" className="Picture"/>
                <div className="Org">
                  <div>AISTĖ IVANAUSKAITĖ</div>
                </div>
              </div>
              <div className="grid-item">
                <img src={Sus} alt="" className="Picture"/>
                <div className="Org">
                  <div>AKVILĖ ROPYTĖ</div>
                </div>
              </div>
              <div className="grid-item">
                <img src={Sus} alt="" className="Picture"/>
                <div className="Org">
                  <div>MĖTA ŽEMAITYTĖ</div>
                </div>
              </div>
              <div className="grid-item">
                <img src={Sus} alt="" className="Picture"/>
                <div className="Org">
                  <div>EIDVILĖ SATEIKAITĖ</div>
                </div>
              </div>
              <div className="grid-item">
                <img src={Sus} alt="" className="Picture"/>
                <div className="Org">
                  <div>LUKAS JAKONIS</div>
                </div>
              </div>
              <div className="grid-item">
                <img src={Sus} alt="" className="Picture"/>
                <div className="Org">
                  <div>GABRIELĖ KASPERAITĖ</div>
                </div>
              </div>
              <div className="grid-item">
                <img src={Sus} alt="" className="Picture"/>
                <div className="Org">
                  <div>GUSTAS LUGAUSKAS</div>
                </div>
              </div>
              <div className="grid-item">
                <img src={Sus} alt="" className="Picture"/>
                <div className="Org">
                  <div>VYGINTAS BARTUSEVIČIUS</div>
                </div>
              </div>
              <div className="grid-item">
                <img src={Sus} alt="" className="Picture"/>
                <div className="Org">
                  <div>GABIJA LIORENTAITĖ</div>
                </div>
              </div>
              <div className="grid-item">
                <img src={Sus} alt="" className="Picture"/>
                <div className="Org">
                  <div>GUSTAS ŠTAŠEVSKIS</div>
                </div>
              </div>
              <div className="grid-item">
                <img src={Sus} alt="" className="Picture"/>
                <div className="Org">
                  <div>IEVA MARIJA NOREIKAITĖ</div>
                </div>
              </div>
              <div className="grid-item">
                <img src={Sus} alt="" className="Picture"/>
                <div className="Org">
                  <div>GABIJA BUROKAITĖ</div>
                </div>
              </div>
              <div className="grid-item">
                <img src={Sus} alt="" className="Picture"/>
                <div className="Org">
                  <div>GABIJA APŪKAITĖ</div>
                </div>
              </div>
            </div>
          </AccordionDetails>
      </Accordion>
    </div>
  ); 
}

export default App;
