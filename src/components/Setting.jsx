import { useState } from "react"
import classes from "../Setting.module.css"
import BasicInformation from "./BasicInformation"
import OperationSetting from "./OperationSetting"
import Calibration from "./Calibration"
import Communication from "./Communication"
import SystemSetting from "./SystemSetting"
import WeighingSetting from "./WeighingSetting"
import StatusBar from "./StatusBar"
import { useDispatch } from "react-redux"
import { uiSliceActions } from "../store/ui-slice"
import balanceScale from "../assets/balance-scale.png"
import balanceScaleSelected from "../assets/balance-scale-selected.png"
import information from "../assets/information.png"
import informationSelected from "../assets/information-selected.png"
import communication from "../assets/communication.png"
import communicationSelected from "../assets/communication-selected.png"
import system from "../assets/system.png"
import systemSelected from "../assets/system-selected.png"
import calibration from "../assets/calibration.png"
import calibrationSelected from "../assets/calibration-selected.png"
import repair from "../assets/repair.png"
import repairSelected from "../assets/repair-selected.png"

function Setting() {
    const dispatch = useDispatch();

    function handleGoBackToHome(){
        dispatch(uiSliceActions.setFocusedScreen("menu"))
    }

    const [selectedItem, setSelectedItem] = useState("basicInformation");

  return (
    <>
        <StatusBar/>
        <section className={classes["setting"]}>
            <div className={classes["sidebar"]}>
                <span className={classes["heading"]}>Setting</span>
                <div className={classes["list"]}>
                    <div className={`${classes["item"]} ${selectedItem==="basicInformation" && classes["active"]}`} onClick={()=>setSelectedItem("basicInformation")}>
                        <img src={selectedItem==="basicInformation" ? informationSelected : information}/>
                        <span>Basic Information</span>
                    </div>
                    <div className={`${classes["item"]} ${selectedItem==="systemSetting" && classes["active"]}`} onClick={()=>setSelectedItem("systemSetting")}>
                        <img src={selectedItem==="systemSetting" ? systemSelected : system }/>
                        <span>System Setting</span>
                    </div>
                    <div className={`${classes["item"]} ${selectedItem==="weighingSetting" && classes["active"]}`} onClick={()=>setSelectedItem("weighingSetting")}>
                        <img src={selectedItem==="weighingSetting" ? balanceScaleSelected : balanceScale}/>
                        <span>Weighing Setting</span>
                    </div>
                    <div className={`${classes["item"]} ${selectedItem==="operationSetting" && classes["active"]}`}  onClick={()=>setSelectedItem("operationSetting")}>
                        <img src={selectedItem==="operationSetting" ? repairSelected : repair}/>
                        <span>Operation Setting</span>
                    </div>
                    <div className={`${classes["item"]} ${selectedItem==="calibration" && classes["active"]}`}  onClick={()=>setSelectedItem("calibration")}>
                        <img src={selectedItem==="calibration" ? calibrationSelected : calibration}/>
                        <span>Calibration</span>
                    </div>
                    <div className={`${classes["item"]} ${selectedItem==="communication" && classes["active"]}`} onClick={()=>setSelectedItem("communication")}>
                        <img src={selectedItem==="communication" ? communicationSelected : communication}/>
                        <span>Communication</span>
                    </div>
                </div>
                <button className={classes["back-btn"]} onClick={handleGoBackToHome}>Back</button>
            </div>
            {selectedItem==="basicInformation" && <BasicInformation/>}
            {selectedItem==="operationSetting" && <OperationSetting/>}
            {selectedItem==="calibration" && <Calibration/>}
            {selectedItem==="communication" && <Communication/>}
            {selectedItem==="systemSetting" && <SystemSetting/>}
            {selectedItem==="weighingSetting" && <WeighingSetting/>}
        </section>
    </>
  )
}

export default Setting