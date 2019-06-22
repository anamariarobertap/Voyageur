import React from 'react';
import {MDBBtn, MDBBtnGroup, MDBContainer, MDBRow} from "mdbreact";

export class Menu extends React.Component {

    render() {
        return (
            <div className="container-fluid flex-center">
                <MDBContainer className="pb-5">
                    <MDBRow center>
                        <div className="btn-toolbar justify-content-sm-center" role="toolbar" aria-label="Toolbar with button groups">
                            <MDBBtnGroup className="mr-2">
                                <MDBBtn>Restaurants</MDBBtn>
                                <MDBBtn>Blog</MDBBtn>
                                <MDBBtn>Pubs</MDBBtn>
                            </MDBBtnGroup>
                        </div>
                    </MDBRow>
                    <MDBContainer className="pb-5">
                        <MDBRow center>
                            <div className="btn-toolbar justify-content-sm-center" role="toolbar" aria-label="Toolbar with button groups">
                                <MDBBtnGroup className="mr-2">
                                    <MDBBtn>Journeys</MDBBtn>
                                    <MDBBtn>Hotels</MDBBtn>
                                    <MDBBtn>Trips</MDBBtn>
                                </MDBBtnGroup>
                            </div>
                        </MDBRow>
                    </MDBContainer>
                </MDBContainer>
            </div>
        );
    }
}