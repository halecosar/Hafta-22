import React from 'react';

function Section2() {
    return (
        <div>
            <section className="section2" id="classes">
                <div className="bg">
                    <p style={{ height: "100px" }}></p>
                    <h2> OUR CLASSES</h2>

                    <div className="orangeLine"></div>

                    <p style={{ textAlign: "center" }}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br /> Deserunt eaque beatae deleniti quibusdam magni temporibus recusandae
                        dolor expedita consequatur aperiam?</p>

                    <div className="btn-container">
                        <button className="menuItem" onClick={() => selectButton(1)} data-id="Yoga" id="yoga">Yoga</button>
                        <button className="menuItem" onClick={() => selectButton(2)} data-id="Group" id="group">Group</button>
                        <button className="menuItem" onClick={() => selectButton(3)} data-id="Solo" id="solo">Solo</button>
                        <button className="menuItem" onClick={() => selectButton(4)} data-id="Streching" id="streching">Streching</button>
                    </div>

                    <div className="sport">
                        <div className="text-container"></div>
                        <div className="text-container-image-2"></div>
                    </div>
                </div>

                <div className="bmi">
                    <div className="bmi-textcontainer">
                        <h3>BMI Calculator</h3>
                        <p className="text5" style={{ color: "#5a5a5a" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa expedita ad odit similique a aperiam repellendus fugiat, fugit i consequuntur, molestias repellendus.</p>
                        <p className="text5" style={{ color: "#5a5a5a" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa expedita ad odit similique a aperiam repellendus fugiat, fugit i consequuntur, molestias repellendus.</p>

                        <div className="bmi-input-settings">
                            <div className="bmi-input">
                                <input type="text" id="boy" name="boy" placeholder="Your Height" className="bmi-input-element" />
                                <label htmlFor="boy">cm</label>
                            </div>
                            <div className="bmi-input">
                                <input type="text" id="kilo" name="kilo" placeholder="Your Weight" className="bmi-input-element" />
                                <label htmlFor="kilo">kg</label>
                            </div>
                        </div>
                    </div>
                    <div className="divdir">
                        <p className="bmi-image-p">Your BMI</p>
                        <img src="Resimler/bmi-index.jpg" alt="bmi" />
                        <div className="divdir2"></div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Section2;
