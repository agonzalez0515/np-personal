import React from 'react'
import Article from '../components/article'
import '../style.scss'


const IndexPage = ({data}) => {
  const allArticles = data.allContentfulArticle.edges
  
  return (
    <main className="article-container">
    {allArticles.map(({node:article}) =>
      <Article
        key={article.id} 
        caption={article.caption} 
        title={article.title} 
        link={article.link} 
        description={article.image.description} 
        linkToImage={ article.image == null ? article.linkToImage : article.image.file.url}
      /> 
      )
    }
    </main> 
  )
}

export default IndexPage

export const contentQuery = graphql`
  query Content {
    allContentfulArticle(sort: {fields: [datePublished], order: DESC} ) {
      edges {
        node {
          id
          title
          link
          caption
          image {
            description
            file {
              url
            }
          }
        }
      }
    }
  }
`