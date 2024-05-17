import classes from "../Footer.module.css"
import saveImage from "../assets/save.png"
import totalImage from "../assets/total.png"
import nImage from "../assets/n.png"
import menuImage from "../assets/menu.png"
import tareImage from "../assets/tare.png"
import percentImage from "../assets/percentage.png"
import zeroImage from "../assets/zero.png"
import localImage from "../assets/local.png"
import { useDispatch } from "react-redux"
import { uiSliceActions } from "../store/ui-slice"

function Footer() {
    const dispatch = useDispatch();

    function handleClickTab(tab){
        dispatch(uiSliceActions.setFocusedScreen(tab))
    }
  return (
    <div className={classes["footer"]}>
        <div className={classes["tab"]}>
            <img src={totalImage} alt="total"/>
            <span>Total</span>
        </div>
        <div className={classes["tab"]}>
            <img src={saveImage} alt="save"/>
            <span>Save</span>
        </div>
        <div className={classes["tab"]}>
            <img src={saveImage} alt="g/n"/>
            <span>G/N</span>
        </div>
        <div className={classes["tab"]}>
            <img src={localImage} alt="local"/>
            <span>Local</span>
        </div>
        <div className={`${classes["tab"]} ${classes["zero"]}`}>
            <img src={zeroImage} alt="zero"/>
            <span>Zero</span>
        </div>
        <div className={classes["tab"]}>
            <img src={tareImage} alt="tare"/>
            <span>Tare</span>
        </div>
        <div className={classes["tab"]}>
            <img src={percentImage} alt="percentage"/>
            <span>Percent</span>
        </div>
        <div className={classes["tab"]} onClick={()=>handleClickTab("menu")}>
            <img src={menuImage} alt="menu"/>
            <span>Menu</span>
        </div>
        <div className={classes["tab"]}>
            <img src={nImage} alt="l"/>
            <span>1</span>
        </div>
    </div>
  )
}

export default Footer