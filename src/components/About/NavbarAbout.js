import React from 'react'
import Img from "gatsby-image"



export default function NavbarAbout({que}) {
    return (
            <div className="container-fluid mx-auto py-3 navabout">
                    <div className="row mx-auto ">
                        <div className="col-4 text-center">
                            <a href="#profile" ><span>Company Profile</span></a>
                        </div>
                        <div className="col-4 text-center">
                            <a href="#mission" ><span>Our Mission & Vision</span></a>
                        </div>
                        <div className="col-4 text-center">
                            <a href="#team" ><span>Our Team</span></a>
                        </div>

                    </div>
            </div>

    
    )
}

