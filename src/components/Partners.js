import React from 'react';

const Partners = (props) => {
    return (
        <a href="#partner" 
            className=" h-100 
                        w-100 
                        partner-card 
                        text-center 
                        justify-content-center 
                        align-items-center 
                        d-flex 
                        bg-white 
                        text-decoration-none 
                        text-dark">
            <div className="partner-content h-100 w-100 m-2" >
                <img src={props.img} alt="" className="mt-2"/>
                <p className="mt-2">{props.title}</p>
            </div>
            <span>{props.partnerLink}</span>
        </a>
    );
};


export default Partners;