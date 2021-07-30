import React from 'react';

const Footer = () => {
    return (
        <footer>
            <div className="footer-content">
                <div className="row">
                    <div className="col-3">
                        <h2>Dustlikdon.uz</h2>
                        <p>Jizzax viloyati Do‘stlik tumani
                            Sanoatchilar MFY Sanoat ko‘chasi 49</p>
                    </div>

                    <div className="col-3">
                        <h3>Asosiy</h3>
                        <ul className="nav flex-column">
                            <li className="nav-item"><a href="#1" className="nav-link">Jamiyat haqida</a></li>
                            <li className="nav-item"><a href="#1" className="nav-link">Struktura</a></li>
                            <li className="nav-item"><a href="#1" className="nav-link">Yangiliklar</a></li>
                        </ul>
                    </div>

                    <div className="col-3">
                        <h3>Xizmatlar</h3>
                        <ul className="nav flex-column">
                            <li className="nav-item"><a href="#1" className="nav-link">Elektron murojaat</a></li>
                            <li className="nav-item"><a href="#1" className="nav-link">Interaktiv xizmatlar</a></li>
                            <li className="nav-item"><a href="#1" className="nav-link">Saytdan izlash</a></li>
                        </ul>
                    </div>

                    <div className="col-3">
                        <h3>Bog'lanish</h3>
                        <ul className="nav flex-column">
                            <li className="nav-item">
                                <a href="#1" className="nav-link">
                                    <img src="/assets/icons/info-tel.svg" alt="" />
                                    <span>+998 71 335 41 16</span>
                                </a>
                            </li>

                            <li className="nav-item">
                                <a href="#1" className="nav-link">
                                    <img src="/assets/icons/message.svg" alt="" />
                                    <span>info@dustlikdon.uz</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>


            </div>
        </footer>
    );
};


export default Footer;