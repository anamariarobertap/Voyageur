import React from 'react';
import {MDBContainer, MDBCardGroup, MDBCardImage, MDBCardTitle, MDBCardText, MDBCardBody, MDBCard, MDBBtn} from "mdbreact";

export class Traditions extends React.Component {

    render() {
        return (
            <MDBContainer>
                <MDBCardGroup>
                    <MDBCard>
                        <MDBCardImage
                            src="https://mdbootstrap.com/img/Photos/Others/images/49.jpg"
                            alt="MDBCard image cap"
                            top
                            hover
                            overlay="white-slight"
                        />
                        <MDBCardBody>
                            <MDBCardTitle tag="h5">Panel title</MDBCardTitle>
                            <MDBCardText>
                                Some quick example text to build on the card title and make up
                                the bulk of the card's content.
                            </MDBCardText>
                            <MDBBtn color="primary" size="md">
                                read more
                            </MDBBtn>
                        </MDBCardBody>
                    </MDBCard>

                    <MDBCard>
                        <MDBCardImage
                            src="https://mdbootstrap.com/img/Photos/Others/images/48.jpg"
                            alt="MDBCard image cap"
                            top
                            hover
                            overlay="white-slight"
                        />
                        <MDBCardBody>
                            <MDBCardTitle tag="h5">Panel title</MDBCardTitle>
                            <MDBCardText>
                                Some quick example text to build on the card title and make up
                                the bulk of the card's content.
                            </MDBCardText>
                            <MDBBtn color="primary" size="md">
                                read more
                            </MDBBtn>
                        </MDBCardBody>
                    </MDBCard>

                    <MDBCard>
                        <MDBCardImage
                            src="https://mdbootstrap.com/img/Photos/Others/images/77.jpg"
                            alt="MDBCard image cap"
                            top
                            hover
                            overlay="white-slight"
                        />
                        <MDBCardBody>
                            <MDBCardTitle tag="h5">Panel title</MDBCardTitle>
                            <MDBCardText>
                                Some quick example text to build on the card title and make up
                                the bulk of the card's content.
                            </MDBCardText>
                            <MDBBtn color="primary" size="md">
                                read more
                            </MDBBtn>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCardGroup>

                <MDBCardGroup deck className="mt-3">
                    <MDBCard>
                        <MDBCardImage
                            src="https://mdbootstrap.com/img/Photos/Others/images/16.jpg"
                            alt="MDBCard image cap"
                            top
                            hover
                            overlay="white-slight"
                        />
                        <MDBCardBody>
                            <MDBCardTitle tag="h5">Panel title</MDBCardTitle>
                            <MDBCardText>
                                Some quick example text to build on the card title and make up
                                the bulk of the card's content.
                            </MDBCardText>
                            <MDBBtn color="light-blue" size="md">
                                read more
                            </MDBBtn>
                        </MDBCardBody>
                    </MDBCard>

                    <MDBCard>
                        <MDBCardImage
                            src="https://mdbootstrap.com/img/Photos/Others/images/14.jpg"
                            alt="MDBCard image cap"
                            top
                            hover
                            overlay="white-slight"
                        />
                        <MDBCardBody>
                            <MDBCardTitle tag="h5">Panel title</MDBCardTitle>
                            <MDBCardText>
                                Some quick example text to build on the card title and make up
                                the bulk of the card's content.
                            </MDBCardText>
                            <MDBBtn color="light-blue" size="md">
                                read more
                            </MDBBtn>
                        </MDBCardBody>
                    </MDBCard>

                    <MDBCard>
                        <MDBCardImage
                            src="https://mdbootstrap.com/img/Photos/Others/images/15.jpg"
                            alt="MDBCard image cap"
                            top
                            hover
                            overlay="white-slight"
                        />
                        <MDBCardBody>
                            <MDBCardTitle tag="h5">Panel title</MDBCardTitle>
                            <MDBCardText>
                                Some quick example text to build on the card title and make up
                                the bulk of the card's content.
                            </MDBCardText>
                            <MDBBtn color="light-blue" size="md">
                                read more
                            </MDBBtn>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCardGroup>
            </MDBContainer>
        );
    }

    hide() {

    }

}