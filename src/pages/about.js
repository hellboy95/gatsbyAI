import React from "react"
import { Link ,graphql, useStaticQuery} from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"


import Profile from "../components/About/Profile"
import Info from "../components/Home/Info"
import Characteristics from "../components/Home/Characteristics"


const AboutPage = ({data}) => (
  <Layout>
    <SEO title="About" />
    <div className="mainContentArea">
        <div className="container">
            <div className="row">
                <div className="col-md-3 leftcol" id="leftcol">
                    <div className="sticky-top leftSticky">
                    <ul>
                        <li><a href="#profile">Company Profile</a></li>
                        <li><a href="#Team">Management Team</a></li>
                    </ul>
                    </div>
                </div>
                <div className="col-md-9" id="rightcol">
                    <Profile id="profile"/>
                    <Characteristics que={data} />
                    <Info id="Team"/>
                    <Info />
                    <Info  />
                    <Info />
                    <Info  />


                </div>
            </div>
        </div>
    </div>
    
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

export default AboutPage
