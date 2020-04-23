import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import BackgroundImage from 'gatsby-background-image'
import Addres from "../components/ContactUs/Addres"
import Title from "../components/global/Title"
import ContactTitle from "../components/ContactUs/ContactTitle"
import ContactMap from "../components/ContactUs/ContactMap"


export default function ContactUs() {
  return (
    <Layout>

      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-12">
            <ContactTitle title="CONTACT US" />
            <Addres header="HEAD OFFICE" details="Avinash Industries

              Plot 41, 3rd Main Road,
            
            AGS Colony, Kottivakkam,
            
            Chennai 600 041.
            
            Telephone: 044-27479178"/>
                        </div>
        <ContactMap></ContactMap>

        </div>
      </div>

    </Layout>
  )
}