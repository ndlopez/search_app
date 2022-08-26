import React from "react";

function Card({person}){
    return(
        <div className="card" style={{width:'18rem'}}>
            <img className="card-img-top" alt={person.name} 
            src={process.env.PUBLIC_URL + person.imgPath} />
            <div className="card-body">
                <h4 className="card-title">{person.name}</h4>
                <h5 className="card-text">{person.address}</h5>
                <p className="card-text">{person.email}</p>
            </div>
        </div>
    );
}

export default Card;
