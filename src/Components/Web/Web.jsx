import React from "react";

function Web() {
    return (
        <div id='web' className='d-flex flex-column align-items-center justify-content-evenly p-0 contain'>
            <div>
                <h1 className="subtitle">Web</h1>
            </div>
            <div className="d-flex flex-row align-items-center justify-content-center web m-0 p-0">
                <div className="me-5 blog">
                    <a href="https://daniel-arnedo.vercel.app/">
                        <p>Blog</p>
                    </a>
                </div>
                <div className="me-5 countries">
                    <a href="https://countries-mda.vercel.app/">
                        <p>PI-Countries</p>
                    </a>
                </div>
                <div className="chat">
                    <a href="https://golang-react-chat.vercel.app/">
                        <p>ChatApp</p>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Web;