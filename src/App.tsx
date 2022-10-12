import { useEffect, useState } from 'react';
import './App.css';
import Sus from "./Assets/sus.jpg"
// import Sus from "./Assets/sus.jpg"
// import Sus from "./Assets/sus.jpg"
// import Sus from "./Assets/sus.jpg"
// import Sus from "./Assets/sus.jpg"
// import Sus from "./Assets/sus.jpg"
// import Sus from "./Assets/sus.jpg"
// import Sus from "./Assets/sus.jpg"
// import Sus from "./Assets/sus.jpg"
// import Sus from "./Assets/sus.jpg"
// import Sus from "./Assets/sus.jpg"
// import Sus from "./Assets/sus.jpg"
// import Sus from "./Assets/sus.jpg"
// import Sus from "./Assets/sus.jpg"
// import Sus from "./Assets/sus.jpg"
// import Sus from "./Assets/sus.jpg"
// import Sus from "./Assets/sus.jpg"
// import Sus from "./Assets/sus.jpg"
// import Sus from "./Assets/sus.jpg"
// import Sus from "./Assets/sus.jpg"
// import Sus from "./Assets/sus.jpg"
// import Sus from "./Assets/sus.jpg"
// import Sus from "./Assets/sus.jpg"
// import Sus from "./Assets/sus.jpg"
// import Sus from "./Assets/sus.jpg"
// import Sus from "./Assets/sus.jpg"
import Gaidelis from "./Assets/gaidelis.png";
import { ExpandMore } from '@mui/icons-material';
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material';


const App: React.FC = () => {

  const [days, setDays] = useState(0)
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)

  let interval:NodeJS.Timer

  function SetClock(difference: number) {
    if (difference <= 0) {
      setDays(0)
      setHours(0)
      setMinutes(0)
      setSeconds(0)
      return
    }
    const d = Math.floor(difference / (1000 * 60 * 60 * 24))
    setDays(d)

    const h = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    setHours(h)

    const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
    setMinutes(m)

    const s = Math.floor((difference % (1000 * 60)) / 1000)
    setSeconds(s)
  }
  const target = new Date("10/13/2022 23:59:59")

  useEffect(() => {
    let difference = target.getTime() - Date.now();
    SetClock(difference);
    interval = setInterval(() => {
      difference = target.getTime() - Date.now();
      SetClock(difference);
    }, 1000)
    return () => clearInterval(interval);

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
      <a href="https://docs.google.com/document/d/1mWPG952dNbKEvxkeSyQOlCK9GyKVpZTqkRsuP-Xr7IM/edit">NUORODA Į UŽDUOTIS</a>
      <Accordion sx={{
        width: "90vw",
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
        width: "90vw",
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
        width: "90vw",
        zIndex: "2",
        marginBottom: "10vh",
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
      <div className="GaidelisT">RĖMĖJAI</div>
      <img src={Gaidelis} alt="" className="GaidelisP"/>
    </div>
  );
}

export default App;