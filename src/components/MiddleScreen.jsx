import classes from "../MiddleScreen.module.css"
import productImage from "../assets/product.png"
import userImage from "../assets/user.png"
import downArrowImage from "../assets/downArrow.png"
import upArrowImage from "../assets/upArrow.png"
import searchImage from "../assets/search.png"
import dropdownImage from "../assets/dropdown.png"

function MiddleScreen() {
  return (
    <div className={classes["middle-screen"]}>
        <div className={classes["first"]}>
            <div className={classes["low-ok-high"]}>
                <div className={`${classes["card"]} ${classes["low"]}`}>
                    <span className={classes["title"]}>Low</span>
                    <span className={classes["count-units"]}>0.0<span className={classes["units"]}>g</span></span>
                </div>
                <div className={`${classes["card"]} ${classes["ok"]}`}>
                    <span className={classes["title"]}>OK</span>
                </div>
                <div className={`${classes["card"]} ${classes["high"]}`}>
                    <span className={classes["title"]}>High</span>
                    <span className={classes["count-units"]}>0.0<span className={classes["units"]}>g</span></span>
                </div>
            </div>
            <div className={classes["progress-bar"]}>0%</div>
            <div className={classes["count-container"]}>
                <span className={classes["title"]}>Count </span>
                <span className={classes["number"]}>8</span>
            </div>
            <div className={classes["count-container"]}>
                <span className={classes["title"]}>Total </span>
                <span className={classes["number"]}>16040.0<span className={classes["units"]}> g</span></span>
            </div>
        </div>
        <div className={classes["second"]}>
            <div className={classes["row"]}>
                <div className={classes["card1"]}>
                    <img src={productImage} alt="Product"/>
                    <span>Product Name</span>
                </div>
                <div className={classes["card2"]}>
                    {/* <input value={"Smart"}/> */}
                    <select defaultValue={1}>
                        <option value={1}>SMART</option>
                        <option value={2}>PRODUCT 002</option>
                        <option value={3}>PRODUCT 003</option>
                    </select>
                    <img src={dropdownImage}/>
                </div>
            </div>
            <div className={classes["row"]}>
                <div className={classes["card1"]}>
                    <img src={userImage} alt="Balance ID"/>
                    <span>Balance ID</span>
                </div>
                <div className={classes["card2"]}>
                    {/* <input value={"Balance ID 001"}/> */}
                    <select defaultValue={1}>
                        <option value={1}>Balance ID 001</option>
                        <option value={2}>Balance ID 002</option>
                        <option value={3}>Balance ID 003</option>
                    </select>
                    <img src={dropdownImage}/>
                </div>
            </div>
            <div className={classes["row"]}>
                <div className={classes["card1"]}>
                    <img src={userImage} alt="Material Name"/>
                    <span>Material Name</span>
                </div>
                <div className={classes["card2"]}>
                    {/* <input value={"Material Name 001"}/> */}
                    <select defaultValue={1}>
                        <option value={1}>Material Name 001</option>
                        <option value={2}>Material Name 002</option>
                        <option value={3}>Material Name 003</option>
                    </select>
                    <img src={dropdownImage}/>
                </div>
            </div>
            <div className={classes["row"]}>
                <div className={classes["card1"]}>
                    <img src={userImage} alt="Material Code"/>
                    <span>Material Code</span>
                </div>
                <div className={classes["card2"]}>
                    {/* <input value={"Material Code 001"} /> */}
                    <select defaultValue={1}>
                        <option value={1}>Material Code 001</option>
                        <option value={2}>Material Code 002</option>
                        <option value={3}>Material Code 003</option>
                    </select>
                    <img src={dropdownImage}/>
                </div>
            </div>
        </div>
        <div className={classes["third"]}>
            <img src={searchImage}/>
            <div className={classes["arrows"]}>
                <img src={upArrowImage}/>
                <img src={downArrowImage}/>
            </div>
        </div>
    </div>
  )
}

export default MiddleScreen