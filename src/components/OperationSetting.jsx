import classes from "../Setting.module.css"

function OperationSetting() {
  return (
    <div className={classes["right"]}>
        <div className={classes["heading"]}>Operation Setting</div>
        <div className={classes["info"]}>
            <span>Menus ON/OFF</span>
            <span>ON</span>
        </div>
        <div className={classes["info"]}>
            <span>Big Screen Menus ON/OFF</span>
            <span>ON</span>
        </div>
        <div className={classes["info"]}>
            <span>Barcode Mode ON/OFF</span>
            <span>ON</span>
        </div>
        <div className={classes["info"]}>
            <span>Barcode Data Set</span>
            <span>Barcode Name</span>
        </div>
        <div className={classes["info"]}>
            <span>Product Order Set </span>
            <span>Product Name</span>
        </div>
        <div className={classes["info"]}>
            <span>Pecentage Function </span>
            <span>OFF</span>
        </div>
        <div className={classes["info"]}>
            <span>CSV Separator Setting</span>
            <span>OFF</span>
        </div>
        <div className={classes["info"]}>
            <span>Print No Length Setting</span>
            <span>1</span>
        </div>
        <div className={classes["info"]}>
            <span>UW/P</span>
            <span>10</span>
        </div>
        <div className={classes["info"]}>
            <span>Log Condition</span>
            <span>Within Range</span>
        </div>
        <div className={classes["info"]}>
            <span>Auto Multi-Tare</span>
            <span>OFF</span>
        </div>
        <div className={classes["info"]}>
            <span>Display Mode</span>
            <span>Small Screen</span>
        </div>
    </div>
  )
}

export default OperationSetting