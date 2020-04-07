import React from "react"
import { Link ,graphql} from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Background from "../components/global/Background"
import Info from "../components/Home/Info"


const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <Background className="col-10 col-sm-10" img={data.img.childImageSharp.fluid} styleClass="default-background gradient:after">
      <div className="gradient">
      Avinash Industries
      </div>
        
      </Background>
    <Info>
    </Info>
  </Layout>

  
)

export const query = graphql`
{
  img: file(relativePath: {eq: "preethi.jpeg"}) {
    childImageSharp {
      fluid(quality: 100) {
        ...GatsbyImageSharpFluid_withWebp_noBase64
      }
    }
  }
}
`;
export default IndexPage
