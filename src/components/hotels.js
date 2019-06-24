import React from 'react';
import {MDBBtn, MDBCollapse, MDBMedia} from "mdbreact";


export class Hotels extends React.Component {
    state = {
        collapseID: ""
    };

    toggleCollapse = (collapseID) => () => {
        this.setState(prevState => ({
            collapseID: prevState.collapseID !== collapseID ? collapseID : ""
        }));
    };
    render() {
        return (
            <div className="container-fluid mt-4 flex-column flex-center">
                <MDBMedia style={{ maxWidth: "800px" }} className="mt-3">
                    <MDBMedia left top href="#">
                        <MDBMedia
                            object
                            src="/images/gruner.png"
                            alt="Generic placeholder image"
                        />
                    </MDBMedia>
                    <br/>
                    <MDBMedia body>
                        <MDBMedia heading>SeeHotel Gruener Baum</MDBMedia>
                        <p>Address: Marktplatz 104, Hallstatt 4830, Austria </p>
                        <p className="text-sm-left">Telephone: +43 888 662660</p>
                        <p><a href="https://www.tripadvisor.com/Hotel_Review-g190427-d280582-Reviews-Seehotel_Gruener_Baum-Hallstatt_Upper_Austria.html">Website</a></p>
                        <div>
                            <MDBBtn
                                color="primary"
                                onClick={this.toggleCollapse("accordion2")}
                                style={{ marginBottom: "1rem" }}
                            >
                                Learn more
                            </MDBBtn>
                        </div>
                        <MDBCollapse id="accordion2" isOpen={this.state.collapseID}>
                            See why so many travelers make Seehotel Gruener Baum their hotel of choice when visiting Hallstatt. Providing an ideal mix of value, comfort and convenience, it offers a romantic setting with an array of amenities designed for travelers like you. The rooms offer a flat screen TV, a minibar, and a desk, and getting online is possible, as free wifi is available, allowing you to rest and refresh with ease. Seehotel Gruener Baum features baggage storage, express check-in and check-out, and a coffee shop.
                        </MDBCollapse>
                    </MDBMedia>
                </MDBMedia>
                <MDBMedia style={{ maxWidth: "800px" }} className="mt-3">
                    <MDBMedia left top href="#">

                        <MDBMedia
                            object
                            src="/images/suzane.png"
                            alt="Generic placeholder image"
                        />
                    </MDBMedia>
                    <br/>
                    <MDBMedia body>
                        <MDBMedia heading>Pension Suzanne</MDBMedia>
                        <p>Address: Walfischgasse 4, Vienna 1010, Austria </p>
                        <p className="text-sm-left">Telephone: +43 932 662660</p>
                        <p><a href="https://www.tripadvisor.com/Hotel_Review-g190454-d195236-Reviews-Pension_Suzanne-Vienna.html">Website</a></p>
                        <div>
                            <MDBBtn
                                color="primary"
                                onClick={this.toggleCollapse("accordion3")}
                                style={{ marginBottom: "1rem" }}
                            >
                                Learn more
                            </MDBBtn>
                        </div>
                        <MDBCollapse id="accordion3" isOpen={this.state.collapseID}>
                            Welcome to Pension Suzanne, your Vienna “home away from home.” Pension Suzanne aims to make your visit as relaxing and enjoyable as possible, which is why so many guests continue to come back year after year. Nearby landmarks such as State Hall of the Austrian National Library (0.3 mi) and Stephansplatz (0.4 mi) make Pension Suzanne Hotel a great place to stay when visiting Vienna. Rooms at Pension Suzanne provide a flat screen TV, and guests can stay connected with free wifi.
                        </MDBCollapse>
                    </MDBMedia>
                </MDBMedia>
                <MDBMedia style={{ maxWidth: "800px" }} className="mt-3">
                    <MDBMedia left top href="#">
                            <MDBMedia
                                object
                                src="/images/capri.png"
                                alt="Generic placeholder image"
                            />
                    </MDBMedia>
                    <br/>
                    <MDBMedia body>
                        <MDBMedia heading>Das Capri. Ihr Wiener Hotel</MDBMedia>
                        <p>Address: Praterstrasse 44-46 | 1020 Vienna, Vienna 1020, Austria </p>
                        <p className="text-sm-left">Telephone: +43 553 432213</p>
                        <p><a href="https://www.tripadvisor.com/Hotel_Review-g190454-d264915-Reviews-Das_Capri_Ihr_Wiener_Hotel-Vienna.html">Website</a></p>
                        <div>
                            <MDBBtn
                                color="primary"
                                onClick={this.toggleCollapse("accordion4")}
                                style={{ marginBottom: "1rem" }}
                            >
                                Learn more
                            </MDBBtn>
                        </div>
                        <MDBCollapse id="accordion4" isOpen={this.state.collapseID}>
                            Our Hotel follows a clear philosophy oriented primarily toward the expectations of our guests, guaranteeing that you will love your memories of your stay in Vienna. Our philosophy here at Hotel Capri is easy to describe, but better to experience. Learn more about the merits of our popular family-run hotel in Vienna.The Hotel Capri PhilosophyDiscover the beauty of the Austrian capital and spend the night in our hotel in Vienna known and loved for its ideology of friendly service
                        </MDBCollapse>
                    </MDBMedia>
                </MDBMedia>
            </div>
        );
    }

    hide() {

    }

}