import { useEffect, useState } from 'react';
import './App.css';
import Sus from "./Assets/sus.jpg"
import { ExpandMore } from '@mui/icons-material';
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { Typography } from '@mui/material/styles/createTypography';


const App: React.FC = () => {

  const [days, setDays] = useState(0)
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)

  useEffect(() => {
    const target = new Date("10/13/2022 22:59:59")
    var now = new Date()
    var difference = target.getTime() - now.getTime()
    SetClock(difference)

    function SetClock(difference: number) {
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
      if (difference <= 1) {
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
      <Accordion sx={{
        zIndex: "2",
        marginBottom: "8vh",
        backgroundColor: "rgba(0, 0, 0, 0)",
        boxShadow: "0",
        '& .MuiSvgIcon-root': {
          color: "#fff",
          width: "4vw",
          height: "4vw",
          boxShadow: "0 0 0.35vw #fff, inset 0 0 0.35vw #fff, 0 0 0.7vw #fff, inset 0 0 0.7vw #fff, 0 0 1.05vw #0dced8, inset 0 0 1.05vw #0dced8, 0 0 1.4vw #0dced8, 0 0 1.75vw #0dced8, 0 0 2.1vw #0dced8, 0 0 2.45vw #0dced8",
          borderRadius: "100%",
        },
        '&:before': {
          display: 'none',
        }
      }}>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <div className="Vadovai">VADOVAI</div>
        </AccordionSummary>
        <AccordionDetails>
          <div className="Grid-container">
            <div className="grid-item">
              <img src={Sus} alt="" className="Picture" />
              <div className="Org">
                <div>IT</div>
                <div>OVIDIJUS STANKAITIS</div>
              </div>
            </div>
            <div className="grid-item">
              <img src={Sus} alt="" className="Picture" />
              <div className="Org">
                <div>ORGANIZAVIMAS</div>
                <div>GYTIS BUKNIUS</div>
              </div>
            </div>
            <div className="grid-item">
              <img src={Sus} alt="" className="Picture" />
              <div className="Org">
                <div>KOMUNIKACIJA</div>
                <div>MONIKA MIRBAKAITĖ</div>
              </div>
            </div>
            <div className="grid-item">
              <img src={Sus} alt="" className="Picture" />
              <div className="Org">
                <div>MARKETINGAS</div>
                <div>DANIELIUS VENSKŪNAS</div>
              </div>
            </div>
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{
        zIndex: "2",
        marginBottom: "8vh",
        backgroundColor: "rgba(0, 0, 0, 0)",
        boxShadow: "0",
        '& .MuiSvgIcon-root': {
          color: '#fff',
          width: "4vw",
          height: "4vw",
          boxShadow: "0 0 0.35vw #fff, inset 0 0 0.35vw #fff, 0 0 0.7vw #fff, inset 0 0 0.7vw #fff, 0 0 1.05vw #bc13fe, inset 0 0 1.05vw #bc13fe, 0 0 1.4vw #bc13fe, 0 0 1.75vw #bc13fe, 0 0 2.1vw #bc13fe, 0 0 2.45vw #bc13fe",
          borderRadius: "100%",
        },
        '&:before': {
          display: 'none',
        }
      }}>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <div className="Organizatoriai">ORGANIZATORIAI</div>
        </AccordionSummary>
        <AccordionDetails>
          <div className="Grid-container">
            <div className="grid-item">
              <img src={Sus} alt="" className="Picture" />
              <div className="Org">
                <div>VYTENIS NARMONTAS</div>
              </div>
            </div>
            <div className="grid-item">
              <img src={Sus} alt="" className="Picture" />
              <div className="Org">
                <div>GABRIELĖ DRUNGILAITĖ</div>
              </div>
            </div>
            <div className="grid-item">
              <img src={Sus} alt="" className="Picture" />
              <div className="Org">
                <div>EGLĖ ORINTAITĖ</div>
              </div>
            </div>
            <div className="grid-item">
              <img src={Sus} alt="" className="Picture" />
              <div className="Org">
                <div>VAIVA JANAVIČIŪTĖ</div>
              </div>
            </div>
            <div className="grid-item">
              <img src={Sus} alt="" className="Picture" />
              <div className="Org">
                <div>BARBORA ŠINKEVIČIŪTĖ</div>
              </div>
            </div>
            <div className="grid-item">
              <img src={Sus} alt="" className="Picture" />
              <div className="Org">
                <div>ROKAS BALTRUŠAITIS</div>
              </div>
            </div>
            <div className="grid-item">
              <img src={Sus} alt="" className="Picture" />
              <div className="Org">
                <div>UGNĖ BAUBLYTĖ</div>
              </div>
            </div>
            <div className="grid-item">
              <img src={Sus} alt="" className="Picture" />
              <div className="Org">
                <div>UGNĖ MEŠKUOTYTĖ</div>
              </div>
            </div>
            <div className="grid-item">
              <img src={Sus} alt="" className="Picture" />
              <div className="Org">
                <div>SIMONAS URBUTIS</div>
              </div>
            </div>
            <div className="grid-item">
              <img src={Sus} alt="" className="Picture" />
              <div className="Org">
                <div>AISTĖ IVANAUSKAITĖ</div>
              </div>
            </div>
            <div className="grid-item">
              <img src={Sus} alt="" className="Picture" />
              <div className="Org">
                <div>AKVILĖ ROPYTĖ</div>
              </div>
            </div>
            <div className="grid-item">
              <img src={Sus} alt="" className="Picture" />
              <div className="Org">
                <div>MĖTA ŽEMAITYTĖ</div>
              </div>
            </div>
            <div className="grid-item">
              <img src={Sus} alt="" className="Picture" />
              <div className="Org">
                <div>EIDVILĖ SATEIKAITĖ</div>
              </div>
            </div>
            <div className="grid-item">
              <img src={Sus} alt="" className="Picture" />
              <div className="Org">
                <div>LUKAS JAKONIS</div>
              </div>
            </div>
            <div className="grid-item">
              <img src={Sus} alt="" className="Picture" />
              <div className="Org">
                <div>GABRIELĖ KASPERAITĖ</div>
              </div>
            </div>
            <div className="grid-item">
              <img src={Sus} alt="" className="Picture" />
              <div className="Org">
                <div>GUSTAS LUGAUSKAS</div>
              </div>
            </div>
            <div className="grid-item">
              <img src={Sus} alt="" className="Picture" />
              <div className="Org">
                <div>VYGINTAS BARTUSEVIČIUS</div>
              </div>
            </div>
            <div className="grid-item">
              <img src={Sus} alt="" className="Picture" />
              <div className="Org">
                <div>GABIJA LIORENTAITĖ</div>
              </div>
            </div>
            <div className="grid-item">
              <img src={Sus} alt="" className="Picture" />
              <div className="Org">
                <div>GUSTAS ŠTAŠEVSKIS</div>
              </div>
            </div>
            <div className="grid-item">
              <img src={Sus} alt="" className="Picture" />
              <div className="Org">
                <div>IEVA MARIJA NOREIKAITĖ</div>
              </div>
            </div>
            <div className="grid-item">
              <img src={Sus} alt="" className="Picture" />
              <div className="Org">
                <div>GABIJA BUROKAITĖ</div>
              </div>
            </div>
            <div className="grid-item">
              <img src={Sus} alt="" className="Picture" />
              <div className="Org">
                <div>GABIJA APŪKAITĖ</div>
              </div>
            </div>
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{
        zIndex: "2",
        marginBottom: "8vh",
        backgroundColor: "rgba(0, 0, 0, 0)",
        boxShadow: "0",
        '& .MuiSvgIcon-root': {
          color: '#fff',
          width: "4vw",
          height: "4vw",
          boxShadow: "0 0 0.35vw #fff, inset 0 0 0.35vw #fff, 0 0 0.7vw #fff, inset 0 0 0.7vw #fff, 0 0 1.05vw #0dced8, inset 0 0 1.05vw #0dced8, 0 0 1.4vw #0dced8, 0 0 1.75vw #0dced8, 0 0 2.1vw #0dced8, 0 0 2.45vw #0dced8",
          borderRadius: "100%",
        },
        '&:before': {
          display: 'none',
        }
      }}>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <div className="Vadovai">ISTORIJA</div>
        </AccordionSummary>
        <AccordionDetails>
          <div className="Text-box">
            <div className="Text">
              „Dar viena nuobodi diena…“, galvojo Micius vartydamasis lovoje. 
              Micius jau išnaršė kiekvieną planetos Smėlynas kampelį ir susipažino su kiekvienu gyventoju.  
              Jis troško nuotykių, tačiau ši maža ir nieko pasižyminti planeta negalėjo įgyvendinti katinuko didelių svajonių. 
              Todėl Micius nusprendė pastatyti laiko mašiną ir iškeliauti į kitą laiką MIF planetoje! 
              Jis troško išbandymų ir pavojų, kurių niekada nerastų Smėlyne. O ateityje yra daug Miciui nematytų technologijų, 
              keistų madų ir paslaptingų misijų, kurias suprasti Miciui reikia pagalbos. Dėl to jis sumąstė suburti daugelį unikalių komandų, 
              kurios galės pateikti kuo įvairesnius ir kūrybiškesnius  sprendimus į ateities iššūkius!
            </div>
            <br></br>
            <div className="Text">
              “Another boring day…” thought Micius to himself while rolling around in bed. 
              He has already been to every corner and met every inhabitant of his planet called Sandbox. 
              Micius dreamed of adventure but this small and unnoteworthy planet couldn’t satisfy the kitten’s ambitions. 
              So Micius decided to build a time machine and travel to a different time in the planet of MIF! He thirsted for challenges and dangers which 
              he couldn’t find in Sandbox. And the future holds a lot of unheard-of technologies, weird fashion and mysterious missions, 
              for which Micius needs help. Because of this he decided to gather tons of unique teams, which can provide him with the most 
              varied and creative solutions to future’s tasks!
            </div>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default App;