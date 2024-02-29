import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Body from "./Body";
import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Experiences from "./Experiences";
import Awards from "./Awards";
import Publications from "./Publications";

function App() {
  return (
    <>
      {/* <BrowserRouter> */}
      <div className="main">
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Body/>}></Route>
          <Route path="/experiences" element={<Experiences/>}></Route>
          <Route path="/awards" element={<Awards/>}></Route>
          <Route path="/publications" element={<Publications/>}></Route>
        </Routes>
        <Footer></Footer>
      </div>
      {/* </BrowserRouter> */}
    </>
  );
}
export default App;
