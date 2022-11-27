/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import './Web.css';

function Web() {
    return (
        <div id='web' className='d-flex flex-column align-items-center justify-content-evenly p-0 contain'>
            <div>
                <h1 className="subtitle">Web</h1>
            </div>
            <div className="d-md-flex flex-md-row align-items-center justify-content-center web m-0 p-0">
                <div className="me-5 blog">
                    <a href="https://daniel-arnedo.vercel.app/" target="_blank">
                        <p>D.A<br/> Blog</p>
                    </a>
                </div>
                <div className="me-5 countries">
                    <a href="https://countries-mda.vercel.app/" target="_blank">
                        <p>PI-Countries</p>
                    </a>
                </div>
                <div className="me-5 machi">
                    <a href="https://ecommerce-machi.netlify.app/" target="_blank">
                        <p>E-Commerce Machi</p>
                    </a>
                </div>
                <div className="chat">
                    <a href="https://golang-react-chat.vercel.app/" target="_blank">
                        <p>ChatApp</p>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Web;