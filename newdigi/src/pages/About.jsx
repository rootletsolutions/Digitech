import React from 'react';
import main from './../assets/main.png';
import digi from '../assets/digi.png';
import '../styles/About.css';
import web from '../assets/web.png'
import cards from '../assets/cards.png';
import Footer from '../components/Footer'

export default function About() {
    return (
        <div>
            <div className="aboufirstt">
                     <img src={main} alt="" />
                    <div className="abtmain">
                        {/* <h2>About</h2> <br />
                        <h3>  Us</h3> */}
                        <div className="headin1abt">
                            <h2>About</h2>
                        </div>
                        <div className="heading2abt">
                            <h2>Us</h2>
                        </div>
                </div>

            </div>
            <div className="about_content">
                <div className="abtleft">
                    <img src={digi} alt="" />
                </div>
                <div className="right">
                    <h1>About Digitech!</h1>
                    <p>Lorem ipsum dolor sit amet consectetur. Erat dolor eget feugiat pretium tristique nunc dolor duis. quam ut ullamcorper mi odio. Adipiscing varius nunc amet interdum.Lorem ipsum dolor sit amet consectetur. Erat dolor eget feugiat pretium tristique nunc dolor duis. quam ut ullamcorper mi odio. Adipiscing varius nunc amet interdum.
                        Lorem ipsum dolor sit amet consectetur. Erat dolor eget feugiat pretium tristique nunc dolor duis. quam ut ullamcorper mi odio. Adipiscing varius nunc amet interdum.Lorem ipsum dolor sit amet consectetur. Erat dolor eget feugiat pretium tristique nunc dolor duis.</p>
                </div>
            </div>
            <div className="card_section">
                <img src={web} alt="" />
            </div>
            <div className="abtcards">
                <img src={cards} alt="" />
            </div>
        </div>
    );
}
