import React from 'react'
import Link from 'gatsby-link'
import Article from '../components/article'

const IndexPage = ({data}) => {
  // const {title, link, linkToImage} = data.allContentfulArticle.edges[0].node
  const allArticles = data.allContentfulArticle.edges
  

  return (
    <div css={{
      display: `flex`,
      flexFlow: `row wrap`,
      justifyContent: `space-around`,
      alignItems: `center`,
      padding: `0`,
      marginTop: `20px`,
    }}
    >
    {
      allArticles.map(({node:article}) =>
      <Article title={article.title} link={article.link} linkToImage={article.linkToImage} /> 
    )}
    </div>
  )
}

export default IndexPage

export const contentQuery = graphql`
  query Content {
    allContentfulArticle {
      edges{
        node {
          title
          link
          linkToImage
          
        }
      }
    }
  }
`