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
      <div className="default-background">
              <BackgroundSlider 
                    query = {data}
                    initDelay={2}
                    transition={4}
                    duration={5}
                    images={["kitchen1.jpg","bg1.jpg","bg2.jpg","kitchen.jpeg","preethi.jpeg", "butterfly.jpg"]}
                    style={{
                      top: "105px",
                      maxHeight: "100vh",
                      backgroundSize: "cover",
                      backgroundPosition: "center"
                    }}  />
                <div>
                    <h1 className="heroheader text-uppercase display-4 font-weight-bold mt-5 ">Avinash Industries</h1>

                </div>
                <div>
                    <p className="col-10 col-sm-8 mx-auto text-center eggwhite" > We are Original Equipment Manufacturers (OEM) building high-quality products for the leading kitchen appliance brands in the nation.</p>
              
                </div>
                      
                     
          </div>

      
    <Characteristics que={data}/>
    <Info/> 
    
    <Test que={data}/>
  </Layout>

  
)

export const query = graphql`
{
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
  characteristics:allContentfulCharacteristics{
    edges{
      node{
        id
        summary
        description
        quality{
          fixed(width:100, height: 100){
            ...GatsbyContentfulFixed_tracedSVG
          }
        }
      }
    }
  }
  test: allContentfulTest(sort: {fields: clientName, order: DESC}){
    edges {
      node {
        id
        clientTestimonial
        clientName
        client{
          fixed(width: 200, height: 210) {
            ...GatsbyContentfulFixed_tracedSVG
          }
        }
      }
    }
  }
}
`;

export default IndexPage
