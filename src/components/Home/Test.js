import React from 'react'
import Img from "gatsby-image"

export default function Test({que}) {
    return (
        <section className="py-5">
          <div className="container">
              {que.test.edges.map(({ node }) => {
                  console.log(que);
                  
                if(node.clientName === "preethi")
                {
                    return(
                    <div className="row">
                        <div key={node.id} className="col col-sm-auto d-flex">
                              <div>
                                    <Img fixed={node.client.fixed} />
                              </div>
                              <div className="flex-grow-1 py-5 ml-5">
                                    <p className="aqua">{node.clientTestimonial}</p>
                              </div>
                    
                    </div>
                    </div>
      
                      );
                }
                if(node.clientName === "butterfly")
                {
                    return(
                    <div className="row">
                        <div key={node.id} className="col col-sm-auto d-flex">
                              <div className="flex-grow-1 py-5 mr-5">
                                    <p className="aqua">{node.clientTestimonial}</p>
                              </div>
                              <div>
                                    <Img fixed={node.client.fixed}/>
                              </div>
                             
                    
                        </div>
                    </div>
      
                      );

                }
                
              })} 
          </div>

      </section>
    )
}
