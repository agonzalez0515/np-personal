import React from "react"
import Link from "gatsby-link"

const Article = props => 
    <div css={{
        width:`400px`,
        height:`250px`,
        border: `2px solid black`,
        margin: `30px`,
        padding: `2px`
    }}>
        <Link to="https://example.com">
            <img src="http://lorempixel.com/400/200" />
        </Link>
       <p css={{
            textAlign: `center`,
            fontSize: `18px`,
        }}>
            {data.allGoogleSheetArticlesRow.edges.node.title}
       </p>
    </div>


export default Article ({data})

//figure out how to use props and graphql


export const query = graphql`
    query googleSheets {
        allGoogleSheetArticlesRow {
        edges {
            node {
            title
            urlToArticle
            urlToImage
                }
            }
        }
    }
`  