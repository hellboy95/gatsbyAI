import React from "react"
import { Link ,graphql, useStaticQuery} from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"


import Profile from "../components/About/Profile"
import Info from "../components/Home/Info"
import Characteristics from "../components/Home/Characteristics"
import YouTube from "../components/About/YouTube"
import Banner from "../components/About/Banner"
import Timeline from "../components/About/Timeline"

const AboutPage = ({data}) => (
  <Layout>
    <SEO title="About" />
        <div className="container-fluid ">
            <div className="row">
                <div className="col-lg-2" id="leftcol">
                    <div className="sticky-top leftCol ">
                        <ul >
                            <li ><a href="#profile" className="leftSticky">Company Profile</a></li>
                            <li><a href="#Team" className="leftSticky">Management Team</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-10 about-background mx-auto" id="rightcol">
                    <Banner header="Company Profile" id="profile"/>
                    <YouTube className="youtube" /> {/* Got the info for custom Youtube responsive component from https://www.youtube.com/watch?v=EGZS58z4DSQ */}
                    <Profile />
                    <Timeline que={data} />
                    <Info id="Team"/>  
                </div>
            </div>
        </div>
    
  </Layout>

  
)



export const query = graphql`
{
  timeline:allContentfulTimeline(sort: {fields: year, order: ASC}){
    edges{
      node{
        year
        yearSummary
        yearPhoto{
          fixed(width:200, height: 200){
            ...GatsbyContentfulFixed_tracedSVG
          }
        }
      }
    }
  }
}
`;

export default AboutPage
