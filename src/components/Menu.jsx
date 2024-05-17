import { useDispatch } from "react-redux";
import idImage from "../assets/id.png";
import printerImage from "../assets/printer.png";
import reportImage from "../assets/report.png";
import logoutImage from "../assets/logout.png";
import dataImage from "../assets/data.png";
import modeImage from "../assets/mode.png";
import unitImage from "../assets/unit.png";
import settingImage from "../assets/setting.png";
import classes from "../Menu.module.css"
import { uiSliceActions } from "../store/ui-slice";

function Menu() {
    const dispatch = useDispatch();

    function handleGoBackToHome(){
        dispatch(uiSliceActions.setFocusedScreen("home"))
    }
    function handleClickCard(card){
        dispatch(uiSliceActions.setFocusedScreen(card))
    }

  return (
    <section className={classes["menu"]}>
        <div className={classes["cards-container"]}>
            <div className={classes["card"]} style={{background: "rgb(177, 216, 70)"}}>
                <img src={idImage}/>
                <div className={classes["bottom-tag"]}>
                    ID
                </div>
            </div>
            <div className={classes["card"]} style={{background: "rgb(180, 93, 214)"}}>
                <img src={printerImage}/>
                <div className={classes["bottom-tag"]}>
                    Format
                </div>
            </div>
            <div onClick={()=>handleClickCard("setting")} className={classes["card"]} style={{background: "rgb(100, 226, 148)"}}>
                <img src={settingImage}/>
                <div className={classes["bottom-tag"]}>
                    Setting
                </div>
            </div>
            <div className={classes["card"]} style={{background: "rgb(86, 171, 211)"}}>
                <img src={modeImage}/>
                <div className={classes["bottom-tag"]}>
                    Mode
                </div>
            </div>
            <div className={classes["card"]} style={{background: "rgb(68, 190, 134)"}}>
                <img src={reportImage}/>
                <div className={classes["bottom-tag"]}>
                    Report
                </div>
            </div>
            <div className={classes["card"]} style={{background: "rgb(211, 174, 73)"}}>
                <img src={dataImage}/>
                <div className={classes["bottom-tag"]}>
                    Data
                </div>
            </div>
            <div className={classes["card"]} style={{background: "rgb(197, 86, 192)"}}>
                <img src={unitImage}/>
                <div className={classes["bottom-tag"]}>
                    Unit
                </div>
            </div>
            <div className={classes["card"]} style={{background: "rgb(189, 85, 103)"}}>
                <img src={logoutImage}/>
                <div className={classes["bottom-tag"]}>
                    Logout
                </div>
            </div>
        </div>
        <button onClick={handleGoBackToHome} className={classes["back-btn"]}>Back</button>
    </section>
  )
}

export default Menu

