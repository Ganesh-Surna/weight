import classes from "../Setting.module.css"

function BasicInformation() {
  return (
    <div className={classes["right"]}>
        <div className={classes["heading"]}>Basic Information</div>
        <div className={classes["sub-heading"]}>
            <span style={{fontWeight: "600"}}>User Information</span>
            <span style={{color: "rgb(13, 83, 110)", fontWeight: "600"}}>METSAR TECHNOLOGIES</span>
        </div>
        <div className={classes["info"]}>
            <span>Scale ID</span>
            <span>Scale A</span>
        </div>
        <div className={classes["info"]}>
            <span>Decimal Point Setting</span>
        </div>
        <div className={classes["info"]}>
            <span>Scale Mode</span>
            <span>Normal</span>
        </div>
    </div>
  )
}

export default BasicInformation