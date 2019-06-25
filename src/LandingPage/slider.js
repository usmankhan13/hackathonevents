import React, { Component } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
import sliderimg from '../img/bg3.png';
const items = [
  {
    src: sliderimg,
    altText: 'HACKATHON EVENTS',
    caption: 'Block chain solutions to correct problems with database',
  }
  
];

class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <img src={item.src} alt={item.altText} style={{width:'100%'}}/>
          <CarouselCaption captionText={item.caption} captionHeader={item.altText} />
        </CarouselItem>
      );
    });

    return (
      <Carousel 
        activeIndex={activeIndex}>
      
        <CarouselIndicators style={{ fontWeight: 'bold'}}  items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
        {slides}
      
      </Carousel>
    );
  }
}


export default Slider;
