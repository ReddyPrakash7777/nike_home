import React from "react";
import "./dealweak.css";
import r1 from "../assets/r1.jpg";
import r2 from "../assets/r2.jpg";
import r3 from "../assets/r3.jpg";
import r4 from "../assets/r5.jpg";
import r5 from "../assets/r6.jpg";
import r6 from "../assets/r7.jpg";
import r7 from "../assets/r9.jpg";
import r8 from "../assets/r10.jpg";
import r9 from "../assets/r11.jpg";
import c5 from "../assets/c5.jpg";


const Dealweak = () => {
    return (
        <div className="container">
            <div className="deal-weak">
                <h2>Deals of the week</h2>
                <p className="container_para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore voluptas aut aliquid, eum soluta
                    necessitatibus. Assumenda delectus, quo consequuntur dolorum, corrupti distinctio illum iusto hic possimus
                    qui quaerat laborum. Commodi?</p>
            </div>

            <div className="deals">
                <div className="deal1">
                    <div>
                        <img src={r1} alt="deal" />
                        <p>BLACK LACE HEELS</p>
                    </div>
                    <div>
                        <img src={r2} alt="deal" />
                        <p>BLACK LACE HEELS</p>
                    </div>
                    <div>
                        <img src={r3} alt="deal" />
                        <p>BLACK LACE HEELS</p>
                    </div>
                    <div>
                        <img src={r4} alt="deal" />
                        <p>BLACK LACE HEELS</p>
                    </div>
                    <div>
                        <img src={r5} alt="deal" />
                        <p>BLACK LACE HEELS</p>
                    </div>
                    <div>
                        <img src={r6} alt="deal" />
                        <p>BLACK LACE HEELS</p>
                    </div>
                    <div>
                        <img src={r7} alt="deal" />
                        <p>BLACK LACE HEELS</p>
                    </div>
                    <div>
                        <img src={r8} alt="deal" />
                        <p>BLACK LACE HEELS</p>
                    </div>
                    <div>
                        <img src={r9} alt="deal" />
                        <p>BLACK LACE HEELS</p>
                    </div>

                </div>
                <div className="deal_end">
                    <img className="deal_end_img" src={c5} alt="deal" />
                </div>
            </div>
        </div>
    );
}

export default Dealweak;