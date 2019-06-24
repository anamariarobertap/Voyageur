import React from 'react';
import {MDBContainer, MDBRow, MDBListGroup, MDBListGroupItem} from "mdbreact";

export class Facts extends React.Component {

    render() {
        return (
            <MDBContainer>
                <MDBRow className="justify-content-center">

                    <MDBListGroup className="my-4 mx-4" style={{ width: "22rem" }}>
                        <MDBListGroupItem>The Austrian flag, one of the oldest in the world, is unique in that, when flown by citizens, it is comprised of three horizontal stripes, alternating red, white, and red. When the flag is flown by the government, in addition to the triband design, it includes an eagle and a coat of arms in the center.</MDBListGroupItem>
                        <MDBListGroupItem>Vienna, the capital of Austria, is home to almost one-quarter of the entire population of the country.</MDBListGroupItem>
                        <MDBListGroupItem> It has been said that Austria only appears to be a small country on the map because so much of it is vertical. Slightly over 62% of the country is covered by the Austrian Alps, thus over two- thirds of the country is over 1,640 feet above sea level.</MDBListGroupItem>
                        <MDBListGroupItem>Founded in 1752, Austria’s zoo is recognized as the oldest zoo in the world.</MDBListGroupItem>
                        <MDBListGroupItem>Famous classical music composers Joseph Haydn, Franz Liszt, Johann Strauss, Franz Schubert, and Wolfgang Mozart were all from Austria.</MDBListGroupItem>
                        <MDBListGroupItem>The waltz was born in Austria. Specifically in the 17th-century suburbs of Vienna.</MDBListGroupItem>
                        <MDBListGroupItem>Austria is regularly named as one of the countries with the highest standard of living in the world.</MDBListGroupItem>
                        <MDBListGroupItem>In 1498 Emperor Maximilian I founded one of the most famous choirs in the world, the Vienna Boys Choir, replacing castrati with young boys whose voices had yet to change.</MDBListGroupItem>
                        <MDBListGroupItem>Austria is ruled by a parliamentary democracy with three branches of government. They are the executive branch which includes a President and a Chancellor, the legislative branch, which includes the National Council and the Federal Council, and the judicial branch, which is headed by the Supreme Judicial Court.</MDBListGroupItem>
                        <MDBListGroupItem> Austria was formed when Emperor Francis II dissolved the Holy Roman Empire. At that point, Austria became the Austrian Empire, although it was also part of the German Confederation. That ended in 1866 with the Austro-Prussian War.</MDBListGroupItem>
                        <MDBListGroupItem>The Chernobyl disaster of 1986 led to contamination of massive amounts of food in Austria. It was also responsible for Austria’s decision not to put their own nuclear power plant into operation. It was sold off in pieces and the idea of nuclear power has never been considered since then.

                        </MDBListGroupItem>

                    </MDBListGroup>
                </MDBRow>

            </MDBContainer>
        );
    }

    hide() {

    }

}