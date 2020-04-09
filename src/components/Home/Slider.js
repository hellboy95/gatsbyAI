import React from 'react';
import { useStaticQuery, graphql } from "gatsby"

import BackgroundSlider from 'gatsby-image-background-slider';

export default function Slider() {
    return (
      <BackgroundSlider 
      query = {useStaticQuery(graphql`
                  query{
                    backgrounds: allFile(filter: {sourceInstanceName: {eq: "images"}}) {
                      nodes{
                        relativePath
                        childImageSharp {
                          fluid(maxWidth: 2000, quality: 100) {
                            ...GatsbyImageSharpFluid_withWebp
                          }
                        }
                      }
                    }
                  }
                `)}
      initDelay={2}
      transition={4}
      duration={5}
      images={["kitchen1.jpg","kitchen.jpeg","preethi.jpeg", "butterfly.jpg"]}
      style={{
        top: "105px",
        maxHeight: "50vh",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}  />
        
    )
}
