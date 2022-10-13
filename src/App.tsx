import { useEffect, useState } from 'react';
import './App.css';
import aiste_iv from "./Assets/Aistė Ivanauskaitė.jpg"
import akvile_ro from "./Assets/Akvilė Ropytė.jpg"
import barbora_si from "./Assets/Barbora Šinkevičiūtė.jpg"
import danielius_ve from "./Assets/Danielius Venskūnas.jpg"
import egle_or from "./Assets/Eglė Orintaitė.jpg"
import eidvile_sa from "./Assets/Eidvilė Sateikaitė.jpg"
import gabija_ap from "./Assets/Gabija Apūkaitė.jpg"
import gabija_bu from "./Assets/Gabija Burokaitė.png"
import gabija_li from "./Assets/Gabija Liorentaitė.jpg"
import gabriele_dr from "./Assets/Gabrielė Drungilaitė.jpg"
import gabriele_ka from "./Assets/Gabrielė Kasperaitė.png"
import gustas_st from "./Assets/Gustas Štaševskis.jpg"
import gytis_bu from "./Assets/Gytis Buknius.jpg"
import ieva_ma from "./Assets/Ieva Marija Noreikaitė.jpg"
import lukas_ja from "./Assets/Lukas Jakonis.jpg"
import meta_ze from "./Assets/Mėta Žemaitytė.jpg"
import monika_mi from "./Assets/Monika Mirbakaitė.jpg"
import ovidijus_st from "./Assets/Ovidijus Stankaitis.jpg"
import rokas_ba from "./Assets/Rokas Baltrusaitis.jpg"
import ugne_ba from "./Assets/Ugnė Baublytė.png"
import ugne_me from "./Assets/Ugnė Meškuotytė.png"
import vaiva_ja from "./Assets/Vaiva Janavičiūtė.jpg"
import vygintas_ba from "./Assets/Vygintas Bartusevičius.jpg"
import vytenis_na from "./Assets/Vytenis Narmontas.jpg"
import simonas_ur from "./Assets/Simonas Urbutis.jpg"
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
      <a href="https://docs.google.com/document/d/1NA-Uv2ZY6N8Ug73X2yRveOA1vYub-WDZnLMXQmVzxFk/edit?fbclid=IwAR1H18-OKxt5hcfFQy7n6T_VfeqZQYF7TnnuwxgRvhIKWP61ghkkbPNyY_k" target="_blank" rel="noopener noreferrer">NUORODA Į UŽDUOTIS</a>
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
              <img src={ovidijus_st} alt="" className="Picture" />
              <div className="Org">
                <div>IT</div>
                <div>OVIDIJUS STANKAITIS</div>
              </div>
            </div>
            <div className="grid-item">
              <img src={gytis_bu} alt="" className="Picture" />
              <div className="Org">
                <div>ORGANIZAVIMAS</div>
                <div>GYTIS BUKNIUS</div>
              </div>
            </div>
            <div className="grid-item">
              <img src={monika_mi} alt="" className="Picture" />
              <div className="Org">
                <div>KOMUNIKACIJA</div>
                <div>MONIKA MIRBAKAITĖ</div>
              </div>
            </div>
            <div className="grid-item">
              <img src={danielius_ve} alt="" className="Picture" />
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
              <img src={vytenis_na} alt="" className="Picture" />
              <div className="Org">
                <div>VYTENIS NARMONTAS</div>
              </div>
            </div>
            <div className="grid-item">
              <img src={gabriele_dr} alt="" className="Picture" />
              <div className="Org">
                <div>GABRIELĖ DRUNGILAITĖ</div>
              </div>
            </div>
            <div className="grid-item">
              <img src={egle_or} alt="" className="Picture" />
              <div className="Org">
                <div>EGLĖ ORINTAITĖ</div>
              </div>
            </div>
            <div className="grid-item">
              <img src={vaiva_ja} alt="" className="Picture" />
              <div className="Org">
                <div>VAIVA JANAVIČIŪTĖ</div>
              </div>
            </div>
            <div className="grid-item">
              <img src={barbora_si} alt="" className="Picture" />
              <div className="Org">
                <div>BARBORA ŠINKEVIČIŪTĖ</div>
              </div>
            </div>
            <div className="grid-item">
              <img src={rokas_ba} alt="" className="Picture" />
              <div className="Org">
                <div>ROKAS BALTRUŠAITIS</div>
              </div>
            </div>
            <div className="grid-item">
              <img src={ugne_ba} alt="" className="Picture" />
              <div className="Org">
                <div>UGNĖ BAUBLYTĖ</div>
              </div>
            </div>
            <div className="grid-item">
              <img src={ugne_me} alt="" className="Picture" />
              <div className="Org">
                <div>UGNĖ MEŠKUOTYTĖ</div>
              </div>
            </div>
            <div className="grid-item">
              <img src={simonas_ur} alt="" className="Picture" />
              <div className="Org">
                <div>SIMONAS URBUTIS</div>
              </div>
            </div>
            <div className="grid-item">
              <img src={aiste_iv} alt="" className="Picture" />
              <div className="Org">
                <div>AISTĖ IVANAUSKAITĖ</div>
              </div>
            </div>
            <div className="grid-item">
              <img src={akvile_ro} alt="" className="Picture" />
              <div className="Org">
                <div>AKVILĖ ROPYTĖ</div>
              </div>
            </div>
            <div className="grid-item">
              <img src={meta_ze} alt="" className="Picture" />
              <div className="Org">
                <div>MĖTA ŽEMAITYTĖ</div>
              </div>
            </div>
            <div className="grid-item">
              <img src={eidvile_sa} alt="" className="Picture" />
              <div className="Org">
                <div>EIDVILĖ SATEIKAITĖ</div>
              </div>
            </div>
            <div className="grid-item">
              <img src={lukas_ja} alt="" className="Picture" />
              <div className="Org">
                <div>LUKAS JAKONIS</div>
              </div>
            </div>
            <div className="grid-item">
              <img src={gabriele_ka} alt="" className="Picture" />
              <div className="Org">
                <div>GABRIELĖ KASPERAITĖ</div>
              </div>
            </div>
            <div className="grid-item">
              <img src={vygintas_ba} alt="" className="Picture" />
              <div className="Org">
                <div>VYGINTAS BARTUSEVIČIUS</div>
              </div>
            </div>
            <div className="grid-item">
              <img src={gabija_li} alt="" className="Picture" />
              <div className="Org">
                <div>GABIJA LIORENTAITĖ</div>
              </div>
            </div>
            <div className="grid-item">
              <img src={gustas_st} alt="" className="Picture" />
              <div className="Org">
                <div>GUSTAS ŠTAŠEVSKIS</div>
              </div>
            </div>
            <div className="grid-item">
              <img src={ieva_ma} alt="" className="Picture" />
              <div className="Org">
                <div>IEVA MARIJA NOREIKAITĖ</div>
              </div>
            </div>
            <div className="grid-item">
              <img src={gabija_bu} alt="" className="Picture" />
              <div className="Org">
                <div>GABIJA BUROKAITĖ</div>
              </div>
            </div>
            <div className="grid-item">
              <img src={gabija_ap} alt="" className="Picture" />
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