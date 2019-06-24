import React from 'react';
import {MDBBtn, MDBBtnGroup, MDBContainer, MDBRow} from "mdbreact";
import AddToHomescreen from "react-add-to-homescreen";

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
                {/*<AddToHomescreen onAddToHomescreenClick={this.handleAddToHomescreenClick} />*/}
            </div>
        );
    }
    handleAddToHomescreenClick = () => {
        alert(`
    1. Open Share menu
    2. Tap on "Add to Home Screen" button`);
    };

}