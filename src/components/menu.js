import React from 'react';
import {MDBBtn, MDBBtnGroup, MDBContainer, MDBRow} from "mdbreact";
import AddToHomescreen from "react-add-to-homescreen";
import ReactDOM from "react-dom";
import App from "../App";
import {Restaurants} from "./restaurants";
import {Blog} from "./blog";
import {Pubs} from "./pubs";
import {Journeys} from "./journeys";
import {Traditions} from "./traditions";
import {Hotels} from "./hotels";

export class Menu extends React.Component {

    render() {
        return (
            <div className="container-fluid flex-center">
                <MDBContainer className="pb-5">
                    <MDBRow center>
                        <div className="btn-toolbar justify-content-sm-center" role="toolbar" aria-label="Toolbar with button groups">
                            <MDBBtnGroup className="mr-2">
                                <MDBBtn onClick={this.renderRestaurant} href="#restaurants">Restaurants</MDBBtn>
                                <MDBBtn onClick={this.renderBlog} href="#blog" >Blog</MDBBtn>
                                <MDBBtn onClick={this.renderPubs} href="#pubs">Pubs</MDBBtn>
                            </MDBBtnGroup>
                        </div>
                    </MDBRow>
                    <MDBContainer className="pb-5">
                        <MDBRow center>
                            <div className="btn-toolbar justify-content-sm-center" role="toolbar" aria-label="Toolbar with button groups">
                                <MDBBtnGroup className="mr-2">
                                    <MDBBtn onClick={this.renderJourneys} href="#journeys" >Journeys</MDBBtn>
                                    <MDBBtn onClick={this.renderHotels} href="#hotels">Hotels</MDBBtn>
                                    <MDBBtn onClick={this.renderTraditions} href="#trips" >Traditions</MDBBtn>
                                </MDBBtnGroup>
                            </div>
                        </MDBRow>
                    </MDBContainer>
                </MDBContainer>
                {/*<AddToHomescreen onAddToHomescreenClick={this.handleAddToHomescreenClick} />*/}
            </div>
        );
    }

    renderRestaurant() {
        ReactDOM.render(<Restaurants />, document.getElementById('content-to-fill'));
    }

    renderBlog() {
        ReactDOM.render(<Blog />, document.getElementById('content-to-fill'));
    }

    renderPubs() {
        ReactDOM.render(<Pubs />, document.getElementById('content-to-fill'));
    }

    renderHotels() {
        ReactDOM.render(<Hotels />, document.getElementById('content-to-fill'));
    }

    renderJourneys() {
        ReactDOM.render(<Journeys />, document.getElementById('content-to-fill'));
    }
    renderTraditions() {
        ReactDOM.render(<Traditions />, document.getElementById('content-to-fill'));
    }
}