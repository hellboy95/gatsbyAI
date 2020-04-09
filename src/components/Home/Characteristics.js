import React from 'react'
import { StaticQuery,graphql } from "gatsby"
import Title from '../global/Title'
import Img from "gatsby-image"

const Characteristics  = () => (
  <StaticQuery
      query={graphql`
              {
                characteristics:allContentfulCharacteristics{
                  edges{
                    node{
                      id
                      summary
                      description
                      quality{
                        fixed(width:50, height: 50){
                          ...GatsbyContentfulFixed_tracedSVG
                        }
                      }
                    }
                  }
                }
              }`
      }

      render={data =>(
        <>
            <div className="container py-5">
              <div className="row">
                {data.characteristics.edges.map(({ node }) => {
                  return(
                    <div key={node.id} className="col-4 col-sm-2 d-flex mx-auto">
                        <div className="row justify-content-center">
                          <Img fixed={node.quality.fixed} />
                          <p className="text-center py-3 aqua bold">{node.summary}</p>
                        </div>
                    </div>

                  );
                })} 
                </div>
            </div>

        </>
      )}
  />
)




export default Characteristics;