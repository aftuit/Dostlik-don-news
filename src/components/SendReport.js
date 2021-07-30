import React from 'react';

const SendReport = () => {
    return (
        <div className="container-report d-flex justify-content-between align-items-center">

            <img className="ml-4" src="/assets/icons/icn-true.svg" alt=""/>
            
            <h1>
                Shikoyatlar mavjudmi?
                onlayn tarzda yuboring
            </h1>

            <button type="button" className="btn btn-success">Murojaat yuborish</button>

            <img src="/assets/images/main.png" alt=""/>
        </div>
    );
};


export default SendReport;