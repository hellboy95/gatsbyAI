import React from "react"
import { Link ,graphql, useStaticQuery} from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Twobgt from "../../components/Product/Twobgt"

const GlasstopPage = ({data}) => (
  <Layout>
    <SEO title="Product/glasstop" />
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-12">

                    <Twobgt que={data} header="Two Burner"/>
                    <Twobgt que={data} header="Two Burner"/>
                </div>
                
                
            </div>
        </div>
    
  </Layout>

  
)



export const query = graphql`
{
    smart: allContentfulSmart{
        edges{
          node{
            id
            photoName
            photo{
              fixed(width:900, height: 500){
                ...GatsbyContentfulFixed_tracedSVG
              }
            }
          }
        }
      }
      streak: allContentfulStreak{
        edges{
          node{
            id
            photoName
            photo{
              fixed(width:900, height: 500){
                ...GatsbyContentfulFixed_tracedSVG
              }
            }
          }
        }
      }
      streakauto: allContentfulStreakauto{
        edges{
          node{
            id
            photoName
            photo{
              fixed(width:900, height: 500){
                ...GatsbyContentfulFixed_tracedSVG
              }
            }
          }
        }
      }
      gleam: allContentfulGleam{
        edges{
          node{
            id
            photoName
            photo{
              fixed(width:900, height: 500){
                ...GatsbyContentfulFixed_tracedSVG
              }
            }
          }
        }
      }
      zeal: allContentfulZeal{
        edges{
          node{
            id
            photoName
            photo{
              fixed(width:900, height: 500){
                ...GatsbyContentfulFixed_tracedSVG
              }
            }
          }
        }
      }

}
`;

export default GlasstopPage
