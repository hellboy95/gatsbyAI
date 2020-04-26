import React from "react"
import { graphql} from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"


import Profile from "../components/About/Profile"
import YouTube from "../components/About/YouTube"
import Banner from "../components/About/Banner"
import Timeline from "../components/About/Timeline"
import Mission from "../components/About/Mission"
import Team from "../components/About/Team"


const AboutPage = ({data}) => (
  <Layout>
    <SEO title="About" />
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-10 mx-auto" id="rightcol">
                          <div className="container-fluid sticky-top mx-auto py-3 ">
                              <div className="row mx-auto ">
                                  <div className="col-4 text-center">
                                      <a href="#profile" ><span>Company Profile</span></a>
                                  </div>
                                  <div className="col-4 text-center">
                                      <a href="#mission"><span>Our Mission & Vision</span></a>
                                  </div>
                                  <div className="col-4 text-center">
                                      <a href="#team" ><span>Our Team</span></a>
                                  </div>

                              </div>
                      </div>
                    <Banner header="Company Profile" id="profile"/>
                    <YouTube className="youtube" /> {/* Got the info for custom Youtube responsive component from https://www.youtube.com/watch?v=EGZS58z4DSQ */}
                    <Profile />
                    <Timeline que={data} />
                    <div id="mission"></div>
                    <Mission/> 
                    <div id="team"></div>
                    <Banner header="Management Team"/>
                    <Team que={data} />
                    
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
  team:allContentfulTeam{
    edges{
      node{
        name1
        role
        memberPhoto{
          fixed(width:100, height: 100){
            ...GatsbyContentfulFixed_tracedSVG
          }
        }
      }
    }
  }
  
}
`;

export default AboutPage
