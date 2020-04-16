import React from "react"
import { Link ,graphql, useStaticQuery} from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"


import Profile from "../components/About/Profile"
import Info from "../components/Home/Info"
import Characteristics from "../components/Home/Characteristics"
import YouTube from "../components/About/YouTube"

const AboutPage = ({data}) => (
  <Layout>
    <SEO title="About" />
    <div className="mainContentArea">
        <div className="wrapper">
            <div className="row">
                <div className="col-md-3" id="leftcol">
                    <div className="sticky-top leftCol leftSticky">
                    <ul>
                        <li><a href="#profile">Company Profile</a></li>
                        <li><a href="#Team">Management Team</a></li>
                    </ul>
                    </div>
                </div>
                <div className="col-md-9 mx-auto" id="rightcol">
                    <YouTube className="youtube" /> {/* Got the info for custom Youtube responsive component from https://www.youtube.com/watch?v=EGZS58z4DSQ */}
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
