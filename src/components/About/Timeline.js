import React from 'react'
import Img from "gatsby-image"

export default function Timeline({que}) {
  
  return (

    <div className="container-fluid">
        <div className="row py-5">
            {que.timeline.edges.map(({ node }) => {
                return(
                <div key={node.year} className="col-xl-2 mx-auto">
                    <div className="row d-flex justify-content-xl-center align-items-center">
                        <Img fixed={node.yearPhoto.fixed} />
                        <h3 className="text-center">{node.year}</h3>
                        <p className="justify-content-md-center py-3 aqua bold">{node.yearSummary}</p>
                    </div>
                </div>
            
                );
            })} 
            </div>
    </div>
    
   
  )
}
