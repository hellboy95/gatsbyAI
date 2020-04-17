import React from 'react'
import Img from "gatsby-image"

export default function Timeline({que}) {
  
  return (

    <div className="row d-flex flwx-row py-5">
      {que.timeline.edges.map(({ node }) => {
        return(
          <div key={node.year} className="my-flex-item col-lg-2 d-flex mx-auto">
              <div className="row justify-content-center">
                <Img fixed={node.yearPhoto.fixed} />
                <h3 className="text-center">{node.year}</h3>
                <p className="text-center py-3 aqua bold">{node.yearSummary}</p>
              </div>
          </div>
    
        );
      })} 
      </div>
   
  )
}
