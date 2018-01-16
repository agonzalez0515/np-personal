import React from 'react'
import Link from 'gatsby-link'
import Article from '../components/article'


const IndexPage = ({data}) => {
  const allArticles = data.allContentfulArticle.edges
  
  return (
    <div css={{
      display: `flex`,
      flexFlow: `row wrap`,
      justifyContent: `space-evenly`,
      alignItems: `center`,
      padding: `0`,
      marginTop: `50px`
    }}
    >
    {
      allArticles.map(({node:article}) =>
      <Article title={article.title} link={article.link} linkToImage={ article.image == null ? article.linkToImage : article.image.file.url} /> 
    )}
    </div> 
  )
}

export default IndexPage

export const contentQuery = graphql`
  query Content {
    allContentfulArticle {
      edges {
        node {
          title
          link
          image {
            file {
              url
            }
          }
        }
      }
    }
  }
`