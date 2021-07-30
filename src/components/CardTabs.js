import React from 'react';

const CardTabs = (props) => {
    return (
        <div className="card">
        <div className="card-header d-flex justify-content-center align-items-center">
            <img src={props.data.img} alt="main-img" className="w-100"/>

            <img src={props.data.icon} alt=""/>
            
        </div>
        <div className="card-body">

        <h3 className="">{props.data.title}</h3>

            <div className="d-flex justify-content-between mt-3">
                <div className="date">
                    <img src="/assets/icons/date.svg" alt=""/>
                    <span className="ml-1">16:48 / 12.11.20</span>
                </div>
                <div className="views">
                    <img src="/assets/icons/view.svg" alt=""/>
                    <span className="ml-1">321</span>
                </div>
                <div className="comments">
                    <img src="/assets/icons/comment.svg" alt=""/>
                    <span className="ml-1">100</span>
                </div>

            </div>
        </div>
    </div>
    );
};


export default CardTabs;