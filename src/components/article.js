import React from "react"
import Link from "gatsby-link"

const Article = props => 
    // <div css={{border: `1px red dashed`}}>
        <div css={{
            width:`450px`,
            height:`500px`,
            margin: `30px`,
            padding: `2px`,
            flex: `0 0 1`,
            overflow: `hidden`,
            alignSelf: `center`
        }}>
            <a href={props.link}>
                <img src={props.linkToImage}
                     css={{border: `4px #B4E1FF solid`}}/>
            </a>
            <h3 className="article-title"
                css={{
                    textAlign: `center`,
                    fontSize: `18px`,
                    
                }}>
                {props.title}
            </h3>
        </div>
       
    // </div>

export default Article

