import classes from "../Home.module.css"
import balanceImage from "../assets/balance.png"
import wifiImage from "../assets/wifi.png"

function StatusBar() {
  return (
    <div className={classes["status-bar"]}>
            <div className={classes["start"]}>Metsar</div>
            <div className={classes["middle"]}>
               <img style={{marginRight: "1rem"}} src={wifiImage} />
               <span>Technician</span>
               <img style={{width: "1.75rem", height: "1.25rem"}} src={balanceImage} />
               <span>Max 3Kg</span>
               <span>Min 2g</span>
               <span>d = 0.1g</span>
               <span>A1.27</span>
            </div>
            <div className={classes["end"]}>
                <span>2020/10/03</span>
               <span>12:11</span>
            </div>
        </div>
  )
}

export default StatusBar