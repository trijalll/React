import React from "react";
import "./PubCard.css";

function PubCard(props) {
  return (
    <>
      {/* <h1>{props.tittle}</h1>
      <p>{props.Desc}</p> */}
      <div className="container">
        <div className="card">
          <div className="card__head">
            <div className="card__head__line"></div>
            <div className="card__head__tittle">
              <div className="card__tittle__name">
                <h4>{props.tittle}</h4>
                <p className="smallText">{props.time}</p>
              </div>
              <div className="card__tittle__desc">
                <p className="smallText">{props.location}</p>
              </div>
            </div>
          </div>
          <div className="card__cont">
            <div className="card__cont__line"></div>
            <div className="card__cont__desc">
              <p>{props.desc}</p>
              <p>{props.desc2}</p>
              <p>{props.desc3}</p>
              <p>{props.desc4}</p>
              <p>{props.desc5}</p>
              <p>{props.desc6}</p>
              <p>{props.desc7}</p>
              <p>{props.desc8}</p>
              <p>{props.desc9}</p>
              <p>{props.desc10}</p>
              <p>{props.desc11}</p>
              <p>{props.desc12}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PubCard;
