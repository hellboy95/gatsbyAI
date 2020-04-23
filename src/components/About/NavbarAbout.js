import React from 'react'
import Img from "gatsby-image"



export default function NavbarAbout({id1,id2,id3}) {
    return (
            <div className="container-fluid sticky-top mx-auto py-3 ">
                    <div className="row mx-auto ">
                        <div className="col-4 text-center">
                            <a href={id1} ><span>Company Profile</span></a>
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

