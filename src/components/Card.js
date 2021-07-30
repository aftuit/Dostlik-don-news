import React from 'react';

const Card = (props) => {
    return (
        <div className="card">
            <div className="card-header d-flex justify-content-center align-items-center">
                <img src={props.img} alt="" className="w-100 h-100"/>
            </div>
            <div className="card-body">
                <div className="d-flex justify-content-between">
                    <div className="date">
                        <img src="/assets/icons/date.svg" alt=""/>
                        <span className="ml-1">{props.time}</span>
                    </div>
                    <div className="views">
                        <img src="/assets/icons/view.svg" alt=""/>
                        <span className="ml-1">{props.view}</span>
                    </div>
                    <div className="comments">
                        <img src="/assets/icons/comment.svg" alt=""/>
                        <span className="ml-1">{props.comment}</span>
                    </div>

                </div>
            
                <h3 className="mt-3">{props.title}</h3>
                
                <p className="mt-3">{props.info}</p>

                <button className="btn btn-outline-success font-weight-bold">Batafsil</button>
            </div>
        </div>
    );
};


export default Card;