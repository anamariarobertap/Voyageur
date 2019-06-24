import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Restaurants, Title} from "./components/title";
import {Menu} from "./components/menu";
import { MDBBtn, MDBBtnGroup, MDBIcon, MDBContainer, MDBCol, MDBRow, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "./index.css";
import AddToHomescreen from 'react-add-to-homescreen';


function App() {

  return (
      <div className="main">
        <div className="maidsn-inside-c">
          <Title/>
          <Menu/>
        </div>
      </div>

  );

}

export default App;
