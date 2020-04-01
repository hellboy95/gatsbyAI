import React from "react"
import { Link ,graphql} from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Background from "../components/global/Background"
import Info from "../components/Home/Info"


const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <Background img={data.image.childImageSharp.fluid} title="Avinash Industries" styleClass="default-background"/>
    <Info>
    </Info>
  </Layout>

  
)

export const query = graphql`
{
  image: file(relativePath: {eq: "preethi.jpg"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
}
`;
export default IndexPage
