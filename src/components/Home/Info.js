import React from 'react'
import {Link} from "gatsby"
import Title from "../global/Title"

export default function Info({children}) {
    return (
        <div className="container-fluid test py-5">
            <Title title="Our Story" />
            <div className="row">
                <div className="col-10 col-sm-8 mx-auto text-center">
                    <p className="lead text-dark mb-5">
                        We are a family owned OEM manufacturing company producing high quality products for nation leading kitchen applicance brands. Drawing from 30 years of manufacturing experience, we bring
                        unparalled technical expertise and proven management practices to deliver the best results.
                    </p>
                    <Link to="/about/">
                        <button className="btn text-uppercase btn-yellow">
                            About Us
                        </button>
                    </Link>
                </div>
            </div>
        </div>

    )
}

