import React from 'react'
import Link from 'gatsby-link'
import Article from '../components/article'

const IndexPage = () => (
  <div>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </div>
)

export default () => (
  <div>
  <div css={{
    display: `flex`,
    flexFlow: `row wrap`,
    justifyContent: `space-around`,
    alignItems: `center`,
    padding: `0`,
    marginTop: `20px`,
  }}
  >
    <Article /><Article /><Article />
  </div>
  <div css={{
    display: `flex`,
    flexFlow: `row wrap`,
    justifyContent: `space-around`,
    alignItems: `center`,
    padding: `0`,
    margin: `0`,
  }}
  >
    <Article /><Article /><Article />
  </div>
  </div>
)
