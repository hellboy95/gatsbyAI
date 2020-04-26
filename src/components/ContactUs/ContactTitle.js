import React from 'react'
import ContactIcons from "../../components/ContactUs/ContactIcons"

export default function ContactTitle({ title }) {
    return (
        <div className="container-fluid py-5 about-background">
            <div className="row">
                <div className="col-xl-12 col-lg-8 col-sm-4 col-12 mx-auto text-center">
                    <h1 className="font-weight-bolder">{title}
                    </h1>
                    <ContactIcons ></ContactIcons>
                </div>
            </div>
        </div>
    )
}