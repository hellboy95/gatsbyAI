import React from 'react'
import Img from "gatsby-image"

export default function Team({que}) {
    return (
            <div className="container-fluid py-3">
                    <div className="row">
                    {que.team.edges.map(({ node }) => {
                        return(
                            <div key={node.name1} className="col-xl-2 mx-auto">
                                <div className="row d-flex justify-content-xl-center align-items-center">
                                    <Img fixed={node.memberPhoto.fixed} />
                                    <a href="https://www.linkedin.com/in/annamalai-palaniappan-025a7a17/">
                                            <h3 className="text-center">{node.name1}</h3>
                                        </a>
                                    <p className="justify-content-md-center py-3 aqua bold">{node.role}</p>
                                </div>
                            </div>
                    
                        );
                    })} 

                    </div>
            </div>

    
    )
}

