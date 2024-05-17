import classes from "../Home.module.css"
import StatusBar from "./StatusBar"

function Home() {
  return (
    <div className={classes["home"]}>
        <StatusBar/>
        <div className={classes["weight-tare-gs"]}>
            <div className={classes["weight"]}>
                <div className={classes["title"]}>Weight</div>
                <div className={classes["count-units"]}>
                    <div className={classes["count"]}>0.0</div>
                    <div className={classes["units"]}>g</div>
                </div>
            </div>
            <div className={classes["tare-gs"]}>
                <div className={classes["tare"]}>
                    <div className={classes["title"]}>Tare</div>
                    <div className={classes["count-units"]}>
                        <div className={classes["count"]}>0.0</div>
                        <div className={classes["units"]}>g</div>
                    </div>
                </div>
                <div className={classes["gs"]}>
                    <div className={classes["title"]}>GS</div>
                    <div className={classes["count-units"]}>
                        <div className={classes["count"]}>0.0</div>
                        <div className={classes["units"]}>g</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home