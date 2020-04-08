import React from 'react';
import { useStaticQuery, graphql } from "gatsby"

import BackgroundSlider from 'gatsby-image-background-slider';

export default function Slider() {
    return (
      <BackgroundSlider 
      initDelay={2} // delay before the first transition (if left at 0, the first image will be skipped initially)
      transition={4} // transition duration between images
      duration={8} // how long an image is shown
      // specify images to include (and their order) according to `relativePath`
      images={["preethi.jpeg", "butterfly.png"]} 

      // pass down standard element props
      style={{
        transform: "rotate(-2deg) scale(.9)",
      }}           
    > 
      {/* Captions in sync with background images*/}
      <div>Woof</div>
      <div>Meow</div>
      
    </BackgroundSlider>
        
    )
}
