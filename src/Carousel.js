import React, { Component } from "react"
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBMask,
  MDBContainer, MDBCarouselCaption
} from "mdbreact"
import greecespartan from './assets/images/carousel/greecespartan.jpg'
import hockeyCT from './assets/images/carousel/hockeyCT.JPG'
import sunrise from './assets/images/carousel/sunrise.jpg'
import lookingout from './assets/images/carousel/lookingout.JPG'
import usapl from './assets/images/carousel/IMG_1018.PNG'

class CarouselPage extends Component {
  render() {
    return (
      <MDBContainer>
        <MDBCarousel
          activeItem={1}
          length={5}
          showControls={true}
          showIndicators={true}
          className="z-depth-4"
        >
          <MDBCarouselInner>
            <MDBCarouselItem itemId="1">
              <MDBView>
                <img
                  className="d-block w-100"
                  src={greecespartan}
                  alt="First slide"
                />
                <MDBMask overlay="black-strong" />
              </MDBView>
              <MDBCarouselCaption>
              <div className='dark-opacity'>
            <h3 className="h3-responsive">Obstacle Course Racer</h3>
            <p>Spartan World Trifecta Championship</p>
            <p>Sparta, Greece - 2018</p>
            </div>
            </MDBCarouselCaption>
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
              <MDBCarouselCaption>
              <div className='dark-opacity'>
            <h3 className="h3-responsive">Hockey Player</h3>
            <p>Stephen Lambert Memorial Hockey Tournament</p>
            <p>Groton, CT - 2018</p>
            </div>
            </MDBCarouselCaption>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="3">
              <MDBView>
                <img
                  className="d-block w-100"
                  src={sunrise}
                  alt="Third slide"
                />
                <MDBMask overlay="black-strong" />
              </MDBView>
              <MDBCarouselCaption>

            <div className='dark-opacity'>
          <h3 className="h3-responsive">Adventurer</h3>
          <p>Single day Pemi loop traversal.</p>
          <p>White Mountains, NH - 2020</p>
          </div>
            </MDBCarouselCaption>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="4">
              <MDBView>
                <img
                  className="d-block w-100"
                  src={lookingout}
                  alt="Fourth slide"
                />
                <MDBMask overlay="black-strong" />
              </MDBView>
              <MDBCarouselCaption>
              <div className='dark-opacity'>
            <h3 className="h3-responsive">Hiker</h3>
            <p>Completed the 48 4,000ft summits in the White Mountains.</p>
            <p>New Hampshire - 2020</p>
            </div>
            </MDBCarouselCaption>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="5">
              <MDBView>
                <img
                  className="d-block w-100"
                  src={usapl}
                  alt="Fifth slide"
                />
                <MDBMask overlay="black-strong" />
              </MDBView>
              <MDBCarouselCaption>
              <div className='dark-opacity'>
            <h3 className="h3-responsive">USAPL Powerlifter</h3>
            <p>USAPL Massachussets Regional- 470lb Deadlift</p>
            <p>Needham Heights, Massachussets - 2019</p>
            </div>
            </MDBCarouselCaption>
            </MDBCarouselItem>
          </MDBCarouselInner>
        </MDBCarousel>
      </MDBContainer>
    );
  }
}

export default CarouselPage
