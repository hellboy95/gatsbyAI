import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Addres from "../components/ContactUs/Addres"
import ContactTitle from "../components/ContactUs/ContactTitle"
import ContactMap from "../components/ContactUs/ContactMap"


export default function ContactUs(data) {
  return (
    <Layout>
      <SEO title="ContactUs" />
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-12">
            <ContactTitle title="CONTACT US" />
            <Addres addressDetails={data} />
          </div>
          <ContactMap></ContactMap>
        </div>
      </div>
    </Layout>
  )
}


export const query = graphql`  
{
  contactUsAddress:allContentfulContactUsAddresses{
    edges{
      node{
        header1
        header2
        address{
          address
        }
        telephoneNumber
      }
    }
  }
    contactUsTeam:allContentfulContactUsTeam{
      edges{
        node{
          name
          position
          email
          mobile
        }
      }
    }
  }`