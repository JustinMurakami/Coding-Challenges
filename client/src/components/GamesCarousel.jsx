import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

export default function GamesCarousel(props) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel onSelect={handleSelect}>
      <Carousel.Item>
        <img src="https://i.imgur.com/otlQznY.jpg" title="source: imgur.com" />
        <img src="https://i.imgur.com/otlQznY.jpg" title="source: imgur.com" />
        <img src="https://i.imgur.com/otlQznY.jpg" title="source: imgur.com" />
      </Carousel.Item>
      <Carousel.Item>
        <img src="https://i.imgur.com/4JQx5Sr.jpg" title="source: imgur.com" />
        <img src="https://i.imgur.com/4JQx5Sr.jpg" title="source: imgur.com" />
        <img src="https://i.imgur.com/4JQx5Sr.jpg" title="source: imgur.com" />
      </Carousel.Item>
      <Carousel.Item>
        <img src="https://i.imgur.com/b6XVrXw.jpg" title="source: imgur.com" />
        <img src="https://i.imgur.com/b6XVrXw.jpg" title="source: imgur.com" />
        <img src="https://i.imgur.com/b6XVrXw.jpg" title="source: imgur.com" />
      </Carousel.Item>
    </Carousel>
  );
}