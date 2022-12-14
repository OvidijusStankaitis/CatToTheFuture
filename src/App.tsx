import { useEffect, useState } from 'react';
import './App.css';
import aiste_iv from "./Assets/AisteI.webp"
import akvile_ro from "./Assets/AkvileR.webp"
import barbora_si from "./Assets/BarboraS.webp"
import danielius_ve from "./Assets/DanieliusV.webp"
import egle_or from "./Assets/EgleO.webp"
import eidvile_sa from "./Assets/EidvileS.webp"
import gabija_ap from "./Assets/GabijaA.webp"
import gabija_bu from "./Assets/GabijaB.webp"
import gabija_li from "./Assets/GabijaL.webp"
import gabriele_dr from "./Assets/GabrieleD.webp"
import gabriele_ka from "./Assets/GabrieleK.webp"
import gustas_st from "./Assets/GustasS.webp"
import gytis_bu from "./Assets/GytisB.webp"
import ieva_ma from "./Assets/IevaMarijaN.webp"
import lukas_ja from "./Assets/LukasJ.webp"
import meta_ze from "./Assets/MetaZ.webp"
import monika_mi from "./Assets/MonikaM.webp"
import ovidijus_st from "./Assets/OvidijusS.webp"
import rokas_ba from "./Assets/RokasB.webp"
import ugne_ba from "./Assets/UgneB.webp"
import ugne_me from "./Assets/UgneM.webp"
import vaiva_ja from "./Assets/VaivaJ.webp"
import vygintas_ba from "./Assets/VygintasB.webp"
import vytenis_na from "./Assets/VytenisN.webp"
import simonas_ur from "./Assets/SimonasU.webp"
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
  const target = new Date("10/14/2022 02:59:59")

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
      <div className="Heading">ATGAL ?? KATEIT??</div>
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
      <a href="https://docs.google.com/document/d/1NA-Uv2ZY6N8Ug73X2yRveOA1vYub-WDZnLMXQmVzxFk/edit?fbclid=IwAR1H18-OKxt5hcfFQy7n6T_VfeqZQYF7TnnuwxgRvhIKWP61ghkkbPNyY_k" target="_blank" rel="noopener noreferrer">NUORODA ?? U??DUOTIS</a>
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
                <div>MONIKA MIRBAKAIT??</div>
              </div>
            </div>
            <div className="grid-item">
              <img src={danielius_ve} alt="" className="Picture" />
              <div className="Org">
                <div>MARKETINGAS</div>
                <div>DANIELIUS VENSK??NAS</div>
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
                <div>GABRIEL?? DRUNGILAIT??</div>
              </div>
            </div>
            <div className="grid-item">
              <img src={egle_or} alt="" className="Picture" />
              <div className="Org">
                <div>EGL?? ORINTAIT??</div>
              </div>
            </div>
            <div className="grid-item">
              <img src={vaiva_ja} alt="" className="Picture" />
              <div className="Org">
                <div>VAIVA JANAVI??I??T??</div>
              </div>
            </div>
            <div className="grid-item">
              <img src={barbora_si} alt="" className="Picture" />
              <div className="Org">
                <div>BARBORA ??INKEVI??I??T??</div>
              </div>
            </div>
            <div className="grid-item">
              <img src={rokas_ba} alt="" className="Picture" />
              <div className="Org">
                <div>ROKAS BALTRU??AITIS</div>
              </div>
            </div>
            <div className="grid-item">
              <img src={ugne_ba} alt="" className="Picture" />
              <div className="Org">
                <div>UGN?? BAUBLYT??</div>
              </div>
            </div>
            <div className="grid-item">
              <img src={ugne_me} alt="" className="Picture" />
              <div className="Org">
                <div>UGN?? ME??KUOTYT??</div>
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
                <div>AIST?? IVANAUSKAIT??</div>
              </div>
            </div>
            <div className="grid-item">
              <img src={akvile_ro} alt="" className="Picture" />
              <div className="Org">
                <div>AKVIL?? ROPYT??</div>
              </div>
            </div>
            <div className="grid-item">
              <img src={meta_ze} alt="" className="Picture" />
              <div className="Org">
                <div>M??TA ??EMAITYT??</div>
              </div>
            </div>
            <div className="grid-item">
              <img src={eidvile_sa} alt="" className="Picture" />
              <div className="Org">
                <div>EIDVIL?? SATEIKAIT??</div>
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
                <div>GABRIEL?? KASPERAIT??</div>
              </div>
            </div>
            <div className="grid-item">
              <img src={vygintas_ba} alt="" className="Picture" />
              <div className="Org">
                <div>VYGINTAS BARTUSEVI??IUS</div>
              </div>
            </div>
            <div className="grid-item">
              <img src={gabija_li} alt="" className="Picture" />
              <div className="Org">
                <div>GABIJA LIORENTAIT??</div>
              </div>
            </div>
            <div className="grid-item">
              <img src={gustas_st} alt="" className="Picture" />
              <div className="Org">
                <div>GUSTAS ??TA??EVSKIS</div>
              </div>
            </div>
            <div className="grid-item">
              <img src={ieva_ma} alt="" className="Picture" />
              <div className="Org">
                <div>IEVA MARIJA NOREIKAIT??</div>
              </div>
            </div>
            <div className="grid-item">
              <img src={gabija_bu} alt="" className="Picture" />
              <div className="Org">
                <div>GABIJA BUROKAIT??</div>
              </div>
            </div>
            <div className="grid-item">
              <img src={gabija_ap} alt="" className="Picture" />
              <div className="Org">
                <div>GABIJA AP??KAIT??</div>
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
              ???Dar viena nuobodi diena??????, galvojo Micius vartydamasis lovoje.
              Micius jau i??nar???? kiekvien?? planetos Sm??lynas kampel?? ir susipa??ino su kiekvienu gyventoju.
              Jis tro??ko nuotyki??, ta??iau ??i ma??a ir niekuo nepasi??yminti planeta negal??jo ??gyvendinti katinuko dideli?? svajoni??.
              Tod??l Micius nusprend?? pastatyti laiko ma??in?? ir i??keliauti ?? kit?? laik?? MIF planetoje!
              Jis tro??ko i??bandym?? ir pavoj??, kuri?? niekada nerast?? Sm??lyne. O ateityje yra daug Miciui nematyt?? technologij??,
              keist?? mad?? ir paslapting?? misij??, kurias suprasti Miciui reikia pagalbos. D??l to jis sum??st?? suburti daugel?? unikali?? komand??,
              kurios gal??s pateikti kuo ??vairesnius ir k??rybi??kesnius sprendimus ?? ateities i??????kius!
            </div>
            <br></br>
            <div className="Text">
              ???Another boring day?????? thought Micius to himself while rolling around in bed.
              He has already been to every corner and met every inhabitant of his planet called Sandbox.
              Micius dreamed of adventure but this small and unnoteworthy planet couldn???t satisfy the kitten???s ambitions.
              So Micius decided to build a time machine and travel to a different time in the planet of MIF! He thirsted for challenges and dangers which
              he couldn???t find in Sandbox. And the future holds a lot of unheard-of technologies, weird fashion and mysterious missions,
              for which Micius needs help. Because of this he decided to gather tons of unique teams, which can provide him with the most
              varied and creative solutions to future???s tasks!
            </div>
          </div>
        </AccordionDetails>
      </Accordion>
      <div className="GaidelisT">R??M??JAI</div>
      <img src={Gaidelis} alt="" className="GaidelisP"/>
    </div>
  );
}

export default App;