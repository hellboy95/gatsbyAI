import React from 'react'
import { StaticQuery,graphql } from "gatsby"
import Img from "gatsby-image"

const Test  = () => (

    <StaticQuery
    query={graphql`
            {
                test: allContentfulTest(sort: {fields: clientName, order: DESC}){
                    edges {
                      node {
                        id
                        clientTestimonial
                        clientName
                        client{
                          fixed(width: 750, height: 210) {
                            ...GatsbyContentfulFixed_tracedSVG
                          }
                        }
                      }
                    }
                  }
            }`
    }

    render={data =>(
      <section className="py-5">
          <div className="container">
            <div className="row">
              {data.test.edges.map(({ node }) => {
                  console.log(data);
                  
                if(node.clientName == "preethi")
                {
                    return(
                    <div className="row">
                        <div key={node.id} className="col col-sm-auto d-flex">
                              <div>
                                    <Img fixed={node.client.fixed} />
                              </div>
                              <div className="flex-grow-1 px-6 py-5">
                                    <p className="aqua">{node.clientTestimonial}</p>
                              </div>
                    
                    </div>
                    </div>
      
                      );
                }
                if(node.clientName == "butterfly")
                {
                    return(
                    <div className="row">
                        <div key={node.id} className="col col-sm-auto d-flex">
                              <div className="flex-grow-1 px-6 py-5">
                                    <p className="aqua">{node.clientTestimonial}</p>
                              </div>
                              <div>
                                    <Img fixed={node.client.fixed} />
                              </div>
                             
                    
                        </div>
                    </div>
      
                      );

                }
                
              })} 
              </div>
          </div>

      </section>
    )}
/>
)



export default Test;