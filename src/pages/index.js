import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <section className="h-100vh marker" data-sal data-background="black">
      <h2>Section One</h2>
    </section>
    <section className="marker h-100vh" data-sal data-background="grey">
      <h2>Section Two</h2>
    </section>
    <section className="marker h-100vh" data-sal data-background="orange">
      <h2>Section Three</h2>
    </section>
  </Layout>
)

export const Head = () => <Seo title="Home" />

export default IndexPage
