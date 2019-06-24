import React from 'react';
import {MDBBtn, MDBCollapse, MDBMedia} from "mdbreact";

export class Pubs extends React.Component {
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
            <div className="container-fluid mt-4">
                <MDBMedia style={{ maxWidth: "800px" }} className="mt-3">
                    <MDBMedia left top href="#">
                        <MDBMedia
                            object
                            src="/images/lookbar.png"
                            alt="Generic placeholder image"
                        />
                    </MDBMedia>
                    <br/>
                    <MDBMedia body>
                        <MDBMedia heading>Lookbar</MDBMedia>
                        <p>Address: Salzgries 17, 1010 Wien</p>
                        <p className="text-sm-left">Telephone: +43 321 432153</p>
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
                            <p>The prices for drinks are the exact same although they have a slightly larger drinks selection. The bar is darker and, especially in summer, gets very stuffy on the weekends. Unless you come early (8pm) you will have to reserve a table on the weekend. Has a smoking and non-smoking area. Mixed international and local crowd 5min from schwedenplatz</p>
                        </MDBCollapse>
                    </MDBMedia>
                </MDBMedia>
                <MDBMedia style={{ maxWidth: "800px" }} className="mt-3">
                    <MDBMedia left top href="#">
                        <MDBMedia
                            object
                            src="/images/kitsch.png"
                            alt="Generic placeholder image"
                        />
                    </MDBMedia>
                    <br/>
                    <MDBMedia body>
                        <MDBMedia heading>Kitsch</MDBMedia>
                        <p>Address: Ruprechtsstiege 1, 1010 Wien</p>
                        <p className="text-sm-left">Telephone: +43 111 982153</p>
                        <p><a href="https://www.tripadvisor.com/Hotel_Review-g190427-d280582-Reviews-Seehotel_Gruener_Baum-Hallstatt_Upper_Austria.html">Website</a></p>
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
                            <p>Best time to go to kitsch is on a Thursday. If you come before 8 all longdrinks are FREE (with a limit of 2 per person) afterwards the price increases by 50cents per hour. On all other days the drinks cost 2.80- The bar is relatively new and is clean with a distinct smoking and non smoking section. In summer you can also sit outside. Mostly local younger crowd 2min from schwedenplatz</p>
                        </MDBCollapse>
                    </MDBMedia>
                </MDBMedia>
                <MDBMedia style={{ maxWidth: "800px" }} className="mt-3">
                    <MDBMedia left top href="#">
                        <MDBMedia
                            object
                            src="/images/uni.png"
                            alt="Generic placeholder image"
                        />
                    </MDBMedia>
                    <br/>
                    <MDBMedia body>
                        <MDBMedia heading>Uni Alm</MDBMedia>
                        <p>Address: Hörlgasse 10, 1090 Wien</p>
                        <p className="text-sm-left">Telephone: +43 223 173543</p>
                        <p><a href="https://www.tripadvisor.com/Hotel_Review-g190427-d280582-Reviews-Seehotel_Gruener_Baum-Hallstatt_Upper_Austria.html">Website</a></p>
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
                            <p>A bar near the Votiv park where all drinks cost 2 euros. Rather grimey and has a slightly sketchy feel to it however it is in a safe part of vienna so there is nothing to worry about. Mostly university students and locals.</p>
                        </MDBCollapse>
                    </MDBMedia>
                </MDBMedia>
            </div>
        );
    }

    hide() {

    }

}