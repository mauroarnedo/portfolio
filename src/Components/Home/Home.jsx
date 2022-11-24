import React from "react";
import Foto from '../../Icons/Profile/foto.jpg';

function Home() {
    return (
        <div id='home' className="contain profile">
            <h1>Mauro Arnedo</h1>
            <h4>FullStack Developer</h4>
            <img src={Foto} alt="Profile" width="300px" height="300px" />
        </div>
    );
}

export default Home;