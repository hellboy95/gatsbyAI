import React from "react"
import { Link ,graphql, useStaticQuery} from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import BackgroundImage from 'gatsby-background-image'
import Addres from "../components/ContactUs/Addres"


  export const query = graphql`
  query {
    file(relativePath: { eq: "contact_us_try5.jpg" }) {
      childImageSharp {
        # Specify a fixed image and fragment.
        # The default width is 400 pixels
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`


const ContactUs = ({data}) => (
  <Layout>
    <div className="container-fluid ">
<BackgroundImage
          className="contactUsBackground"
          fluid={data.file.childImageSharp.fluid}
        >
          <h1 className="text-center heroheader text-uppercase display-4 font-weight-bold mt-5 ">CONTACT US</h1>
          {/* <h1 class="text-center" > CONTACT US </h1> */}
          </BackgroundImage>
      <div class="text-center">

      </div>
    <div className="row">
      <Addres header ="HEAD OFFICE" details= "Avinash Industries

Plot 41, 3rd Main Road,

AGS Colony, Kottivakkam,

Chennai 600 041.

Telephone: 044-27479178"/>
    </div>
    </div>
  </Layout>

  
)


export default ContactUs
