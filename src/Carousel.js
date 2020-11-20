import React, { Component } from "react"
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBMask,
  MDBContainer
} from "mdbreact"
import greecespartan from './greecespartan.jpg'
import hockeyCT from './hockeyCT.JPG'
import sunrise from './sunrise.jpg'

class CarouselPage extends Component {
  render() {
    return (
      <MDBContainer>
        <MDBCarousel
          activeItem={1}
          length={3}
          showControls={true}
          showIndicators={true}
          className="z-depth-1"
        >
          <MDBCarouselInner>
            <MDBCarouselItem itemId="1">
              <MDBView>
                <img
                  className="d-block w-100"
                  src={greecespartan}
                  alt="First slide"
                />
                <MDBMask overlay="black-light" />
              </MDBView>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="2">
              <MDBView>
                <img
                  className="d-block w-100"
                  src={hockeyCT}
                  alt="Second slide"
                />
                <MDBMask overlay="black-strong" />
              </MDBView>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="3">
              <MDBView>
                <img
                  className="d-block w-100"
                  src={sunrise}
                  alt="Third slide"
                />
                <MDBMask overlay="black-slight" />
              </MDBView>
            </MDBCarouselItem>
          </MDBCarouselInner>
        </MDBCarousel>
      </MDBContainer>
    );
  }
}

export default CarouselPage
