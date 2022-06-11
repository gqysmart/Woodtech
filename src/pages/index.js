import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Header from "../components/header"
import Hero from "../components/hero"

const IndexPage = () => {
  return (
    <>
      <Header></Header>
      <Hero></Hero>
    </>
  )
}

export default IndexPage
