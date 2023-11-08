import React from 'react';
import Samsung from "../assets/Samsung.png"
import Mitsubishi from "../assets/Mitsubishi.png"
import Toshiba from "../assets/Toshiba.png"
import Panasonic from "../assets/Panasonic.png"
import LG from "../assets/LG.png"
import Gree from "../assets/Gree.png"
import Haier from "../assets/Haier.png"
import Daikin from "../assets/Daikin.png"
import Sinclair from "../assets/sinclair-002.png"
import Rotenso from "../assets/46.jpg"
import Aux from "../assets/klimatyzacja-aux1.png"
const Catalogues = () => {
    return (
        <section className="catalogues" id="catalogues">
            <div className="container">
                <div className="catalogues_items_container">
                <div className="catalogues_items">
                    <a href="">
                    <img className="catalogues_item" src={Samsung} alt={Samsung}/>
                    </a>
                    <img className="catalogues_item"  src={Mitsubishi} alt={Mitsubishi}/>
                    <img className="catalogues_item"  src={Toshiba} alt={Toshiba}/>
                    <img className="catalogues_item"  src={LG} alt={LG}/>
                </div>
                <div className="catalogues_items">
                    <img className="catalogues_item"  src={Panasonic} alt={Panasonic}/>
                    <img className="catalogues_item"  src={Rotenso} alt={Rotenso}/>
                    <img className="catalogues_item"  src={Gree} alt={Gree}/>
                    <img className="catalogues_item"  src={Aux} alt={Aux}/>
                </div>
                <div className="catalogues_items">
                    <img className="catalogues_item"  src={Haier} alt={Haier}/>
                    <img className="catalogues_item"  src={Daikin} alt={Daikin}/>
                    <img className="catalogues_item"  src={Sinclair} alt={Sinclair}/>
                </div>
                </div>
                <div className="catalogues_text">
                <h1>Oferta Klimatyzatorów</h1>
                <p className="text">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                </div>
            </div>
        </section>
    );
};

export default Catalogues;