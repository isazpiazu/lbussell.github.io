/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      github: file(absolutePath: { regex: "/github.png/" }) {
        childImageSharp {
          fixed(width: 32, height: 32) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      mail: file(absolutePath: { regex: "/mail.png/" }) {
        childImageSharp {
          fixed(width: 32, height: 32) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <div>
      <div className="media mb-3">
        <div className="media-body">
          <h5 className="media-heading">About me</h5>
          I'm a programmer, student, and musician studying computer science at
          Georgia Tech. I like making keyboards, using Linux, and listening to
          really technical music.
        </div>
      </div>
      <hr />
      <div className="media">
        <Image
          className="align-self-center mr-3 mb-3"
          fixed={data.mail.childImageSharp.fixed}
        />
        <div className="media-body">
          <a
            style={{ textDecoration: "none", lineHeight: "32px" }}
            href="mailto:lbussell3@gatech.edu"
          >
            Send me an email
          </a>
        </div>
      </div>
      <div className="media">
        <Image
          className="align-self-center mr-3"
          fixed={data.github.childImageSharp.fixed}
        />
        <div className="media-body">
          <a
            style={{ textDecoration: "none", lineHeight: "32px" }}
            href="https://github.com/lbussell/"
          >
            See me on Github
          </a>
        </div>
      </div>
      <hr />
    </div>
  )
}

export default Bio
