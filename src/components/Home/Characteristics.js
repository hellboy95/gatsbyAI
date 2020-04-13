import React from 'react'
import Img from "gatsby-image"

export default function Characteristics({que}) {
  
  return (

    <div className="container py-5">
    <div className="row">
      {que.characteristics.edges.map(({ node }) => {
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
  )
}
