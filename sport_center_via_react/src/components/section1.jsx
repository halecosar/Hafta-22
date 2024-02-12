
import React from 'react';

function Section1() {
    return (
        <div>
            <div className="background">
                <header>
                    <div className="navbar" id="navbar">

                        <a href="#home">
                            <img className="site-logo" src="Resimler/logo.png" alt="logo" />
                        </a>
                        <nav>
                            <div className="nav-wrapper">
                                <div className="hamburger-menu" id="hamburger-menu">&#9776;</div>
                                <ul className="navLinks" id="menu">
                                    <li><a href="#home" className="home">Home</a></li>
                                    <li><a href="#classes" className="classes">Classes</a></li>
                                    <li><a href="#trainer" className="trainer">Trainer</a></li>
                                    <li><a href="#review" className="review">Review</a></li>
                                    <li><a href="#contact" className="contact">Contact</a></li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </header>
                <div className="container">
                    <button className="powerfullButton">
                        POWERFULL
                    </button>
                    <p className="text1">
                        Group <br /> Practise <br /> With Trainer
                    </p>
                    <p className="text1">Group <br /> Practise <br /> With Trainer</p>
                    <p className="text2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique, id tenetur earum
                        eligendi possimus nihil distinctio quis suscipit laudantium! Doloribus qui recusandae in ab tempora.
                    </p>

                    <ul className="buttons">
                        <li><button className="buttonElement1">Sign Up</button></li>
                        <li><button className="buttonElement2">Details</button></li>
                    </ul>
                </div>
            </div>

            <div className="card-container">
                <div className="card">
                    <div style={{ textAlign: 'center' }}>
                        <h4><b>325</b></h4>
                        <p>Course</p>
                    </div>
                </div>
                <div className="card">
                    <div style={{ textAlign: 'center' }}>
                        <h4><b>405</b></h4>
                        <p>Work Out</p>
                    </div>
                </div>
                <div className="card">
                    <div style={{ textAlign: 'center' }}>
                        <h4><b>305</b></h4>
                        <p>Working Hour</p>
                    </div>
                </div>
                <div className="card">
                    <div style={{ textAlign: 'center' }}>
                        <h4><b>705</b></h4>
                        <p>Happy Client</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Section1;

