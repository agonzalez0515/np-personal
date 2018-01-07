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
        <a href={props.link}>
            <img src={props.linkToImage} />
        </a>
       <p css={{
            textAlign: `center`,
            fontSize: `18px`,
        }}>
            {props.title}
       </p>
    </div>


export default Article

