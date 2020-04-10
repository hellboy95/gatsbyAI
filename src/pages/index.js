import React from "react"
import { Link ,graphql, useStaticQuery} from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"


import Info from "../components/Home/Info"

import BackgroundSlider from "gatsby-image-background-slider"
import Characteristics from "../components/Home/Characteristics"
import Test from "../components/Home/Test"

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    {/* <Background className="col-10 col-sm-10" img={data.img.childImageSharp.fluid} styleClass="default-background gradient:after">
      <div className="gradient">
      Avinash Industries
      </div>
        
      </Background> */}
      <div className="default-background">
            <div className="container">   
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
                      <h1 className="heroheader title text-white text-center text-uppercase display-4 font-weight-bold ">Avinash Industries</h1>
                      <p className="col-10 col-sm-8 mx-auto text-center eggwhite" > We are Original Equipment Manufacturers (OEM) building high-quality products for the leading kitchen appliance brands in the nation.</p>
              </div>   
          </div>
      
    <Characteristics/>
    <Info/> 
    
    <Test/>
  </Layout>

  
)



export default IndexPage
