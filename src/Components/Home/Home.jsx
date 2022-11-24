import React from "react";
import Foto from '../../Icons/Profile/foto.jpg';
import './Home.css';

function Home() {
    return (
        <div id='home' className="contain">
            <h1>Mauro Arnedo</h1>
            <h4>FullStack Developer</h4>
            <img className="profile" src={Foto} alt="Profile"/>
        </div>
    );
}

export default Home;