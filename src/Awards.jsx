import React from "react";
import "./Awards.css";
import Card from "./Card";
// import './Experiences.css'

function Awards() {
  return (
    <>
      <div className="experiences">
        <div className="experiences__heading">
          <div className="experiences__heading__h1">
            <h1>AWARDS AND COMPETITIVE EXAMS</h1>
            <div className="experiences__line"></div>
          </div>
        </div>
        <div className="experiences__card">
          <Card
            tittle="University Grant Commission Delhi, India"
            time="November, 2017"
            location="National Eligibility Test for Lecturer (NET)"
            desc="The National Eligibility Test, also known as UGC NET or NTA-UGC-NET, is a test to
            determine eligibility for college and university level lectureship and for the award of Junior
            Research Fellowship for Indian nationals. It aims to ensure minimum standards for the entrants
            in teaching professions and research"
          ></Card>
          <Card
            tittle="Graduate Aptitude Test of Engineer IIT, India"
            time="GATE-2009, 2011"
            location="GATE-2009 with 92 percentile Feb, 2009 & 89.24 percentile in 2011"
            desc="Graduate Aptitude Test in Engineering (GATE) is an examination conducted jointly by the
            Indian Institute of Science (IISc), Bangalore and the seven Indian Institutes of Technology (at
            Bombay, Delhi, Guwahati, Kanpur, Kharagpur, Madras and Roorkee) on behalf of the National
            Coordination Board (NCB)-GATE, Department of Higher Education, Ministry of Human
            Resource Development (MHRD), Government of India."
          ></Card>
        </div>
      </div>
    </>
  );
}

export default Awards;
